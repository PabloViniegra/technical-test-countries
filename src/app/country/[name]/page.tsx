"use client";

import { notFound } from "next/navigation";
import useCountry from "@/hooks/useCountry";
import { Card, CardBody, CardFooter, Divider, Link, Button } from "@heroui/react";
import { Spinner, addToast } from "@heroui/react";
import { Earth } from "lucide-react";
import Background from "@/components/Background";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import CountryHeader from "@/components/CountryHeader";
import CountryMainFacts from "@/components/CountryMainFacts";
import CountryExtraDetails from "@/components/CountryExtraDetails";
import React from 'react';

interface CountryPageProps {
  params: Promise<{ name: string }>;
}

function Breadcumb({ items }: { items: { name: string; href: string }[] }) {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <Breadcrumbs variant="bordered" color="foreground">
        {items.map((item, index) => (
          <BreadcrumbItem key={index} color="foreground">
            <Link href={item.href} color="foreground" className="font-sans-serif font-semibold tracking-tight text-sm">
              {item.name}
            </Link>
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
}

export default function Country({ params }: CountryPageProps) {
  const { name } = React.use(params);
  const decodedName = decodeURIComponent(name || "");
  const { country, isLoading, error } = useCountry(decodedName);

  if (!decodedName) {
    notFound();
  }
  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen mx-auto">
        <Spinner
          classNames={{ label: "text-foreground mt-4" }}
          variant="simple"
        />
      </div>
    );
  }
  if (error) {
    return addToast({
      title: "Error",
      description: error,
      variant: "solid",
      color: "danger",
    });
  }
  if (!country) {
    return (
      <div className="flex flex-col items-center h-screen mx-auto my-[15%]">
        <p className="text-gray-300 text-md font-sans-serif font-medium tracking-tight">
          No se encontró el país
        </p>
        <Earth className="size-8 mt-1" />
      </div>
    );
  }

  return (
    <Background>
      <div className="w-full flex flex-row justify-center items-center py-3">
        <Breadcumb
          items={[
            { name: "Home", href: "/" },
            {
              name: country.name.common,
              href: `/country/${country.name.common}`,
            },
          ]}
        />
      </div>
      <div className="relative w-full flex flex-col items-center justify-center mt-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl z-0 animate-pulse-slow" />
        <Card className="relative z-10 max-w-2xl w-full rounded-3xl backdrop-blur-xl animate-fade-in-up transition-all duration-500 shadow-sm shadow-foreground">
          <CountryHeader country={country} />
          <CardBody className="px-10 py-8">
            <CountryMainFacts country={country} />
          </CardBody>
          <Divider className="mx-8" />
          <CardBody className="px-10 pt-2 pb-6">
            <CountryExtraDetails country={country} />
          </CardBody>
          <CardFooter className="px-8 py-4 flex justify-end">
            <Button
              showAnchorIcon
              as={Link}
              color="primary"
              href={country.maps?.googleMaps}
              variant="solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Background>
  );
}

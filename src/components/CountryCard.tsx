import { Country } from "@/types";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@heroui/react";
import { Chip, Button } from "@heroui/react";
import  Link from 'next/link';
import { CornerDownRight } from 'lucide-react';

export default function CountryCard({ country }: { country: Country }) {
  const FLAGS_URL = process.env.NEXT_PUBLIC_FLAGS_API_URL;
  const flagUrl = `${FLAGS_URL}/${country.cca2}/flat/64.png`;

  return (
    <Card
      className="w-64 h-52 py-4 hover:scale-105 transition-transform duration-75 hover:cursor-pointer"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Chip className="font-mono text-tiny uppercase font-bold tracking-tight text-center bg-gray-200/50 rounded-3xl py-1 px-3 text-black">{country.cca3}</Chip>
        <h4 className="font-sans font-bold text-large tracking-tight text-center">{country.name.common}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={flagUrl}
          width={64}
        />
      </CardBody>
      <CardFooter className="w-full flex justify-end">
        <Link href={`/country/${encodeURIComponent(country.name.common)}`}>
          <Button variant="solid" size="sm" about="Go to the country details" className="text-foreground bg-white/10 backdrop-blur-2xl shadow-xl hover:bg-white/40">
            <CornerDownRight className="size-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}


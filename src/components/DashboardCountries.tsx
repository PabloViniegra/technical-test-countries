"use client";

import { Countries } from "@/types";
import CountryCard from "./CountryCard";
import { useMemo } from "react";

interface Props {
  countries: Countries;
  isLoading: boolean;
  searchQuery: string;
}

export default function DashboardCountries({
  countries,
  isLoading,
  searchQuery,
}: Props) {
  const noResults = useMemo(() => {
    return !isLoading && countries.length === 0 && searchQuery.trim() !== "";
  }, [isLoading, countries, searchQuery]);

  if (noResults) {
    return (
        <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300 text-lg">
            No se encontraron países que coincidan con &quot;{searchQuery}&quot;
        </p>
    </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </section>
  );
}

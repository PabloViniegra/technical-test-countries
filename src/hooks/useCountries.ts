"use client";

import { getCountries } from "@/services/countriesService";
import { useState, useEffect, useMemo } from "react";
import { Countries } from "@/types";

const ITEMS_PER_PAGE = 12;

interface Props {
    searchQuery: string;
    currentPage: number;
    region: string | null;
    language: string | null;
    currency: string | null;
}

export function useCountries({ searchQuery = '', currentPage = 1, region = null, language = null, currency = null }: Props) {
  const [allCountries, setAllCountries] = useState<Countries | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredCountries = useMemo(() => {
    if (!allCountries) return [];

    return allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (region ? country.region === region : true) &&
      (language ? Object.values(country.languages).includes(language) : true) &&
      (currency ? Object.keys(country.currencies).includes(currency) : true)
    );
  }, [allCountries, searchQuery, region, language, currency]);

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const paginatedCountries = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCountries.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCountries, currentPage]);

  useEffect(() => {
    const fetchCountries = async () => {
      if (allCountries) return;

      setLoading(true);
      setError("");
      try {
        const data = await getCountries();
        setAllCountries(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unexpected error");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [allCountries]);

  const safeCountries = paginatedCountries || []
  const safeFilteredCountries = filteredCountries || []

  return {
    countries: safeCountries,
    allCountries: safeFilteredCountries,
    totalPages: Math.max(1, totalPages),
    currentPage: Math.min(Math.max(1, currentPage), Math.max(1, totalPages)),
    totalItems: safeFilteredCountries.length,
    isLoading: loading,
    error,
  }
}

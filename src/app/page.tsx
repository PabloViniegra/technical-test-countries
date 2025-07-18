"use client";

import Background from "@/components/Background";
import { useCountries } from "@/hooks/useCountries";
import DashboardCountries from "@/components/DashboardCountries";
import { Spinner, addToast } from "@heroui/react";
import SearchBar from "@/components/SearchBar";
import CustomPagination from "@/components/CustomPagination";
import PanelFilter from "@/components/PanelFilter";
import { useCallback, useState } from "react";
import { Earth } from 'lucide-react';
import CustomNavbar from "@/components/CustomNavbar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [region, setRegion] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string | null>(null);
  const { countries, isLoading, error, totalPages, totalItems } = useCountries({
    searchQuery,
    currentPage,
    region,
    language,
    currency,
  });

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handleRegionChange = useCallback((region: string) => {
    setRegion(region);
    setCurrentPage(1);
  }, []);

  const handleLanguageChange = useCallback((language: string) => {
    setLanguage(language);
    setCurrentPage(1);
  }, []);

  const handleCurrencyChange = useCallback((currency: string) => {
    setCurrency(currency);
    setCurrentPage(1);
  }, []);

  if (isLoading && !countries)
    return (
      <div className="flex flex-col justify-center items-center h-screen mx-auto">
        <Spinner
          classNames={{ label: "text-foreground mt-4" }}
          variant="simple"
        />
      </div>
    );
  if (error) {
    return addToast({
      title: "Error",
      description: error,
      variant: "solid",
      color: "danger",
    });
  }

  return (
    <Background>
      <CustomNavbar />
      <main className="flex flex-col items-center gap-8 min-h-screen py-12 mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-gray-500 to-gray-500 drop-shadow-lg mb-6 text-center">
          Countries of the world
        </h1>
        <div className="w-full max-w-2xl flex flex-col md:flex-row items-stretch md:items-end gap-3 md:gap-4 mb-4 mx-auto">
          <div className="flex-1">
            <SearchBar value={searchQuery} onChange={handleSearch} />
          </div>
          <div className="flex-none md:ml-2">
            <PanelFilter
              countries={countries}
              onRegionChange={handleRegionChange}
              onLanguageChange={handleLanguageChange}
              onCurrencyChange={handleCurrencyChange}
              selectedRegion={region || ""}
              selectedLanguage={language || ""}
              selectedCurrency={currency || ""}
            />
          </div>
        </div>
        {countries.length > 0 ? (
          <DashboardCountries
            countries={countries}
            isLoading={isLoading}
            searchQuery={searchQuery}
          />
        ) : (
          <div className="flex flex-col items-center h-screen mx-auto my-[15%]">
            <p className="text-gray-300 text-md font-sans-serif font-medium tracking-tight">
              No se encontraron países
            </p>
            <Earth className="size-8 mt-1" />
          </div>
        )}
        {totalPages > 1 && (
          <CustomPagination
            total={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        )}
        {totalItems > 0 && (
          <div className="font-mono text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            Mostrando {Math.min((currentPage - 1) * 12 + 1, totalItems)}-
            {Math.min(currentPage * 12, totalItems)} de {totalItems} países
          </div>
        )}
      </main>
    </Background>
  );
}

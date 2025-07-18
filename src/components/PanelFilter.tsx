'use client'

import { useMemo } from "react";
import { Select, SelectItem, Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { Countries } from "@/types";
import { ListFilterPlus } from "lucide-react";

interface PanelFilterProps {
  countries: Countries;
  selectedRegion: string;
  selectedLanguage: string;
  selectedCurrency: string;
  onRegionChange: (region: string) => void;
  onLanguageChange: (language: string) => void;
  onCurrencyChange: (currency: string) => void;
}

export default function PanelFilter({
  countries,
  onRegionChange,
  onLanguageChange,
  onCurrencyChange,
  selectedRegion,
  selectedLanguage,
  selectedCurrency,
}: PanelFilterProps) {
  
  const regions = useMemo(() => {
    const set = new Set<string>();
    countries.forEach((c) => set.add(c.region));
    return Array.from(set).sort().map((region) => ({ value: region, label: region }));
  }, [countries]);

  const languages = useMemo(() => {
    const set = new Set<string>();
    countries.forEach((c) => {
      Object.values(c.languages || {}).forEach((lang) => set.add(lang));
    });
    return Array.from(set).sort().map((lang) => ({ value: lang, label: lang }));
  }, [countries]);

  const currencies = useMemo(() => {
    const map = new Map<string, string>();
    countries.forEach((c) => {
      Object.entries(c.currencies || {}).forEach(([code, cur]) => {
        map.set(code, cur.name);
      });
    });
    return Array.from(map.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map(([code, name]) => ({ value: code, label: name }));
  }, [countries]);

  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button size="sm" className="flex flex-row items-center gap-2 font-sans-serif text-xs tracking-wide text-white/80" variant="faded">
          <ListFilterPlus className="size-4" />
          Filter panel
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-80 max-w-xs p-4 flex flex-col gap-4">
          <div className="text-lg font-bold text-center mb-2 font-sans">Filters</div>
          <Select
            label="Region"
            className="w-full"
            items={regions}
            selectionMode="single"
            selectedKeys={selectedRegion ? [selectedRegion] : []}
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0] as string || "";
              onRegionChange(value);
            }}
          >
            {(regions) => <SelectItem key={regions.value}>{regions.label}</SelectItem>}
          </Select>
          <Select
            label="Language"
            className="w-full"
            items={languages}
            selectionMode="single"
            selectedKeys={selectedLanguage ? [selectedLanguage] : []}
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0] as string || "";
              onLanguageChange(value);
            }}
          >
            {(languages) => <SelectItem key={languages.value}>{languages.label}</SelectItem>}
          </Select>
          <Select
            label="Currency"
            className="w-full"
            items={currencies}
            selectionMode="single"
            selectedKeys={selectedCurrency ? [selectedCurrency] : []}
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0] as string || "";
              onCurrencyChange(value);
            }}
          >
            {(currencies) => <SelectItem key={currencies.value}>{currencies.label}</SelectItem>}
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
}

import { CountryDetail } from "@/types";
import { CurrencyInfo } from "@/types";

interface CountryMainFactsProps {
  country: CountryDetail;
}

export default function CountryMainFacts({ country }: CountryMainFactsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
      <div>
        <span className="font-sans-serif block text-xs font-semibold uppercase text-gray-300 tracking-wider mb-1">
          Official Name
        </span>
        <span className="font-sans-serif text-lg font-medium text-gray-900 dark:text-gray-100">
          {country.name.official}
        </span>
      </div>
      <div>
        <span className="font-sans-serif block text-xs font-semibold uppercase text-gray-300 tracking-wider mb-1">
          Capital
        </span>
        <span className="font-sans-serif text-lg font-medium text-gray-900 dark:text-gray-100">
          {country.capital?.join(", ") || "N/A"}
        </span>
      </div>
      <div>
        <span className="font-sans-serif block text-xs font-semibold uppercase text-gray-300 tracking-wider mb-1">
          Population
        </span>
        <span className="font-sans-serif text-lg font-medium text-gray-900 dark:text-gray-100">
          {country.population.toLocaleString()}
        </span>
      </div>
      <div>
        <span className="font-sans-serif block text-xs font-semibold uppercase text-gray-300 tracking-wider mb-1">
          Languages
        </span>
        <span className="font-sans-serif text-lg font-medium text-gray-900 dark:text-gray-100">
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A"}
        </span>
      </div>
      <div>
        <span className="font-sans-serif block text-xs font-semibold uppercase text-gray-300 tracking-wider mb-1">
          Currencies
        </span>
        <span className="font-sans-serif text-lg font-medium text-gray-900 dark:text-gray-100">
          {country.currencies
            ? Object.values(country.currencies)
                .map((c: CurrencyInfo) => typeof c === 'object' && c.name ? c.name + (c.symbol ? ` (${c.symbol})` : "") : "")
                .join(", ")
            : "N/A"}
        </span>
      </div>
      <div>
        <span className="font-sans-serif block text-xs font-semibold uppercase text-gray-300 tracking-wider mb-1">
          Timezones
        </span>
        <span className="font-sans-serif text-lg font-medium text-gray-900 dark:text-gray-100">
          {country.timezones.join(", ")}
        </span>
      </div>
    </div>
  );
}

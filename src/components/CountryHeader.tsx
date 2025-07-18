import { CardHeader, Divider, Image } from "@heroui/react";

import { CountryDetail } from "@/types";

interface CountryHeaderProps {
  country: CountryDetail;
}

export default function CountryHeader({ country }: CountryHeaderProps) {
  return (
    <>
      <CardHeader className="flex flex-row items-center gap-8 px-10 py-8 rounded-t-3xl">
        {country.flags?.svg && (
          <Image
            src={country.flags.svg}
            alt={country.name.common + " flag"}
            className="w-28 h-20 object-contain border-2 border-primary/40 shadow-md rounded-xl bg-white dark:bg-slate-800/50 transition-transform duration-200 hover:scale-105"
          />
        )}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-extrabold font-sans tracking-tight text-gray-900 dark:text-foreground drop-shadow-sm">
              {country.name.common}
            </h1>
            {country.coatOfArms?.svg && (
              <Image
                src={country.coatOfArms.svg}
                alt={country.name.common + " coat of arms"}
                className="size-14 object-contain ml-2 opacity-90 bg-white/40 dark:bg-slate-900/40 rounded-full border border-fuchsia-300/40 shadow"
              />
            )}
          </div>
          <span className="text-base font-mono text-gray-400 tracking-wide">
            {country.region} {country.subregion ? `• ${country.subregion}` : ""}
          </span>
        </div>
      </CardHeader>
      <Divider />
    </>
  );
}

import { CountryDetail } from "@/types";
import { Translation } from "@/types";

interface CountryExtraDetailsProps {
  country: CountryDetail;
}

export default function CountryExtraDetails({ country }: CountryExtraDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 dark:text-gray-200 font-sans-serif tracking-wide">
      {country.tld && (
        <div>
          <b>Domain:</b> {country.tld.join(", ")}
        </div>
      )}
      <div>
        <b>ISO Codes:</b> {country.cca2} / {country.cca3}
        {country.ccn3 ? ` / ${country.ccn3}` : ""}
        {country.cioc ? ` / ${country.cioc}` : ""}
      </div>
      <div>
        <b>Area:</b> {country.area.toLocaleString()} km²
      </div>
      {country.borders && country.borders.length > 0 && (
        <div>
          <b>Borders:</b> {country.borders.join(", ")}
        </div>
      )}
      <div>
        <b>Continent:</b> {country.continents?.join(", ")}
      </div>
      <div>
        <b>Demonym:</b> {country.demonyms?.eng?.m}
        {country.demonyms?.eng?.f ? ` / ${country.demonyms.eng.f}` : ""}
      </div>
      <div>
        <b>Week starts on:</b> {country.startOfWeek}
      </div>
      {country.postalCode && country.postalCode.format && (
        <div>
          <b>Postal format:</b> {country.postalCode.format}
        </div>
      )}
      {country.postalCode && country.postalCode.regex && (
        <div>
          <b>Postal regex:</b> {country.postalCode.regex}
        </div>
      )}
      {country.gini && (
        <div>
          <b>GINI:</b>{" "}
          {Object.entries(country.gini)
            .map(([year, val]) => `${year}: ${val}`)
            .join(", ")}
        </div>
      )}
      <div>
        <b>Independent:</b> {country.independent ? "Yes" : "No"}
      </div>
      <div>
        <b>UN Member:</b> {country.unMember ? "Yes" : "No"}
      </div>
      <div>
        <b>Status:</b> {country.status}
      </div>
      {country.flags?.alt && (
        <div>
          <b>Flag alt:</b> {country.flags.alt}
        </div>
      )}
      {country.translations && (
        <div className="col-span-2">
          <b>Translations:</b>{" "}
          {Object.entries(country.translations)
            .map(([lang, t]: [string, Translation]) => `${lang}: ${t && t.common ? t.common : ""}`)
            .join(", ")}
        </div>
      )}
      {country.car && country.car.signs && (
        <div>
          <b>Car signs:</b> {country.car.signs.join(", ")}
        </div>
      )}
      {country.capitalInfo?.latlng && (
        <div>
          <b>Capital (lat/lng):</b>{" "}
          {country.capitalInfo.latlng.join(", ")}
        </div>
      )}
    </div>
  );
}

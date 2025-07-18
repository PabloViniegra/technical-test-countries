import { apiCountry } from "@/api/apiCountry";
import { Countries, CountryDetail } from "@/types";

export const getCountries = async (): Promise<Countries> => {
  const { data } = await apiCountry.get<Countries>("/all", {
    params: {
      fields: "name,cca3,cca2,currencies,region,languages",
    },
  });
  return data;
};

export const getCountriesByRegion = async (
  region: string
): Promise<Countries> => {
  const { data } = await apiCountry.get<Countries>(`/region/${region}`, {
    params: {
      fields: "name,cca3,cca2,currencies,region,languages",
    },
  });
  return data;
};

export const getCountriesByName = async (name: string): Promise<Countries> => {
  const { data } = await apiCountry.get<Countries>(`/name/${name}`, {
    params: {
      fields: "name,cca3,cca2,currencies,region,languages",
    },
  });
  return data;
};

export const getCountryByName = async (name: string): Promise<CountryDetail[]> => {
  const url = `/name/${name}`;
  const { data } = await apiCountry.get<CountryDetail[]>(url);
  return data;
}
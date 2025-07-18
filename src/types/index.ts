export interface NativeName {
    official: string;
    common: string;
}

export interface CountryName {
    common: string;
    official: string;
    nativeName: {
        [lang: string]: NativeName
    }
}

export interface CurrencyInfo {
    name: string;
    symbol: string;
}

export interface Country {
    name: CountryName;
    cca3: string;
    cca2: string;
    currencies: {
        [currencyCode: string]: CurrencyInfo;
    };
    region: string;
    languages: {
        [langCode: string]: string;
    };
}

export type Countries = Country[];

export interface CountryDetail {
    name: CountryName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cioc?: string;
    independent?: boolean;
    status: string;
    unMember: boolean;
    currencies: Record<string, CurrencyInfo>;
    idd: IddInfo;
    capital?: string[];
    altSpellings: string[];
    region: string;
    subregion?: string;
    languages: Record<string, string>;
    latlng: [number, number];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms: Demonyms;
    cca3: string;
    translations: Record<string, Translation>;
    flag: string;
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    population: number;
    gini?: Record<string, number>;
    fifa?: string;
    car: CarInfo;
    timezones: string[];
    continents: string[];
    flags: FlagInfo;
    coatOfArms?: CoatOfArmsInfo;
    startOfWeek: string;
    capitalInfo?: {
      latlng?: [number, number];
    };
    postalCode?: {
      format: string | null;
      regex: string | null;
    };
  }
  
  export interface CountryName {
    common: string;
    official: string;
    nativeName: {
        [lang: string]: NativeName
    }
  }
  
  export interface CurrencyInfo {
    symbol: string;
    name: string;
  }
  
  export interface IddInfo {
    root: string;
    suffixes: string[];
  }
  
  export interface Demonyms {
    eng: { f: string; m: string };
    fra?: { f: string; m: string };
  }
  
  export interface Translation {
    official: string;
    common: string;
  }
  
  export interface CarInfo {
    signs: string[];
    side: string;
  }
  
  export interface FlagInfo {
    png: string;
    svg: string;
    alt?: string;
  }
  
  export interface CoatOfArmsInfo {
    png?: string;
    svg?: string;
  }
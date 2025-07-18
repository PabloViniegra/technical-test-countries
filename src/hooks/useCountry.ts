import { CountryDetail } from "@/types";
import { useEffect, useState } from "react";
import { getCountryByName } from "@/services/countriesService";


export default function useCountry(name: string) {
    const [country, setCountry] = useState<CountryDetail | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountry = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await getCountryByName(name);
                setCountry(data[0]);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Unexpected error");
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchCountry();
    }, [name]);

    return { country, isLoading, error };
}
import axios from "axios";

export const apiCountry = axios.create({
    baseURL: process.env.NEXT_PUBLIC_COUNTRIES_API_URL,
});

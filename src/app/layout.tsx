import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const fontSans = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
});

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

const fontSansSerif = Roboto({
    subsets: ["latin"],
    variable: "--font-sans-serif",
});
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`dark ${fontSans.className} ${fontMono.className} ${fontSansSerif.className}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

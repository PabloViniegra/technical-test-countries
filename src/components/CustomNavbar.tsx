import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { Code } from "lucide-react";
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export const NextJSLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="nextjs_icon_dark__mask0_408_139"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#nextjs_icon_dark__mask0_408_139)">
        <circle
          cx="90"
          cy="90"
          r="87"
          fill="black"
          stroke="white"
          strokeWidth="6"
        />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#nextjs_icon_dark__paint0_linear_408_139)"
        />
        <rect
          x="115"
          y="54"
          width="12"
          height="72"
          fill="url(#nextjs_icon_dark__paint1_linear_408_139)"
        />
      </g>
      <defs>
        <linearGradient
          id="nextjs_icon_dark__paint0_linear_408_139"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="nextjs_icon_dark__paint1_linear_408_139"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const GithubIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        transform="scale(64)"
        fill="#ffff"
      />
    </svg>
  );
};

export default function CustomNavbar() {
  return (
    <Navbar>
      <NavbarBrand className="flex flex-row items-center gap-2">
        <NextJSLogo className="size-7" />
        <p className="font-sans font-semibold tracking-tighter text-inherit uppercase">
          Countries
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="https://github.com/PabloViniegra"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-300
              dark:from-slate-800 dark:via-slate-900 dark:to-slate-700
              text-gray-900 dark:text-foreground font-semibold tracking-tight shadow-lg
              rounded-xl px-5 py-2 flex items-center gap-2
              transition-all duration-200
              hover:from-fuchsia-200 hover:to-indigo-200 hover:text-fuchsia-900
              dark:hover:from-fuchsia-900 dark:hover:to-indigo-800 dark:hover:text-fuchsia-100
              focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900
              active:scale-95
            "
            endContent={<GithubIcon className="size-5" />}
            aria-label="Github PabloViniegra"
          >
            Github
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://portfolio-pablo-viniegra.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="flat"
            color="success"
            endContent={<Code className="size-5" />}
            aria-label="portfolio PabloViniegra"
            className="font-sans-serif font-semibold tracking-tighter text-inherit text-xs uppercase flex flex-row items-center"
          >
            Portfolio
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

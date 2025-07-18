# Countries UI Project

Este es una prueba técnica en Next.js que muestra información detallada sobre países, utilizando la API de [restcountries.com](https://restcountries.com/).

## Características

- **Framework**: Next.js 14 (App Router)
- **UI**: Tailwind CSS 4, HeroUI, Lucide React
- **Theming**: Sistema de temas Light/Dark con `next-themes` y variables CSS.
- **Fuentes**: Geist Sans, Geist Mono y Roboto.

## Empezando

Sigue estos pasos para tener una copia local del proyecto funcionando.

### Prerrequisitos

- Node.js (v18 o superior)
- npm, yarn, o pnpm

### Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### Instalación

Instala las dependencias del proyecto:

```bash
npm install
# o
yarn install
# o
pnpm install
```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y añade la siguiente variable de entorno:

```env
NEXT_PUBLIC_COUNTRIES_API_URL=https://restcountries.com/v3.1
NEXT_PUBLIC_FLAGS_API_URL=https://flagsapi.com
```

Esta variable es necesaria para que la aplicación pueda hacer peticiones a la API de `restcountries.com`.

### Arrancar el Servidor de Desarrollo

Una vez instaladas las dependencias y configuradas las variables de entorno, puedes arrancar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Ahora puedes abrir [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

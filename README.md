# Rick and Morty App

Aplicación web desarrollada con **Next.js** (App Router) que consume la [Rick and Morty API](https://rickandmortyapi.com/documentation) para explorar personajes y episodios del universo de la serie.

Proyecto académico — curso de Desarrollo Web Híbridas (Ucompensar).

## Características

- **Layout general**: Navbar con menú de navegación, barra de búsqueda y Footer.
- **Consumo de API**: integración con las secciones de **Personajes** y **Episodios**.
- **Paginación**: navegación clásica entre páginas de resultados.
- **Rutas dinámicas**: vista de detalle individual (`/characters/[id]`, `/episodes/[id]`).
- **Filtros**: búsqueda de personajes por nombre, estado y género; búsqueda de episodios por nombre.
- **Favoritos**: sistema para agregar/quitar personajes y episodios, persistido en `localStorage`.
- **Diseño responsivo**: adaptado a móvil, tablet y escritorio.
- **Server/Client Components**: separación optimizada aprovechando el App Router de Next.js.

## Tecnologías

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/Juanlopez222/rick-and-morty-app.git
cd rick-and-morty-app

# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de producción

```bash
npm run build
npm start
```

## Estructura del proyecto
app/
├─ characters/ # Listado y detalle de personajes
├─ episodes/ # Listado y detalle de episodios
├─ favorites/ # Página de favoritos
├─ layout.tsx # Layout raíz (Navbar + Footer)
└─ page.tsx # Página de inicio

components/
├─ layout/ # Navbar, Footer, Searchbox
└─ ui/ # Cards, filtros, paginación, botón de favoritos

services/ # Funciones de consumo de la API
hooks/ # Hook de favoritos (localStorage)
types/ # Tipos TypeScript
lib/ # Configuración base de fetch


## API utilizada

[Rick and Morty API](https://rickandmortyapi.com/) — API pública y gratuita con información del universo de la serie.

## Autor

Juan Lopez — Ucompensar
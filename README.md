# Tesselate app template

This is a starter template for projects with a Python-based backend and a [NextJS](https://nextjs.org)-based frontend. This makes some opinionated choices on tooling, but you are free to change them as you see fit. Specifically:

-   [NextJS](https://nextjs.org/) is set up to use TypeScript and [TailwindCSS](https://tailwindcss.com/).
-   [`pnpm`](https://pnpm.io/) is used to manage frontend dependencies. It's faster and storage-efficient than both `npm` and `yarn`.
-   [`poetry`](https://python-poetry.org/) is used to manage backend dependencies. It's a modern and fast dependency and environment manager for Python.

## Structure and setup

The project follows a typical `src` app-based NextJS setup, with an added Python API backend under `src/api`. Routing is managed by NextJS (see `next.config.js`), and the API is served under `/api` by default.

```
public/             # Static files (images, fonts, etc.)
src/                # Main source directory
 |.... api          # Python-based API code
 |.... app          # Frontend routes, page code, CSS
 |.... components   # Frontend components
```

## Installation and running

The first thing you should Clone the template using `degit`:

```bash
pnpx degit tesselate-ai/nextjs-starter <your-project-name>
```

Update the information in `package.json` and `pyproject.toml` to match your project name.

Install all dependencies:

```bash
# Install all the tooling (node+pnpm, python+poetry)
asdf install

# Install frontend dependencies
pnpm install

# Install backend dependencies
poetry install --sync
```

Run the project:

```bash
pnpm run dev
```

Make your own kind of magic. 🎩✨

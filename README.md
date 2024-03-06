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

## Setting up a new project

1. Clone the template using `degit`:

    ```bash
    pnpx degit tesselate-ai/nextjs-starter <project-name>
    ```

2. Update the information in `package.json` and `pyproject.toml` to match the new project's name.

## Tooling pre-requisites

- [asdf](https://asdf-vm.com) with plugins:
    - [nodejs](https://github.com/asdf-vm/asdf-nodejs)
    - [pnpm](https://github.com/jonathanmorley/asdf-pnpm)
    - [python](https://github.com/asdf-community/asdf-python)
    - [poetry](https://github.com/asdf-community/asdf-poetry)

```sh
# Install the runtimes and tooling
asdf install

# If there are any missing plugin errors, install with:
asdf plugin add <plugins>
```

## Installation and running

```bash
# Install dependencies
pnpm install
```

> **Note**: Backend dependencies are installed automatically when running `pnpm install`.
> To install backend dependencies manually, run `poetry install --sync`

Run the project:

```bash
pnpm run dev
```

Make your own kind of magic. 🎩✨

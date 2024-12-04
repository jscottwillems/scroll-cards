# scroll-cards

This template should help get you started developing with Vue 3 in Vite.

## Assessment Solutions

This repository has been extended to include solutions for the first three problems of the assessment. Solutions have been organized in the utils/ directory and include:

### 1. Object Watcher (utils/objectWatcher.ts)
Implementation of a function that watches an object for property access and modifications using JavaScript Proxy.

### 2. TypeScript Types (utils/types.ts)
Contains TypeScript type definitions for extending a Post interface with optional properties.

### 3. Product Analytics (utils/productAnalytics.ts)
Functions for analyzing product data, including inventory analysis and category statistics.

### 4. Card Visibility (App.vue)
Vue.js implementation for managing card focus states based on viewport visibility.

## Project Structure

```
├── src/
│   ├── utils/                  # Assessment solutions
│   │   ├── objectWatcher.ts    # Problem 1
│   │   ├── types.ts           # Problem 2
│   │   └── productAnalytics.ts # Problem 3
│   ├── App.vue                # Problem 4
│   └── Card.vue              # Card component
└── products.json             # Source data
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

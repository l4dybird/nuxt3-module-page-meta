# `@l4dybird/nuxt3-module-page-meta`

## Installation

```shell
npm i @l4dybird/nuxt3-module-page-meta
```

## Usage

Add to `modules` (Nuxt 3) in `nuxt.config.ts`:

```js
// Nuxt 3
export default defineNuxtConfig({
  modules: ['@l4dybird/nuxt3-module-page-meta'],
  pageMeta: {
    meta: {
      // page name
      index: {
        middleware: ['sample'],
      },
      404: {
        middleware: ['sample'],
      },
    },
  },
});
```

## License

[MIT](http://opensource.org/licenses/MIT)

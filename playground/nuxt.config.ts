import { meta } from './meta';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@l4dybird/nuxt3-module-page-meta'],
  pageMeta: {
    meta: {
      ...meta,
    },
  },
});

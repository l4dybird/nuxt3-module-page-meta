import { defineNuxtModule } from '@nuxt/kit';
import { PageMeta } from 'nuxt/dist/pages/runtime/composables';

export type Meta = Record<string, Partial<PageMeta>>;

export interface ModuleOptions {
  base: string;
  meta: Meta;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'pageMeta',
    configKey: 'pageMeta',
    compatibility: {
      nuxt: '^3.0.0-rc.13',
    },
  },
  defaults: {
    base: '_content',
    meta: {},
  },
  setup(options, nuxt) {
    nuxt.hook('pages:extend', (pages) => {
      pages.forEach((page) => {
        const name: string = page.name ?? 'index';
        const pageMeta: Meta = options.meta[name];

        page.meta = Object.assign({ ...pageMeta }, page.meta);
      });
    });
  },
});

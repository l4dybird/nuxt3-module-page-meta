import { setup, $fetch } from '@nuxt/test-utils';
import { fileURLToPath } from 'node:url';

describe('render page meta check', async () => {
  await setup({
    server: true,
    rootDir: fileURLToPath(new URL('../playground', import.meta.url)),
    nuxtConfig: {
      hooks: {
        'vite:extendConfig'(config, { isClient }) {
          config.define!.__BROWSER__ = isClient;
        },
      },
      vite: {
        define: {
          __DEV__: false,
          __TEST__: true,
          __FEATURE_PROD_DEVTOOLS__: false,
        },
      },
    },
  });

  it('render page index', async () => {
    const html = await $fetch('/');
    expect(html).toContain('sample');
  });

  it('render page 404', async () => {
    type Html = {
      data: string;
    };
    let html: Html = { data: '' };
    try {
      await $fetch('/404');
    } catch (e) {
      html = e as Html;
    }

    expect(html.data).toContain('sample');
  });

  it('render page unset', async () => {
    const html = await $fetch('/unset');
    expect(html).toContain('Unset');
  });
});

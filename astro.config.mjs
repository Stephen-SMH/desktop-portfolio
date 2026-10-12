import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stephen-smh.github.io',
  base: '/desktop-portfolio',
  output: 'static',
  // the dev toolbar sits on top of the dock
  devToolbar: { enabled: false },
});

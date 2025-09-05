import { defineAdditionalConfig } from 'vitepress';
import { sidebar } from './en/sidebar';

export default defineAdditionalConfig({
  lang: 'en-US',
  description: 'RustFS - MinIO alternative, high-performance distributed storage',

  themeConfig: {
    nav: [
      { text: 'Home', link: 'https://rustfs.com' },
      { text: 'Docs', link: '/' },
      { text: 'Installation', link: '/installation/linux' },
      { text: 'MCP', link: '/developer/mcp/' },
      { text: 'SDK', link: '/developer/sdk/' },
      { text: 'Demo', link: 'https://play.rustfs.com' },
      { text: 'Community', link: 'https://github.com/rustfs/rustfs/discussions' },
      { text: 'About', link: '/about' },
    ],

    sidebar: {
      '/': sidebar,
    },

    editLink: {
      pattern: 'https://github.com/rustfs/docs.rustfs.com/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the Apache License 2.0.',
      copyright: 'Copyright © 2025 RustFS',
    },
  },
});

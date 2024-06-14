import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
import {searchPlugin} from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: 'en-US',
  title: 'Laravel Purity',
  description: 'Filter and Sort Laravel Queries Elegantly',
  base: '/laravel-purity/',

  theme: defaultTheme({
    logo: '/images/purity-logo.png',
    navbar: [
      'introduction',
      {
        text: 'Guide',
        prefix: 'guide/',
        children: [
          'basic-usage.md',
          'installation.md',
          'tutorials.md'
        ],
      },
      {
        text: 'JS Examples',
        prefix: 'js-examples/',
        children: [
          'available-methods.md',
          'filter.md',
          'sort.md',
        ],
      },
      {
        text: 'Advanced',
        prefix: 'advanced/',
        children: [
          'rename.md',
          'param.md',
          'allowed.md',
          'livewire.md',
          'silent.md',
          {
            text: 'Filter',
            prefix: 'filter/',
            children: [
              'restrict.md',
              'custom.md',
            ],
          },
          {
            text: 'Sort',
            prefix: 'sort/',
            children: [
              'relation.md',
              'null-sort.md',
            ],
          },
          'upgrade.md',
        ],
      },
    ],
    repo: 'abbasudo/laravel-purity',
    docsRepo: 'abbasudo/laravel-purity',
    docsDir: 'docs',
  }),
  plugins: [searchPlugin({}),],
  head: [['link', { rel: 'icon', href: '/laravel-purity/images/favicon.ico' }]],
  bundler: viteBundler(),
})

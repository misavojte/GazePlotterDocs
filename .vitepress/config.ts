import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GazePlotter Docs",
  description: "GazePlotter user guide",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: '<a href="https://vojtechovska.com/">Michaela Vojtěchovská</a> and Stanislav Popelka, <a href="https://geoinformatics.upol.cz/">Department of Geoinformatics, Palacký University Olomouc</a> ©2023',
      copyright: 'Distributed under the GNU General Public License v2.0'
    },
    logo: '/logo.svg',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Uploading Data', link: '/upload-data/'},
      {text: 'Basic Usage', link: '/basic/'},
      {text: 'Advanced', link: '/advanced/'},
      {text: 'Go to App', link: 'https://gazeplotter.com'}
    ],
    sidebar: [
      {
        text: 'Uploading Data',
        items: [
          {text: 'Getting started', link: '/upload-data/'},
          {text: 'Tobii Pro Lab', link: '/upload-data/tobii-pro-lab'},
          {text: 'SMI BeGaze', link: '/upload-data/smi-begaze'},
          {text: 'OGAMA', link: '/upload-data/ogama'},
          {text: 'GazePoint', link: '/upload-data/gazepoint'},
        ]
      },
      {
        text: 'Basic Usage',
        items: [
          {text: 'GazePlotter overview', link: '/basic/'},
          {text: 'Timelines', link: '/basic/timelines'},
          {text: 'Customizing scarf plot', link: '/basic/customizing-scarf-plot'},
          {text: 'Adding AOI visibility', link: '/basic/aoi-visibility'},
          {text: 'ScanGraph integration', link: '/basic/scangraph-integration'},
        ]
      },
      {
        text: 'Advanced',
        items: [
          {text: 'Advanced features', link: '/advanced/'},
          {text: 'Download GazePlotter', link: '/advanced/download-gazeplotter'},
          {text: 'App dev & build', link: '/advanced/app-dev-build'},
          {text: 'Docs dev & build', link: '/advanced/docs-dev-build'},
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/misavojte/GazePlotter'}
    ]
  }
})

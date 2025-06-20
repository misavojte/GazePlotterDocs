import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GazePlotter Docs",
  description: "GazePlotter user guide",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: '<a href="https://vojtechovska.com/">Michaela Vojtěchovská</a> and Stanislav Popelka, <a href="https://geoinformatics.upol.cz/">Department of Geoinformatics, Palacký University Olomouc</a> ©2023',
      copyright: 'Distributed under the GNU General Public License v3.0'
    },
    logo: '/logo.svg',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Uploading Data', link: '/upload-data/'},
      {text: 'Basic Usage', link: '/basic/'},
      {text: 'Export', link: '/export/'},
      {text: 'Advanced', link: '/advanced/'},
      {text: 'Go to App', link: 'https://gazeplotter.com'}
    ],
    sidebar: [
      {
        text: 'Uploading Data',
        items: [
          {text: 'Getting started', link: '/upload-data/'},
          {text: 'Tobii Pro Lab upload', link: '/upload-data/tobii-pro-lab'},
          {text: 'SMI BeGaze upload', link: '/upload-data/smi-begaze'},
          {text: 'OGAMA upload', link: '/upload-data/ogama'},
          {text: 'GazePoint upload', link: '/upload-data/gazepoint'},
          {text: 'Varjo upload', link: '/upload-data/varjo'},
          {text: 'Custom CSV', link: '/upload-data/custom-csv'},
        ]
      },
      {
        text: 'Basic Usage',
        items: [
          {text: 'GazePlotter overview', link: '/basic/'},
          {text: 'Workspace', link: '/basic/workspace/'},
          {text: 'Scarf plot', link: '/basic/scarf-plot/'},
          {text: 'Transition Matrix', link: '/basic/transition-matrix/'},
          {text: 'Bar Plot', link: '/basic/bar-plot/'},
          {text: 'Participant grouping', link: '/basic/groups/'},
          {text: 'AOI customization', link: '/basic/aoi-customization/'},
          {text: 'Stimuli customization', link: '/basic/stimuli-customization/'},
          {text: 'Participants customization', link: '/basic/participants-customization/'},
        ]
      },
      {
        text: 'Export',
        items: [
          {text: 'Export overview', link: '/export/'},
          {text: 'Workspace export', link: '/export/workspace/'},
          {text: 'Segmented data export', link: '/export/segmented-data/'},
          {text: 'Aggregated data export', link: '/export/aggregated-data/'},
          {text: 'ScanGraph export', link: '/export/scangraph/'},
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
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/misavojte/gazeplotter'
      },
    ]
  }
})

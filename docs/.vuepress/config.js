module.exports = {
  title: 'Tooltip Vue',
  description: 'Vue.js tooltip',
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/Installation.html',
      },
      {
        text: 'GitHub',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Getting started',
          collapsable: false,
          children: [
            'Installation',
            'Usage'
          ]
        },
        {
          title: 'Api',
          collapsable: false,
          children: [
            'Props',
            'Slots'
          ]
        }
      ]
    }
  },
  base: '/tooltip-vue/'
}

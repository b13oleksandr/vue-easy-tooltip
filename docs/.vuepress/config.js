module.exports = {
  title: 'Vue easy tooltip',
  description: 'Vue.js tooltip component',
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/Installation.html',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/b13oleksandr/vue-easy-tooltip'
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

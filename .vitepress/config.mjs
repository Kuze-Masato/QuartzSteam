import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/QuartzSteam/', 
  title: "石英蒸汽 | QuartzSteam",
  description: "QuartzSteam 的官方文档站，提供游戏攻略和工具指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/markdown-examples' },
      { text: '社区', link: 'https://kuze-masato.top' }
    ],

    sidebar: [
      {
        text: '插件内容',
        items: [
          { text: '武器', link: 'docs/craft/weapons' },
          { text: '装备', link: 'docs/craft/equipment' },
          { text: '材料', link: 'docs/craft/materials' },
          { text: '工具', link: 'docs/craft/tools' },
          { text: '副本', link: 'docs/craft/copy' },
          { text: 'boss', link: 'docs/craft/boss' },
        ]
      },
      {
        text: '规则',
        items: [
          { text: '更新日志', link: 'docs/other/changelog' },
        ]
      },
      {
        text: '社区文档',
        items: [
          { text: '编写规范', link: 'docs/community/standard' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Kuze-Masato/QuartzSteam' },
      { icon: 'qq', link: 'https://qm.qq.com/q/5NEbNimddm'}
    ]
  }
})

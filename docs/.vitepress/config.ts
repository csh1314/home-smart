import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: '全屋轻智能',
  description: '三室一厅全屋轻智能落地教程 — 米家生态 · 蓝牙 Mesh 2.0 · 低预算方案',
  lang: 'zh-CN',
  base: '/home-smart/',

  head: [
    ['link', { rel: 'icon', href: '/home-smart/favicon.ico' }],
  ],

  themeConfig: {
    siteTitle: '🏠 全屋轻智能',

    nav: [
      { text: '教程', link: '/01-architecture' },
      { text: '设备选型', link: '/02-devices' },
      { text: '采购清单', link: '/03-shopping-list' },
      { text: 'FAQ', link: '/06-faq' },
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: '系统架构', link: '/01-architecture' },
          { text: '设备选型', link: '/02-devices' },
          { text: '采购清单', link: '/03-shopping-list' },
          { text: '安装教程', link: '/04-installation' },
          { text: '场景配置', link: '/05-scenes' },
        ],
      },
      {
        text: '参考',
        items: [
          { text: '常见问题', link: '/06-faq' },
          { text: '开关类型详解', link: '/07-switch-types' },
          { text: '调试验收', link: '/08-debugging' },
        ],
      },
    ],

    outline: {
      label: '目录',
      level: [2, 3],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/csh1314/home-smart' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除',
            footer: { selectText: '选择', navigateText: '导航', closeText: '关闭' },
          },
        },
      },
    },

    footer: {
      message: '米家生态 · 蓝牙 Mesh 2.0 · 低预算全屋智能方案',
      copyright: 'MIT License',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    darkModeSwitchLabel: '主题',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
  },

  mermaid: {
    theme: 'dark',
  },
}))

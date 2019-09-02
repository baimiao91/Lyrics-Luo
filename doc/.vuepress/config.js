module.exports = {
  dest: 'redbud',
  base: '/',
  markdown: {
    toc: {
      includeLevel: [2, 3]
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '人小鬼大的小屋',
      description: '任何不能够给你快乐的编程都是耍流氓'
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/pre.jpg`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: `/icons/apple-touch-icon-152x152.png`
    }],
    ['link', {
      rel: 'mask-icon',
      href: '/icons/safari-pinned-tab.svg',
      color: '#3eaf7c'
    }],
    ['meta', {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon-144x144.png'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'baimiao91',
    editLinks: true,
    docsDir: 'doc',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [{
            text: '快速搭建开发环境',
            link: '/zh/standard/Start.md'
          }, {
            text: '项目相关',
            items: [{
              text: '前端规范',
              link: '/zh/standard/Standard.md'
            }, {
              text: '项目流程',
              link: '/zh/standard/Project.md'
            }, {
              text: '移动端兼容问题',
              link: '/zh/standard/Compatibility.md'
            }],
          }, {
						text: '诗萝k',
						link: '/zh/Apoem/Index.md'
					}, {
						text: 'charles简单配置',
						link: '/zh/charles/Index.md'
					}
        ]
      }
    },
  }
}

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'getting-started',
      'basic-config',
      'assets',
      'markdown',
      'using-vue',
      'custom-themes',
      'i18n',
      'deploy'
    ]
  }]
}
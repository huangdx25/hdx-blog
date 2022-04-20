module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'hunagdx的博客',
    description: "这里将记录我找工作的所有面试题以及感想",
    head: [['link', { rel: 'icon', href: 'http://docs.huangdx.cn/imgs/favicon.ico' }]],

    // 配置主体
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'http://docs.huangdx.cn/imgs/touxiang.jpg',
        lastUpdated: true,
        navbar: [
            {
                text: '主页',
                link: '/',
            },
            {
                text: '面试题',
                link: '/questions/',
            },

            {
                text: '面经',
                link: '/interview/',
            },
        ],
        // 侧边栏对象
        sidebar: {
            '/interview/': [
                '/interview/README.md',
                {
                    text: '线下面试',
                    collapsible: true,
                    children: ['/interview/offline/zlgs.md', '/interview/offline/README.md'],

                },
                {
                    text: '线上面试',
                    collapsible: true,
                    children: ['/interview/online/nihao.md'],
                },
            ],

            '/questions/': [
                {
                    text: 'js系列',
                    collapsible: true,
                    children: ['/questions/js/README.md'],
                },
                {
                    text: 'vue系列',
                    collapsible: true,
                    children: ['/questions/vue/README.md'],
                },
            ],

        }
    }
}
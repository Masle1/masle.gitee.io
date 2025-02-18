import { defineValaxyConfig } from 'valaxy';
import type { UserThemeConfig } from 'valaxy-theme-yun';
import { addonWaline } from "valaxy-addon-waline";
import { addonComponents } from "valaxy-addon-components";

// import { addonLightGallery } from 'valaxy-addon-lightgallery';

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]


/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',
  

  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },
  // 设置 valaxy-addon-waline 配置项
    addons: [
     addonWaline({
       // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
       serverURL: 'https://waline.masle.top/',
     }),
  ],

  themeConfig: {
    banner: {
      enable: true,
      title: ['Masle','的','小','客','栈'],
      cloud: {
        enable: true,
      },
    },

    // notice: {
    //   enable: true,
    //   content: '开启新征程',
    // },

    menu: {
      custom: {
        title: '',
        url: '/sub/',
        icon: 'i-ri-notification-3-line'
      }
    },
    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-open-arm-line',
        color: 'dodgerblue',
      },
      {
        name: '博客订阅及留言板',
        url: '/sub/',
        icon: 'i-ri-notification-2-line',
        color: 'dodgerblue',
      },
    ],
    bg_image: {
      enable: true,
      url: "https://testingcf.jsdelivr.net/gh/masle1/masle.github.io@main/pages/background.jpg",	// 白日模式背景
      dark: "",	// 夜间模式背景
    },
    footer: {
      since: 2021,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },
  unocss: { safelist },
})




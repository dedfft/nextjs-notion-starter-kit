import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c151bcefacf84601ad37378ff5d71854',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Bogdan Mihailov',
  domain: 'bogdanmind.vercel.app',
  author: 'Bogdan Mihailov',

  // open graph metadata (optional)
  description: 'Personal site of Bogdan Mihailov',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: 'bogdanmind',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: "https://thumb.tildacdn.com/tild6566-6131-4635-b237-313839633662/-/resize/520x/-/format/webp/IMG_0848.jpeg",
  defaultPageCover: "https://thumb.tildacdn.com/tild6566-6131-4635-b237-313839633662/-/resize/520x/-/format/webp/IMG_0848.jpeg",
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Главная',
      pageId: 'c151bcefacf84601ad37378ff5d71854'
    },
    {
      title: 'Обо мне',
      pageId: '74b0cbd8d4ec47f39bb0c4ac171fd500'
    }
  ]
})

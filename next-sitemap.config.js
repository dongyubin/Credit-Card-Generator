/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://creditcardgenerator.wangdu.site',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    '/server-sitemap.xml',
    '/404',
    '/admin',
    '/admin/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://creditcardgenerator.wangdu.site'}/sitemap.xml`,
    ],
  },
  // 移除 additionalPaths 函数
};
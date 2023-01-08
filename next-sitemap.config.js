/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.WEBSITE_URL || 'https://nith-result.vercel.app',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 7000,
}
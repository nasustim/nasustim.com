module.exports = {
  siteUrl: 'https://nasustim.com',
  changefreq: 'daily', // 'weekly',
  autoLastmod: true, //false,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './out',
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: path == '/' ? 1 : 0.7,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    alternateRefs: config.alternateRefs ?? [],
  }),
}

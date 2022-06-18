/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://next-lotus-starter.vercel.app/",
  generateRobotsTxt: true,
};

export default config;

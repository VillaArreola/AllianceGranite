import { stones } from '../data/catalog';
import { projects } from '../data/portfolio';

const defaultSite = 'https://www.alliancegranitequartz.com';

export const siteOrigin = (import.meta.env.SITE ?? defaultSite).replace(/\/$/, '');

const staticPaths = [
  '/',
  '/about/',
  '/collections/',
  '/contact/',
  '/policies/',
  '/portfolio/',
  '/services/',
  '/stones/',
  '/terms/'
];

const projectPaths = projects.map((project) => `/portfolio/${project.slug}/`);
const stonePaths = stones.map((stone) => `/stones/${stone.slug}/`);

export const sitemapPaths = [...staticPaths, ...projectPaths, ...stonePaths];

export const sitemapUrl = (path: string) => `${siteOrigin}${path.startsWith('/') ? path : `/${path}`}`;

const xmlEscape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const buildSitemapIndexXml = (paths: string[]) => {
  const entries = paths.map((path) => `<sitemap><loc>${xmlEscape(sitemapUrl(path))}</loc></sitemap>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</sitemapindex>`;
};

export const buildUrlsetXml = (paths: string[]) => {
  const entries = paths.map((path) => `<url><loc>${xmlEscape(sitemapUrl(path))}</loc></url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
};
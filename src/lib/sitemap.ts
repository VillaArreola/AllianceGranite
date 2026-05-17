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

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

interface UrlMeta {
  changefreq: ChangeFreq;
  priority: string;
}

const urlMeta: Record<string, UrlMeta> = {
  '/': { changefreq: 'daily', priority: '1.0' },
  '/collections/': { changefreq: 'weekly', priority: '0.8' },
  '/services/': { changefreq: 'weekly', priority: '0.8' },
  '/portfolio/': { changefreq: 'weekly', priority: '0.8' },
  '/stones/': { changefreq: 'weekly', priority: '0.8' },
  '/about/': { changefreq: 'monthly', priority: '0.7' },
  '/contact/': { changefreq: 'monthly', priority: '0.7' },
  '/policies/': { changefreq: 'yearly', priority: '0.3' },
  '/terms/': { changefreq: 'yearly', priority: '0.3' },
};

const buildUrlEntry = (path: string, lastmod: string): string => {
  const meta = urlMeta[path] ?? { changefreq: 'weekly' as ChangeFreq, priority: '0.6' };
  const loc = xmlEscape(sitemapUrl(path));
  return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${meta.changefreq}</changefreq><priority>${meta.priority}</priority></url>`;
};

export const buildUrlsetXml = (paths: string[]) => {
  const lastmod = new Date().toISOString().split('T')[0];
  const entries = paths.map((path) => buildUrlEntry(path, lastmod)).join('');

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
};
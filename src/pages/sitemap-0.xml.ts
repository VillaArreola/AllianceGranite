import { buildUrlsetXml, sitemapPaths } from '../lib/sitemap';

export const GET = () => {
  return new Response(buildUrlsetXml(sitemapPaths), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
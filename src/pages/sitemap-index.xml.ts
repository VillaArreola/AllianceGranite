import { buildSitemapIndexXml } from '../lib/sitemap';

export const GET = () => {
  return new Response(buildSitemapIndexXml(['/sitemap-0.xml']), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
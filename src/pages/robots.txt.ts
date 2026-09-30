import site from '@/data/site.json';

export function GET() {
  const basePath = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const base = new URL(basePath, import.meta.env.SITE || site.url);
  const body = `User-agent: *\nAllow: /\nDisallow: ${basePath}admin/\n\nSitemap: ${new URL('sitemap-index.xml', base).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

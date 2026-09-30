import { getCollection } from 'astro:content';
import site from '@/data/site.json';
import { byDateDesc, filterPublished } from '@/utils/content';

const escape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

export async function GET() {
  const posts = filterPublished(await getCollection('writing')).sort(byDateDesc);
  const basePath = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const base = new URL(basePath, import.meta.env.SITE || site.url);
  const items = posts
    .map((post) => {
      const link = new URL(`writing/${post.data.slug}/`, base).href;
      return `<item><title>${escape(post.data.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${post.data.date.toUTCString()}</pubDate><description>${escape(post.data.description)}</description></item>`;
    })
    .join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escape(site.name)}</title><link>${base.href}</link><description>${escape(site.description)}</description><language>en</language>${items}</channel></rss>`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

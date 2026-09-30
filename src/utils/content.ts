export interface Publishable {
  data: { draft?: boolean; date?: Date | string };
}

export function isPublished(
  entry: Publishable,
  now = new Date(),
  production = import.meta.env.PROD,
) {
  if (!production) return true;
  const date = entry.data.date ? new Date(entry.data.date) : null;
  return !entry.data.draft && (!date || date.getTime() <= now.getTime());
}

export function filterPublished<T extends Publishable>(
  entries: T[],
  now = new Date(),
  production = import.meta.env.PROD,
) {
  return entries.filter((entry) => isPublished(entry, now, production));
}

export function byDateDesc<T extends Publishable>(a: T, b: T) {
  return new Date(b.data.date ?? 0).getTime() - new Date(a.data.date ?? 0).getTime();
}

export function readingTime(source: string) {
  const plain = source
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[^\p{L}\p{N}\u3400-\u9fff]+/gu, ' ');
  const cjk = plain.match(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g)?.length ?? 0;
  const latin =
    plain.replace(/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g, ' ').match(/[\p{L}\p{N}]+/gu)
      ?.length ?? 0;
  const minutes = Math.max(1, Math.ceil(cjk / 450 + latin / 220));
  return { minutes, text: `${minutes} min read`, words: latin, characters: cjk };
}

export function tagSlug(tag: string) {
  return tag.trim().toLocaleLowerCase().replace(/\s+/g, '-');
}

export function relatedByTags<T extends { data: { tags: string[] }; id: string }>(
  current: T,
  entries: T[],
  limit = 3,
) {
  const tags = new Set(current.data.tags.map((tag) => tag.toLocaleLowerCase()));
  return entries
    .filter((entry) => entry.id !== current.id)
    .map((entry) => ({
      entry,
      score: entry.data.tags.filter((tag) => tags.has(tag.toLocaleLowerCase())).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => entry);
}

export function formatDate(value: Date | string, options: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat('en', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    ...options,
  }).format(new Date(value));
}

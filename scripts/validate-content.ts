import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';
import matter from 'gray-matter';

const root = resolve(import.meta.dirname, '..');
const collections = ['writing', 'notes', 'projects'];
const errors: string[] = [];
const slugs = new Map<string, string>();
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

for (const collection of collections) {
  const directory = join(root, 'src/content', collection);
  for (const filename of readdirSync(directory).filter((name) => /\.mdx?$/.test(name))) {
    const path = join(directory, filename);
    const source = readFileSync(path, 'utf8');
    const { data, content } = matter(source);
    const label = relative(root, path);
    const required =
      collection === 'projects'
        ? ['name', 'slug', 'description', 'year', 'cover', 'coverAlt', 'tech', 'featured', 'draft']
        : collection === 'writing'
          ? ['title', 'slug', 'description', 'date', 'tags', 'draft']
          : ['title', 'slug', 'date', 'tags', 'draft'];
    for (const field of required)
      if (data[field] === undefined || data[field] === '')
        errors.push(`${label}: missing ${field}`);
    if (!slugPattern.test(String(data.slug ?? '')))
      errors.push(`${label}: slug must be lowercase kebab-case`);
    const slugKey = `${collection}/${data.slug}`;
    if (slugs.has(slugKey))
      errors.push(`${label}: duplicate slug also used by ${slugs.get(slugKey)}`);
    slugs.set(slugKey, label);
    if ('date' in data && Number.isNaN(new Date(data.date).getTime()))
      errors.push(`${label}: invalid date`);
    if (
      'description' in data &&
      (String(data.description).length < 20 || String(data.description).length > 220)
    )
      errors.push(`${label}: description must be 20–220 characters`);
    if (
      'tags' in data &&
      (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== 'string'))
    )
      errors.push(`${label}: tags must be a list of strings`);
    if ('cover' in data) {
      const cover = join(root, 'public', String(data.cover).replace(/^\//, ''));
      if (!existsSync(cover)) errors.push(`${label}: cover does not exist at ${data.cover}`);
    }
    for (const match of content.matchAll(/\]\((\/[a-zA-Z0-9_./-]+)\)/g)) {
      const target = match[1];
      if (target.startsWith('/images/') && !existsSync(join(root, 'public', target)))
        errors.push(`${label}: broken image reference ${target}`);
    }
    if (!content.trim()) errors.push(`${label}: content body is empty`);
    if (basename(filename, filename.endsWith('.mdx') ? '.mdx' : '.md').includes(' '))
      errors.push(`${label}: filename contains spaces`);
    if (dirname(path) !== directory) errors.push(`${label}: unexpected nested content path`);
  }
}

if (errors.length) {
  console.error(
    `Content validation failed (${errors.length}):\n${errors.map((error) => `- ${error}`).join('\n')}`,
  );
  process.exit(1);
}

console.log(`Content validation passed for ${slugs.size} entries.`);

import { describe, expect, it } from 'vitest';
import { byDateDesc, filterPublished, readingTime, relatedByTags, tagSlug } from './content';

const entry = (id: string, date: string, draft = false, tags: string[] = []) => ({
  id,
  data: { date: new Date(date), draft, tags },
});

describe('publishing rules', () => {
  const now = new Date('2026-09-30T00:00:00Z');
  const entries = [
    entry('public', '2026-09-01'),
    entry('draft', '2026-08-01', true),
    entry('future', '2099-01-01'),
  ];

  it('excludes drafts and future posts in production', () => {
    expect(filterPublished(entries, now, true).map(({ id }) => id)).toEqual(['public']);
  });

  it('retains preview content outside production', () => {
    expect(filterPublished(entries, now, false)).toHaveLength(3);
  });

  it('sorts newest first', () => {
    expect([...entries].sort(byDateDesc).map(({ id }) => id)).toEqual([
      'future',
      'public',
      'draft',
    ]);
  });
});

describe('content helpers', () => {
  it('handles English and Chinese reading time', () => {
    expect(readingTime('word '.repeat(440)).minutes).toBe(2);
    expect(readingTime('字'.repeat(900)).minutes).toBe(2);
    expect(readingTime('short').minutes).toBe(1);
  });

  it('normalizes tag slugs', () => {
    expect(tagSlug('Design Systems')).toBe('design-systems');
    expect(tagSlug(' 中文 ')).toBe('中文');
  });

  it('ranks related entries by shared tags and excludes itself', () => {
    const current = entry('current', '2026-09-01', false, ['Design', 'Code']);
    const strong = entry('strong', '2026-08-01', false, ['Design', 'Code']);
    const weak = entry('weak', '2026-07-01', false, ['Code']);
    const none = entry('none', '2026-06-01', false, ['Life']);
    expect(relatedByTags(current, [weak, current, none, strong]).map(({ id }) => id)).toEqual([
      'strong',
      'weak',
    ]);
  });
});

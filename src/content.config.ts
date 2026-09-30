import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    description: z.string().min(20).max(220),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).min(1),
    cover: z.string().startsWith('/'),
    coverAlt: z.string().min(1),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    name: z.string().min(1),
    slug: z.string().min(1),
    description: z.string().min(20).max(220),
    year: z.number().int(),
    cover: z.string().startsWith('/'),
    coverAlt: z.string().min(1),
    tech: z.array(z.string()).min(1),
    github: z.url().optional(),
    demo: z.url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, notes, projects };

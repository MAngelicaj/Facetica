import { defineCollection, z } from 'astro:content';

const ideas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string(),
    featured: z.boolean().optional().default(false),
  }),
});

const casos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sector: z.string(),
    challenge: z.string(),
    featured: z.boolean().optional().default(false),
    date: z.string(),
  }),
});

export const collections = { ideas, casos };

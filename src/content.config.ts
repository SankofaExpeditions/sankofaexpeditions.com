import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Sankofa Expeditions'),
    category: z.enum([
      'Country Intelligence',
      'Travel Intelligence', 
      'Diaspora Pathways',
      'Heritage & Culture',
      'Investment Intelligence',
      'The Sankofa Return Blueprint',
    ]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    readTime: z.string().optional(),
    featured: z.boolean().default(false),
    // SEO
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
    // FAQ for structured data
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every collection here is edited through /admin (Sveltia CMS).
// Field names must match public/admin/config.yml.

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    author: z.string(),
    date: z.coerce.date(),
    // Pieces published elsewhere (e.g. the illustrated article site) link out instead.
    externalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Panel', 'Workshop', 'Talk', 'Social']).default('Workshop'),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    place: z.string(),
    city: z.string(),
    language: z.string().default('English'),
    signupUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    location: z.string().optional(),
    photo: z.string().optional(),
    photoAlt: z.string().optional(),
    link: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/pages' }),
  schema: z.object({
    headline: z.string(),
    headlineAccent: z.string().optional(),
    standfirst: z.string(),
    newsletterLabel: z.string(),
    newsletterButton: z.string(),
    doorwaysTitle: z.string(),
    doorways: z.array(
      z.object({ word: z.string(), title: z.string(), body: z.string(), linkLabel: z.string(), linkHref: z.string() }),
    ),
    promisesTitle: z.string(),
    promises: z.array(z.object({ title: z.string(), body: z.string() })),
    whyQuote: z.string(),
    whyBody: z.string(),
    closing: z.string(),
    closingLabel: z.string(),
  }),
});

const prose = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/prose' }),
  schema: z.object({ title: z.string(), intro: z.string() }),
});

// Site-wide settings. newsletterUrl is the Substack address (https://name.substack.com).
// Left empty, sign-ups are collected by Netlify Forms instead and can be imported later.
const settings = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/settings' }),
  schema: z.object({
    newsletterUrl: z.union([z.string().url(), z.literal('')]).default(''),
    newsletterName: z.string().default('Human First AI'),
  }),
});

export const collections = { posts, events, team, pages, prose, settings };

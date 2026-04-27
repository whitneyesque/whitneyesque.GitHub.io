import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    /** Display title of the case study */
    title: z.string(),
    /** Client name or industry descriptor (can be anonymized) */
    client: z.string(),
    /** Year the project was completed */
    year: z.number(),
    /** Whitney's role on the project */
    role: z.string(),
    /** Team composition, optional */
    team: z.string().optional(),
    /** Duration e.g. "3 months" or "Jan–Apr 2026" */
    timeline: z.string(),
    /** Tags shown on work grid and case page e.g. ["Service Design", "AI Prototyping"] */
    tags: z.array(z.string()),
    /** Cover specimen image path for V3 design system, e.g. "/images/specimen-protea.jpg" */
    specimen: z.string().optional(),
    /** Small specimen detail crop for end-of-case signoff (V3 Exception 3). Optional PNG. */
    specimenSignoff: z.string().optional(),
    /** One sentence used on the work grid card */
    summary: z.string(),
    /** Optional hero image path e.g. "/images/cases/agetech/hero.jpg" */
    hero_image: z.string().optional(),
    /** Draft cases are built but not linked from work page */
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

export const collections = { cases };

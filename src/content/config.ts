import { z, defineCollection } from "astro:content";

export const collections = {
  workExperience: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      role: z.string(),
      location: z.string(),
      locationType: z.string(),
      startingDate: z.date(),
      endingDate: z.date().nullable(),
    }),
  }),
  education: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      location: z.string(),
      startingDate: z.date(),
      endingDate: z.date().nullable(),
    }),
  }),
};

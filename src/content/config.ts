import { z, defineCollection } from "astro:content";

export const collections = {
  workExperience: defineCollection({
    type: "content",
    schema: z.object({
      id: z.string(),
      title: z.string(),
      role: z.string(),
      location: z.string(),
      locationType: z.string(),
      startingDate: z.date(),
      endingDate: z.date().nullable(),
    }),
  }),
};

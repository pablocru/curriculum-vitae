import { z, defineCollection } from "astro:content";

const baseSchema = z.object({
  title: z.string(),
  location: z.string(),
  startingDate: z.date(),
  endingDate: z.date().nullable(),
});

export const collections = {
  workExperience: defineCollection({
    type: "content",
    schema: z
      .object({
        role: z.string(),
        locationType: z.string(),
      })
      .and(baseSchema),
  }),
  education: defineCollection({
    type: "data",
    schema: baseSchema,
  }),
};

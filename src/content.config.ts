import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export enum TimelineCollectionKey {
  WorkExperience = "work-experience",
  AcademicBackground = "academic-background",
}

export enum UnclassifiedCollectionKey {
  ProfessionalProfile = "professional-profile",
}

const baseSchema = z.object({
  title: z.string(),
  location: z.string(),
  startingDate: z.date(),
  endingDate: z.date().nullable(),
});

export const collections = {
  [TimelineCollectionKey.WorkExperience]: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/work-experience" }),
    schema: z
      .object({
        role: z.string(),
        locationType: z.string(),
      })
      .and(baseSchema),
  }),
  [TimelineCollectionKey.AcademicBackground]: defineCollection({
    loader: glob({
      pattern: "**/*.yml",
      base: "./src/content/academic-background",
    }),
    schema: baseSchema,
  }),
  [UnclassifiedCollectionKey.ProfessionalProfile]: defineCollection({
    loader: glob({
      pattern: "**/*.yml",
      base: "./src/content/professional-profile",
    }),
    schema: z.object({
      order: z.number(),
      title: z.string(),
      entries: z.array(z.string()),
    }),
  }),
};

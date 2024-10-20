import { z, defineCollection } from "astro:content";

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
    type: "content",
    schema: z
      .object({
        role: z.string(),
        locationType: z.string(),
      })
      .and(baseSchema),
  }),
  [TimelineCollectionKey.AcademicBackground]: defineCollection({
    type: "data",
    schema: baseSchema,
  }),
  [UnclassifiedCollectionKey.ProfessionalProfile]: defineCollection({
    type: "data",
    schema: z.object({
      order: z.number(),
      title: z.string(),
      entries: z.array(z.string()),
    }),
  }),
};

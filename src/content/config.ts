import { z, defineCollection } from "astro:content";

export enum TimelineCollectionKey {
  WorkExperience = "workExperience",
  AcademicBackground = "academicBackground",
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
};

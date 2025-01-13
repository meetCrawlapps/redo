import { z } from "zod";

export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
});

export const AddWorkFlows = z.object({
  name: z.string().min(1, "Required"),
  discription: z.string().min(1, "Required"),
});

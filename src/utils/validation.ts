import { z } from "zod";

/** Shared Zod building blocks so every form validates the same way. */

export const requiredText = (message: string, max = 100) =>
  z.string().trim().min(1, message).max(max, `Please keep this under ${max} characters`);

export const optionalText = (max = 100) =>
  z.string().trim().max(max, `Please keep this under ${max} characters`);

export const phone = z
  .string()
  .trim()
  .min(1, "Enter your phone number")
  .regex(/^\+?[\d\s().-]{7,20}$/, "Enter a valid phone number, with country code if outside India")
  .refine((v) => v.replace(/\D/g, "").length >= 7, "Enter a valid phone number");

export const requiredEmail = (message = "Enter your email address") =>
  z.string().trim().min(1, message).pipe(z.email("Enter a valid email address"));

export const optionalEmail = z
  .string()
  .trim()
  .refine((v) => v === "" || z.email().safeParse(v).success, "Enter a valid email address");

/** Select with a blank placeholder option; value must be one of the listed options. */
export const requiredChoice = (options: readonly string[], message: string) =>
  z
    .string()
    .min(1, message)
    .refine((v) => options.includes(v), message);

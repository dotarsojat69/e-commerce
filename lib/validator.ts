import * as z from "zod";
import { formatNumberWithDecimal } from "./utils";

export const signInFormSchema = z.object({
  email: z.string().min(6, "Email must be at least 6 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(6, "Name must be at least 6 characters"),
    email: z.string().min(6, "Email must be at least 6 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const cartItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  qty: z.number().int().nonnegative("Quantity must be a non-negative number"),
  image: z.string().min(1, "Image is required"),
  price: z
    .number()
    .refine(
      (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
      "Price must have exactly two decimal places (e.g., 49.99)"
    ),
});

export const shippingAddressSchema = z.object({
  fullName: z.string().min(8, "Name must be at least 8 characters"),
  streetAddress: z.string().min(8, "Address must be at least 8 characters"),
  city: z.string().min(6, "city must be at least 6 characters"),
  postalCode: z.string().min(5, "Postal code must be at least 5 characters"),
  country: z.string().min(6, "Country must be at least 6 characters"),
  lat: z.number().optional(),
  lng: z.number().optional(),
});

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Test-Ecommerce";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Test E-commerce build with Next.js, Postgres, Shadcn & should be Nest.js";

export const signInDefaultValues = {
  email: "",
  password: "",
};

export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

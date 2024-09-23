import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here.
   * This ensures the app isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    QUIZ_DATA_URL: z.string().url(),
    CLERK_SECRET_KEY: z.string(), // Added CLERK_SECRET_KEY for server-side
  },

  /**
   * Specify your client-side environment variables schema here.
   * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(), // Added NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY for client-side
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * Destructure `process.env` manually to ensure compatibility with
   * Next.js edge runtimes and client-side code.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    QUIZ_DATA_URL: process.env.QUIZ_DATA_URL,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY, // Added server-side variable
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, // Added client-side variable
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Treat empty strings as undefined. For example, `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});

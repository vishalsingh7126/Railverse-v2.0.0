import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  NEXT_PUBLIC_APP_ENV: z.enum(["development", "staging", "production"]).default("development"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  TRAVELCORE_API_URL: z.string().url().default("https://api.travelcore.in/v2"),
  TRAVELCORE_API_KEY: z.string().min(1, "TravelCore API Key is required"),
  TRAVELCORE_API_TIMEOUT: z.coerce.number().default(10000),
  REDIS_URL: z.string().optional(),
});

// Helper to determine if we are in Next.js build phase
const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build";

const rawEnv = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  TRAVELCORE_API_URL: process.env.TRAVELCORE_API_URL,
  TRAVELCORE_API_KEY: process.env.TRAVELCORE_API_KEY || (isBuildPhase ? "tc_mock_key_for_build" : undefined),
  TRAVELCORE_API_TIMEOUT: process.env.TRAVELCORE_API_TIMEOUT,
  REDIS_URL: process.env.REDIS_URL,
};

const result = envSchema.safeParse(rawEnv);

if (!result.success) {
  // Print errors clearly, but do not exit process during build to avoid breaking CI pipelines
  console.error("❌ Invalid environment variables configuration:");
  console.error(JSON.stringify(result.error.flatten().fieldErrors, null, 2));
  
  if (!isBuildPhase && process.env.NODE_ENV === "production") {
    throw new Error("Invalid environment configuration. Fix the variables listed above.");
  }
}

export const env = result.success 
  ? result.data 
  : envSchema.parse({
      ...rawEnv,
      TRAVELCORE_API_KEY: "tc_mock_key_for_build",
    });

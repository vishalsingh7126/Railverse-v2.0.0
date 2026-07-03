import { Metadata } from "next";
import { defaultMetadata } from "./metadata";

export function buildPageMetadata(overrides: Partial<Metadata>): Metadata {
  const title = overrides.title ? `${overrides.title} | Railverse` : defaultMetadata.title;

  return {
    ...defaultMetadata,
    ...overrides,
    title,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
      title: title as string,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
      title: title as string,
    },
  };
}

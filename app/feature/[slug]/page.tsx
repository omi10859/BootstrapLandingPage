import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeatureBySlug, FEATURES_DATA } from "../features-data";
import { FeaturePageClient } from "./FeaturePageClient";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugsSet = new Set<string>();

  for (const item of Object.values(FEATURES_DATA)) {
    if (item.slug) slugsSet.add(item.slug);
    if (Array.isArray(item.aliases)) {
      for (const alias of item.aliases) {
        if (alias) slugsSet.add(alias);
      }
    }
  }

  // Include legacy alias routes so static export doesn't fail on stale links or cached routes
  slugsSet.add("contractors");
  slugsSet.add("contractor");
  slugsSet.add("find-contractors");

  return Array.from(slugsSet).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug) {
    return {
      title: "Feature - Shram Mitra",
    };
  }

  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return {
      title: "Feature - Shram Mitra",
    };
  }

  return {
    title: `${feature.title} - Shram Mitra`,
    description: feature.description,
    keywords: [
      feature.title,
      "Shram Mitra",
      "construction workforce",
      "labor platform India",
      "site management",
    ],
  };
}

export default async function FeaturePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug) {
    notFound();
  }

  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  // Get other features for recommendation
  const otherFeatures = Object.values(FEATURES_DATA).filter(
    (item) => item.slug !== feature.slug
  );

  return <FeaturePageClient feature={feature} otherFeatures={otherFeatures} />;
}

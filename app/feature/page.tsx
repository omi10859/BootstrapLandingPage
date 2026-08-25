import { Metadata } from "next";
import { AllFeaturesClient } from "./AllFeaturesClient";

export const metadata: Metadata = {
  title: "All Features & Modules - Shram Mitra",
  description:
    "Explore all modules of Shram Mitra: Find Jobs, Find Contractors, Biometric Attendance, Automated Payroll, Find Tenders, Find Workers, Find Machinery, and Project Management.",
  keywords: [
    "Shram Mitra features",
    "construction workforce platform",
    "labor attendance",
    "contractor hiring",
    "tender bidding India",
    "machinery rental",
    "site project management",
  ],
};

export default function FeaturesIndexPage() {
  return <AllFeaturesClient />;
}

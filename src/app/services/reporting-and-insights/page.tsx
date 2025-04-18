import { Metadata } from "next";
import ReportingAndInsightsContent from "./ReportingAndInsightsContent";

export const metadata: Metadata = {
  title: "Biz Glow AI - Reporting and Insights",
  description: "Gain powerful insights with AI-driven analytics, predictive reporting, and real-time business intelligence tools.",
};

export default function ReportingAndInsights() {
  return <ReportingAndInsightsContent />;
}
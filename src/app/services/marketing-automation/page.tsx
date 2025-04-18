import { Metadata } from "next";
import MarketingAutomationContent from "./MarketingAutomationContent";

export const metadata: Metadata = {
  title: "Biz Glow AI - Marketing Automation",
  description: "Transform your marketing efforts with AI-driven automation tools for personalized campaigns, social media management, and content creation.",
};

export default function MarketingAutomation() {
  return <MarketingAutomationContent />;
}
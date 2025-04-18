import { Metadata } from "next";
import SalesAutomationContent from "./SalesAutomationContent";

export const metadata: Metadata = {
  title: "Biz Glow AI - Sales Automation",
  description: "Streamline your sales process with intelligent automation tools for lead scoring, personalized outreach, and sales forecasting.",
};

export default function SalesAutomation() {
  return <SalesAutomationContent />;
}
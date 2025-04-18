import { Metadata } from "next";
import CustomerServiceAutomationContent from "./CustomerServiceAutomationContent";

export const metadata: Metadata = {
  title: "Biz Glow AI - Customer Service Automation",
  description: "Transform your customer support with AI-powered chatbots and virtual assistants that provide 24/7 automated assistance and personalized responses.",
};

export default function CustomerServiceAutomation() {
  return <CustomerServiceAutomationContent />;
}
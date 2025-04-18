import { Metadata } from "next";
import OperationalAutomationContent from "./OperationalAutomationContent";

export const metadata: Metadata = {
  title: "Biz Glow AI - Operational Automation",
  description: "Transform your business efficiency with intelligent workflow automation for inventory management, supply chain optimization, and HR automation.",
};

export default function OperationalAutomation() {
  return <OperationalAutomationContent />;
}
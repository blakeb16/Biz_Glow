import { Metadata } from "next";
import WebsiteDevelopmentContent from "./WebsiteDevelopmentContent";

export const metadata: Metadata = {
  title: "Biz Glow AI - Website Development",
  description: "Get a professional, modern website up and running in days, not months. Our AI-powered website development service combines cutting-edge design with powerful functionality at a fraction of traditional costs.",
};

export default function WebsiteDevelopment() {
  return <WebsiteDevelopmentContent />;
}
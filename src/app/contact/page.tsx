import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Biz Glow AI - Contact Us",
  description: "Get in touch with Biz Glow AI to explore how our AI-powered solutions can transform your small business operations.",
};

export default function Contact() {
  return <ContactContent />;
}
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Biz Glow AI - Marketing Automation",
  description: "Transform your marketing efforts with AI-driven automation tools for personalized campaigns, social media management, and content creation.",
};

export default function MarketingAutomation() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-2 text-gray-400">
          <Link href="/services" className="hover:text-blue-400 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-white">Marketing Automation</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-fade-in [animation-delay:200ms]">
              Marketing Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Transform your marketing efforts with AI-driven automation tools for personalized campaigns, social media management, and content creation.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Mail" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Email Campaigns</h3>
              </div>
              <p className="text-gray-400">
                AI-powered email marketing that personalizes content based on customer behavior, preferences, and purchase history. Our system optimizes send times and subject lines for maximum engagement.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Clock" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Social Media</h3>
              </div>
              <p className="text-gray-400">
                Automated social media management that schedules posts, tracks engagement, and suggests content ideas. Our AI analyzes trends and audience behavior to optimize your social strategy.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Content Creation</h3>
              </div>
              <p className="text-gray-400">
                AI-driven content generation for product descriptions, blog posts, and marketing copy. Our system maintains your brand voice while creating engaging, SEO-optimized content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Campaign Performance</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• AI-driven content personalization</li>
                <li>• Automated campaign optimization</li>
                <li>• Multi-channel marketing coordination</li>
                <li>• Real-time performance analytics</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Engagement</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Customer segmentation and targeting</li>
                <li>• Personalized content recommendations</li>
                <li>• Automated engagement tracking</li>
                <li>• Cross-channel customer journey mapping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">E-commerce Marketing</h3>
              <p className="text-gray-400 mb-4">
                An online retailer implemented our marketing automation system and saw a 45% increase in email open rates and a 30% boost in conversion rates. The AI system personalized product recommendations based on browsing behavior and purchase history.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Automated abandoned cart recovery</li>
                <li>• Personalized product recommendations</li>
                <li>• Dynamic pricing optimization</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Content Marketing</h3>
              <p className="text-gray-400 mb-4">
                A content marketing agency used our AI tools to streamline their content creation process, resulting in a 60% reduction in content production time while maintaining quality and engagement metrics.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Automated content scheduling</li>
                <li>• SEO optimization suggestions</li>
                <li>• Performance analytics tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
} 
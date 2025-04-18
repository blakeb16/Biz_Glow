import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Biz Glow AI - Website Development",
  description: "Get a professional, modern website up and running in days, not months. Our AI-powered website development service combines cutting-edge design with powerful functionality at a fraction of traditional costs.",
};

export default function WebsiteDevelopment() {
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
          <span className="text-white">Website Development</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-fade-in [animation-delay:200ms]">
              Website Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Get a professional, modern website up and running in days, not months. Our AI-powered website development service combines cutting-edge design with powerful functionality at a fraction of traditional costs.
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
                <IconWrapper icon="Target" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Custom Design</h3>
              </div>
              <p className="text-gray-400">
                Our AI-powered design system creates unique, modern websites that reflect your brand identity. We combine your preferences with industry best practices to deliver stunning, conversion-focused designs.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">E-commerce Solutions</h3>
              </div>
              <p className="text-gray-400">
                Complete online store setup with secure payment processing, inventory management, and order tracking. Our e-commerce solutions are optimized for conversions and provide a seamless shopping experience.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Bot" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">SEO Optimization</h3>
              </div>
              <p className="text-gray-400">
                Built-in SEO features that help your website rank higher in search results. Our system optimizes content, structure, and performance to maximize your online visibility and attract more visitors.
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
              <h3 className="text-xl font-semibold mb-4">Cost-Effective</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Up to 70% lower than traditional development</li>
                <li>• No hidden fees or maintenance costs</li>
                <li>• Free hosting for the first year</li>
                <li>• Affordable monthly maintenance plans</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Websites ready in 5-7 business days</li>
                <li>• Quick content updates and changes</li>
                <li>• 24/7 technical support</li>
                <li>• Regular performance optimizations</li>
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
              <h3 className="text-xl font-bold mb-4">Small Business Website</h3>
              <p className="text-gray-400 mb-4">
                A local bakery needed an online presence to showcase their products and take orders. We created a beautiful, mobile-friendly website with online ordering capabilities, resulting in a 40% increase in sales within the first month.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Product showcase gallery</li>
                <li>• Online ordering system</li>
                <li>• Customer testimonials</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">E-commerce Store</h3>
              <p className="text-gray-400 mb-4">
                An online clothing retailer wanted to expand their business. We developed a full-featured e-commerce website with inventory management, secure payments, and automated shipping calculations, leading to a 60% increase in online sales.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Product management system</li>
                <li>• Secure payment processing</li>
                <li>• Automated shipping integration</li>
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
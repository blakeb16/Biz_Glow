import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Biz Glow AI - Customer Service Automation",
  description: "Transform your customer support with AI-powered chatbots and virtual assistants that provide 24/7 automated assistance and personalized responses.",
};

export default function CustomerServiceAutomation() {
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
          <span className="text-white">Customer Service Automation</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-fade-in [animation-delay:200ms]">
              Customer Service Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Transform your customer support with AI-powered chatbots and virtual assistants that provide 24/7 automated assistance and personalized responses.
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
                <IconWrapper icon="MessageSquare" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">AI-Powered Chatbots</h3>
              </div>
              <p className="text-gray-400">
                Our intelligent chatbots leverage advanced NLP to understand and respond to customer inquiries with human-like accuracy. They can handle multiple conversations simultaneously and learn from each interaction to improve responses over time.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Clock" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Virtual Assistants</h3>
              </div>
              <p className="text-gray-400">
                Automated scheduling and follow-up systems that manage appointments, send reminders, and handle routine customer interactions. They integrate seamlessly with your existing calendar and CRM systems.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Order Management</h3>
              </div>
              <p className="text-gray-400">
                Automated order tracking, status updates, and follow-up communications. Our system keeps customers informed at every step of their purchase journey, reducing support tickets and improving satisfaction.
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
              <h3 className="text-xl font-semibold mb-4">Operational Efficiency</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Reduce response times by up to 80% with instant replies</li>
                <li>• Handle multiple customer inquiries concurrently</li>
                <li>• 24/7 availability without additional staffing costs</li>
                <li>• Automated ticket routing and prioritization</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Experience</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Seamless integration with CRM, websites, and apps</li>
                <li>• Personalized responses based on customer history</li>
                <li>• Consistent brand voice across all interactions</li>
                <li>• Multi-language support for global customers</li>
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
              <h3 className="text-xl font-bold mb-4">E-commerce Support</h3>
              <p className="text-gray-400 mb-4">
                An online retailer implemented our chatbot system and saw a 65% reduction in support tickets while maintaining a 4.8/5 customer satisfaction rating. The chatbot handles common inquiries about shipping, returns, and product information.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• 500+ daily inquiries handled automatically</li>
                <li>• 30% increase in order completion rate</li>
                <li>• 24/7 support across multiple time zones</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Service Industry</h3>
              <p className="text-gray-400 mb-4">
                A service-based business automated their appointment scheduling and follow-up process, resulting in a 40% increase in booking efficiency and a 25% reduction in no-shows.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Automated appointment reminders</li>
                <li>• Real-time schedule updates</li>
                <li>• Customer feedback collection</li>
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
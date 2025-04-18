
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Biz Glow AI - Operational Automation",
  description: "Transform your business efficiency with intelligent workflow automation for inventory management, supply chain optimization, and HR automation.",
};

export default function OperationalAutomation() {
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
          <span className="text-white">Operational Automation</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-fade-in [animation-delay:200ms]">
              Operational Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Transform your business efficiency with intelligent workflow automation for inventory management, supply chain optimization, and HR automation.
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
                <IconWrapper icon="Clock" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Inventory Management</h3>
              </div>
              <p className="text-gray-400">
                Automate inventory tracking with real-time updates, predictive restocking, and demand forecasting to minimize stockouts and overstock situations.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Supply Chain Optimization</h3>
              </div>
              <p className="text-gray-400">
                Streamline supply chain processes with AI-driven logistics planning, supplier coordination, and delivery scheduling to reduce costs and improve efficiency.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Bot" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">HR Automation</h3>
              </div>
              <p className="text-gray-400">
                Automate HR tasks like recruitment, onboarding, and payroll with intelligent workflows, freeing up your team to focus on strategic initiatives.
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
                <li>• Automated inventory tracking</li>
                <li>• Smart supply chain management</li>
                <li>• HR process automation</li>
                <li>• Workflow optimization</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Scalability & Insights</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Resource allocation optimization</li>
                <li>• Real-time operational monitoring</li>
                <li>• Scalable automation workflows</li>
                <li>• Data-driven decision-making</li>
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
              <h3 className="text-xl font-bold mb-4">Retail Operations</h3>
              <p className="text-gray-400 mb-4">
                A retail chain implemented our operational automation tools, resulting in a 60% reduction in inventory discrepancies and a 30% improvement in supply chain efficiency through automated tracking and logistics optimization.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Real-time inventory updates</li>
                <li>• Predictive restocking algorithms</li>
                <li>• Automated supplier coordination</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Corporate HR</h3>
              <p className="text-gray-400 mb-4">
                A mid-sized company automated its HR processes, reducing onboarding time by 50% and payroll errors by 80% with our AI-driven recruitment and payroll workflows.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Automated candidate screening</li>
                <li>• Streamlined onboarding workflows</li>
                <li>• Payroll automation</li>
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

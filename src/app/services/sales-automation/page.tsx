import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Biz Glow AI - Sales Automation",
  description: "Streamline your sales process with intelligent automation tools for lead scoring, personalized outreach, and sales forecasting.",
};

export default function SalesAutomation() {
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
          <span className="text-white">Sales Automation</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-fade-in [animation-delay:200ms]">
              Sales Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Streamline your sales process with intelligent automation tools for lead scoring, personalized outreach, and sales forecasting.
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
                <h3 className="text-xl font-bold">Lead Scoring</h3>
              </div>
              <p className="text-gray-400">
                AI-powered lead qualification that analyzes customer behavior, engagement patterns, and demographic data to identify high-value prospects and prioritize sales efforts.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Mail" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Personalized Outreach</h3>
              </div>
              <p className="text-gray-400">
                Automated, personalized communication that adapts to each businesses interests and stage in the buying journey. Our system crafts custom messages and recommends optimal contact times.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Sales Forecasting</h3>
              </div>
              <p className="text-gray-400">
                Predictive analytics that forecast sales trends, identify opportunities, and optimize resource allocation. Our AI analyzes historical data and market conditions for accurate predictions.
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
              <h3 className="text-xl font-semibold mb-4">Sales Efficiency</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Intelligent lead qualification</li>
                <li>• Automated follow-up sequences</li>
                <li>• Sales pipeline optimization</li>
                <li>• Customer behavior prediction</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Performance analytics and reporting</li>
                <li>• Conversion rate optimization</li>
                <li>• Sales cycle acceleration</li>
                <li>• Revenue forecasting accuracy</li>
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
              <h3 className="text-xl font-bold mb-4">B2B Sales</h3>
              <p className="text-gray-400 mb-4">
                A B2B software company implemented our sales automation system and saw a 50% increase in qualified leads and a 37% reduction in sales cycle length. The AI system prioritized high-value prospects and automated follow-ups.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Automated lead scoring and qualification</li>
                <li>• Personalized email sequences</li>
                <li>• Meeting scheduling automation</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">E-commerce Sales</h3>
              <p className="text-gray-400 mb-4">
                An online retailer used our sales automation tools to optimize their checkout process and abandoned cart recovery, resulting in a 40% increase in conversion rates and a 25% boost in average order value.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Dynamic pricing optimization</li>
                <li>• Cart abandonment recovery</li>
                <li>• Cross-sell recommendations</li>
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
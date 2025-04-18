import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Biz Glow AI - Reporting and Insights",
  description: "Gain powerful insights with AI-driven analytics, predictive reporting, and real-time business intelligence tools.",
};

export default function ReportingAndInsights() {
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
          <span className="text-white">Reporting and Insights</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-fade-in [animation-delay:200ms]">
              Reporting and Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
              Gain powerful insights with AI-driven analytics, predictive reporting, and real-time business intelligence tools.
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
                <IconWrapper icon="BarChart" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
              </div>
              <p className="text-gray-400">
                Comprehensive data analysis tools that transform raw data into actionable insights. Our AI system identifies patterns, trends, and opportunities across your business operations.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Bot" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Feedback Analysis</h3>
              </div>
              <p className="text-gray-400">
                AI-powered sentiment analysis that processes customer feedback, reviews, and social media mentions to provide valuable insights into customer satisfaction and market perception.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Clock" variant="blue" size="lg" />
                <h3 className="text-xl font-bold">Real-time Dashboards</h3>
              </div>
              <p className="text-gray-400">
                Customizable dashboards that provide real-time visibility into key performance indicators, allowing you to monitor business metrics and make data-driven decisions instantly.
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
              <h3 className="text-xl font-semibold mb-4">Data-Driven Decisions</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Customizable reports and visualizations</li>
                <li>• Predictive analytics for forecasting</li>
                <li>• Benchmarking against industry standards</li>
                <li>• Exportable data and sharing options</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Business Intelligence</h3>
              <ul className="space-y-4 text-gray-400">
                <li>• Automated insights and recommendations</li>
                <li>• Real-time performance monitoring</li>
                <li>• Competitive analysis tools</li>
                <li>• Market trend identification</li>
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
              <h3 className="text-xl font-bold mb-4">Retail Analytics</h3>
              <p className="text-gray-400 mb-4">
                A retail chain implemented our analytics platform and achieved a 30% improvement in inventory turnover and a 25% increase in sales through data-driven product placement and pricing strategies.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Sales trend analysis</li>
                <li>• Customer behavior tracking</li>
                <li>• Inventory optimization</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Service Industry</h3>
              <p className="text-gray-400 mb-4">
                A service-based business used our insights platform to optimize their operations, resulting in a 40% reduction in customer wait times and a 35% increase in customer satisfaction scores.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Performance metrics tracking</li>
                <li>• Customer feedback analysis</li>
                <li>• Resource allocation optimization</li>
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
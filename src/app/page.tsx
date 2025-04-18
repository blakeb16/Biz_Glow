import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Biz Glow AI - AI-Powered Solutions for Small Businesses",
  description: "Transform your business with Biz Glow AI's intelligent automation and AI agents. Streamline operations, enhance customer service, and drive growth.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizglow.ai/",
    siteName: "Biz Glow AI",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cosmic-gradient text-white overflow-hidden">
      {/* Apply grid overlay and particles at the page level */}
      <div className="absolute inset-0 bg-grid-overlay" />
      <div className="bg-particle-effect">
        <div className="w-1 h-1 bg-blue-400 rounded-full absolute top-20 left-1/4 animate-particle" />
        <div className="w-1 h-1 bg-purple-400 rounded-full absolute top-40 right-1/3 animate-particle-delayed" />
        <div className="w-1 h-1 bg-amber-400 rounded-full absolute top-[30%] left-1/3 animate-particle" />
        <div className="w-1 h-1 bg-blue-400 rounded-full absolute top-[50%] left-2/4 animate-particle-delayed" />
        <div className="w-1 h-1 bg-purple-400 rounded-full absolute top-[70%] right-1/4 animate-particle" />
        <div className="w-1 h-1 bg-amber-400 rounded-full absolute top-[90%] left-1/5 animate-particle-delayed" />
      </div>

      <Navbar />
      <HeroSection />

      {/* Features Section */}
      <section className="relative py-20">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Powerful Features & Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to automate, grow, and transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Service Automation */}
            <Link href="/services/customer-service-automation" className="block">
              <Card className="bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors animate-pulse">
                    <IconWrapper icon="MessageSquare" variant="blue" size="lg" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Customer Service Automation</h3>
                  <p className="text-gray-300 mb-6">
                    Provide seamless 24/7 support with AI chatbots and virtual assistants.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">AI-powered chatbots</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Virtual assistants</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Automated follow-ups</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Marketing Automation */}
            <Link href="/services/marketing-automation" className="block">
              <Card className="bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors animate-pulse [animation-delay:200ms]">
                    <IconWrapper icon="Mail" variant="blue" size="lg" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Marketing Automation</h3>
                  <p className="text-gray-300 mb-6">
                    Drive engagement with personalized email campaigns and social media tools.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Personalized campaigns</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Social media automation</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">AI content creation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Operational Automation */}
            <Link href="/services/operational-automation" className="block">
              <Card className="bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors animate-pulse [animation-delay:400ms]">
                    <IconWrapper icon="Zap" variant="blue" size="lg" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Operational Automation</h3>
                  <p className="text-gray-300 mb-6">
                    Streamline workflows with intelligent automation for efficiency.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Inventory management</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Supply chain optimization</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">HR automation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Reporting and Insights */}
            <Link href="/services/reporting-and-insights" className="block">
              <Card className="bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors animate-pulse">
                    <IconWrapper icon="BarChart" variant="blue" size="lg" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Reporting and Insights</h3>
                  <p className="text-gray-300 mb-6">
                    Empower decisions with real-time data and AI-driven analytics.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Real-time dashboards</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Predictive analytics</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Customizable reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Sales Automation */}
            <Link href="/services/sales-automation" className="block">
              <Card className="bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors animate-pulse [animation-delay:200ms]">
                    <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Sales Automation</h3>
                  <p className="text-gray-300 mb-6">
                    Boost conversions with AI-driven lead scoring and outreach.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">AI lead scoring</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Personalized outreach</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Sales forecasting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>

            {/* Website Development */}
            <Link href="/services/website-development" className="block">
              <Card className="bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors animate-pulse [animation-delay:400ms]">
                    <IconWrapper icon="Sparkles" variant="blue" size="lg" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Website Development</h3>
                  <p className="text-gray-300 mb-6">
                    Build modern, SEO-optimized websites in days, not months.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">Custom website design</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">E-commerce integration</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <IconWrapper icon="CheckCircle2" variant="gold" size="sm" />
                      <span className="ml-2">SEO optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered features and services work together seamlessly to help your business grow. From automating routine tasks to providing deep insights, we have got you covered at every step of your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Why Biz Glow AI Section */}
      <section className="relative py-24">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-fade-in-up">
              Why Choose Biz Glow AI?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
              We&apos;re more than just an AI service provider. We&apos;re your growth partner — combining innovation, affordability, and empowerment to help your small business shine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-up [animation-delay:400ms]">
            {[
              {
                title: "Innovation",
                content: "Tap into the latest advancements in AI to automate smarter, scale faster, and innovate fearlessly.",
                icon: "Zap" as const,
              },
              {
                title: "Affordability",
                content: "Get enterprise-grade automation without the enterprise price tag. Big results for lean budgets.",
                icon: "Star" as const,
              },
              {
                title: "Empowerment",
                content: "From solopreneurs to scaling teams, we build tools that simplify, amplify, and elevate your work.",
                icon: "Users" as const,
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 border border-blue-500/10 hover:border-blue-500/30 hover:shadow-blue-500/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group"
              >
                <CardContent>
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all">
                    <IconWrapper icon={value.icon} variant="blue" size="lg" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}
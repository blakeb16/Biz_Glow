"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { motion } from "framer-motion";

export default function ServicesContent() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="min-h-screen bg-cosmic-gradient text-white overflow-hidden">
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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
              variants={fadeInUp}
            >
              AI Services for Small Businesses
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Transform your business operations with our comprehensive suite of AI-powered solutions designed specifically for small businesses and online sellers.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Customer Service Automation Section */}
      <section id="customer-service" className="relative py-20">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-4 mb-6">
                <IconWrapper icon="MessageSquare" variant="blue" size="lg" />
                <h2 className="text-3xl md:text-4xl font-bold">Customer Service Automation</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Our intelligent AI chatbots and virtual assistants provide seamless 24/7 customer support, handling inquiries, scheduling, and order follow-ups. Leveraging cutting-edge natural language processing (NLP) and machine learning, they adapt to your customers&#39; needs, delivering personalized and accurate responses in real-time.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you&#39;re looking to enhance customer experience, reduce operational costs, or scale your support capabilities, our automation tools integrate effortlessly with your existing platforms, offering a robust solution tailored to your business.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="MessageSquare" variant="blue" size="sm" />
                  <span>AI-powered chatbots for instant responses</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Clock" variant="blue" size="sm" />
                  <span>Virtual assistants for scheduling</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="TrendingUp" variant="blue" size="sm" />
                  <span>Automated order follow-ups</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
                <Link href="/services/customer-service-automation">
                  Learn More About Customer Service Automation
                </Link>
                <IconWrapper icon="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Key Benefits</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Reduce response times by up to 80% with instant replies
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Manage multiple customer inquiries concurrently
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Seamless integration with CRM, websites, and apps
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Fully customizable to reflect your brand&#39;s voice and tone
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> In-depth analytics to track engagement and performance
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Marketing Automation Section */}
      <section id="marketing" className="relative py-20">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="order-2 md:order-1" variants={fadeInUp}>
              <div className="flex items-center space-x-4 mb-6">
                <IconWrapper icon="Mail" variant="blue" size="lg" />
                <h2 className="text-3xl md:text-4xl font-bold">Marketing Automation</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Transform your marketing efforts with our AI-driven automation tools. From personalized email campaigns to social media management, our solutions help you create targeted, effective marketing strategies that drive engagement and conversions.
              </p>
              <p className="text-gray-300 mb-6">
                Our AI-powered marketing tools analyze customer behavior, preferences, and engagement patterns to deliver personalized content and recommendations, ensuring your marketing efforts are always on point and driving results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center barb space-x-3 text-gray-300">
                  <IconWrapper icon="Mail" variant="blue" size="sm" />
                  <span>Personalized email campaigns</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Clock" variant="blue" size="sm" />
                  <span>Social media management</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="TrendingUp" variant="blue" size="sm" />
                  <span>AI content creation</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
                <Link href="/services/marketing-automation">
                  Explore Marketing Automation
                </Link>
                <IconWrapper icon="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Marketing Features</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> AI-driven content personalization
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated campaign optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Multi-channel marketing coordination
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Real-time performance analytics
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Customer segmentation and targeting
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sales Automation Section */}
      <section id="sales" className="relative py-20">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-4 mb-6">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h2 className="text-3xl md:text-4xl font-bold">Sales Automation</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Streamline your sales process with our intelligent automation tools. From lead scoring to personalized outreach, our AI-powered solutions help you identify and convert the most promising opportunities while maintaining meaningful customer relationships.
              </p>
              <p className="text-gray-300 mb-6">
                Our sales automation tools analyze customer data, predict buying patterns, and automate follow-ups, ensuring you never miss an opportunity while maintaining a personal touch in your sales process.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Target" variant="blue" size="sm" />
                  <span>AI lead scoring</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Mail" variant="blue" size="sm" />
                  <span>Personalized sales messages</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="TrendingUp" variant="blue" size="sm" />
                  <span>Sales forecasting</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
                <Link href="/services/sales-automation">
                  Discover Sales Automation
                </Link>
                <IconWrapper icon="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Sales Features</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Intelligent lead qualification
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated follow-up sequences
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Sales pipeline optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Customer behavior prediction
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Performance analytics and reporting
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Operational Automation Section */}
      <section id="operations" className="relative py-20">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="order-2 md:order-1" variants={fadeInUp}>
              <div className="flex items-center space-x-4 mb-6">
                <IconWrapper icon="Zap" variant="blue" size="lg" />
                <h2 className="text-3xl md:text-4xl font-bold">Operational Automation</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Transform your business efficiency with our intelligent workflow automation solutions. From simplifying repetitive tasks to orchestrating complex processes, our AI-driven system adapts dynamically to your operational needs, saving time and reducing errors.
              </p>
              <p className="text-gray-300 mb-6">
                Integrate with your existing tools and empower your team with automated task management, real-time monitoring, and smart decision-making capabilities, all designed to optimize productivity and scalability.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Clock" variant="blue" size="sm" />
                  <span>Inventory management</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="TrendingUp" variant="blue" size="sm" />
                  <span>Supply chain optimization</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Bot" variant="blue" size="sm" />
                  <span>HR automation</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
                <Link href="/services/operational-automation">
                  Explore Operational Automation
                </Link>
                <IconWrapper icon="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Operational Features</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated inventory tracking
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Smart supply chain management
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> HR process automation
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Workflow optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Resource allocation
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Reporting and Insights Section */}
      <section id="analytics" className="relative py-20">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-4 mb-6">
                <IconWrapper icon="BarChart" variant="blue" size="lg" />
                <h2 className="text-3xl md:text-4xl font-bold">Reporting and Insights</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Empower your decision-making with our advanced analytics dashboard. Track key performance indicators, uncover trends, and gain actionable insights with real-time data and AI-driven recommendations tailored to your business goals.
              </p>
              <p className="text-gray-300 mb-6">
                From predictive analytics to historical performance reviews, our platform provides a comprehensive view of your operations, helping you stay ahead of the curve and make informed strategic choices.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="TrendingUp" variant="blue" size="sm" />
                  <span>Advanced data analysis</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Bot" variant="blue" size="sm" />
                  <span>Feedback analysis</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Clock" variant="blue" size="sm" />
                  <span>Real-time dashboards</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
                <Link href="/services/reporting-and-insights">
                  View Analytics Features
                </Link>
                <IconWrapper icon="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Analytics Features</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Customizable reports and visualizations
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Predictive analytics for forecasting
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Benchmarking against industry standards
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Exportable data and sharing options
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated insights and recommendations
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Website Development Section */}
      <section id="website" className="relative py-20">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0ylinder2),_transparent_80%)]" />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div className="order-2 md:order-1" variants={fadeInUp}>
              <div className="flex items-center space-x-4 mb-6">
                <IconWrapper icon="Sparkles" variant="blue" size="lg" />
                <h2 className="text-3xl md:text-4xl font-bold">Website Development</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Get a professional, modern website up and running in days, not months. Our AI-powered website development service combines cutting-edge design with powerful functionality at a fraction of traditional costs.
              </p>
              <p className="text-gray-300 mb-6">
                From sleek landing pages to full e-commerce solutions, we create responsive, SEO-optimized websites that convert visitors into customers. Our process is fast, efficient, and tailored to your specific business needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Target" variant="blue" size="sm" />
                  <span>Custom website design</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="TrendingUp" variant="blue" size="sm" />
                  <span>E-commerce integration</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <IconWrapper icon="Bot" variant="blue" size="sm" />
                  <span>SEO optimization</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105">
                <Link href="/services/website-development">
                  Learn More About Website Development
                </Link>
                <IconWrapper icon="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Website Features</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Mobile-responsive design
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Fast loading times
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Secure hosting included
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Content management system
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Analytics integration
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}
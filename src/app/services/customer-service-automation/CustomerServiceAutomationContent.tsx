"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { motion } from "framer-motion";

export default function CustomerServiceAutomationContent() {
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

      {/* Breadcrumb */}
      <div className="relative">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <motion.div
          className="container mx-auto px-4 py-6 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className="flex items-center space-x-2 text-gray-300" variants={fadeInUp}>
            <Link href="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-gray-100">Customer Service Automation</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
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
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
              variants={fadeInUp}
            >
              Customer Service Automation
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Transform your customer support with AI-powered chatbots and virtual assistants that provide 24/7 automated assistance and personalized responses.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
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
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100"
            variants={fadeInUp}
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="MessageSquare" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">AI-Powered Chatbots</h3>
              </div>
              <p className="text-gray-300">
                Our intelligent chatbots leverage advanced NLP to understand and respond to customer inquiries with human-like accuracy. They can handle multiple conversations simultaneously and learn from each interaction to improve responses over time.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Clock" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">Virtual Assistants</h3>
              </div>
              <p className="text-gray-300">
                Automated scheduling and follow-up systems that manage appointments, send reminders, and handle routine customer interactions. They integrate seamlessly with your existing calendar and CRM systems.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">Order Management</h3>
              </div>
              <p className="text-gray-300">
                Automated order tracking, status updates, and follow-up communications. Our system keeps customers informed at every step of their purchase journey, reducing support tickets and improving satisfaction.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20">
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
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100"
            variants={fadeInUp}
          >
            Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="bg-gray-800 p-8 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Operational Efficiency</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Reduce response times by up to 80% with instant replies
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Handle multiple customer inquiries concurrently
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> 24/7 availability without additional staffing costs
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated ticket routing and prioritization
                </li>
              </ul>
            </motion.div>
            <motion.div className="bg-gray-800 p-8 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Customer Experience</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Seamless integration with CRM, websites, and apps
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Personalized responses based on customer history
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Consistent brand voice across all interactions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Multi-language support for global customers
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-20">
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
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100"
            variants={fadeInUp}
          >
            Real-World Applications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4 text-gray-100">E-commerce Support</h3>
              <p className="text-gray-300 mb-4">
                An online retailer implemented our chatbot system and saw a 65% reduction in support tickets while maintaining a 4.8/5 customer satisfaction rating. The chatbot handles common inquiries about shipping, returns, and product information.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> 500+ daily inquiries handled automatically
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> 30% increase in order completion rate
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> 24/7 support across multiple time zones
                </li>
              </ul>
            </motion.div>
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4 text-gray-100">Service Industry</h3>
              <p className="text-gray-300 mb-4">
                A service-based business automated their appointment scheduling and follow-up process, resulting in a 40% increase in booking efficiency and a 25% reduction in no-shows.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated appointment reminders
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Real-time schedule updates
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Customer feedback collection
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
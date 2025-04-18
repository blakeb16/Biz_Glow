"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { motion } from "framer-motion";

export default function MarketingAutomationContent() {
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
            <span className="text-gray-100">Marketing Automation</span>
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
              Marketing Automation
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Transform your marketing efforts with AI-driven automation tools for personalized campaigns, social media management, and content creation.
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
                <IconWrapper icon="Mail" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">Email Campaigns</h3>
              </div>
              <p className="text-gray-300">
                AI-powered email marketing that personalizes content based on customer behavior, preferences, and purchase history. Our system optimizes send times and subject lines for maximum engagement.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Clock" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">Social Media</h3>
              </div>
              <p className="text-gray-300">
                Automated social media management that schedules posts, tracks engagement, and suggests content ideas. Our AI analyzes trends and audience behavior to optimize your social strategy.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">Content Creation</h3>
              </div>
              <p className="text-gray-300">
                AI-driven content generation for product descriptions, blog posts, and marketing copy. Our system maintains your brand voice while creating engaging, SEO-optimized content.
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
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Campaign Performance</h3>
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
              </ul>
            </motion.div>
            <motion.div className="bg-gray-800 p-8 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Customer Engagement</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Customer segmentation and targeting
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Personalized content recommendations
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated engagement tracking
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Cross-channel customer journey mapping
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
              <h3 className="text-xl font-bold mb-4 text-gray-100">E-commerce Marketing</h3>
              <p className="text-gray-300 mb-4">
                An online retailer implemented our marketing automation system and saw a 45% increase in email open rates and a 30% boost in conversion rates. The AI system personalized product recommendations based on browsing behavior and purchase history.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated abandoned cart recovery
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Personalized product recommendations
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Dynamic pricing optimization
                </li>
              </ul>
            </motion.div>
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4 text-gray-100">Content Marketing</h3>
              <p className="text-gray-300 mb-4">
                A content marketing agency used our AI tools to streamline their content creation process, resulting in a 60% reduction in content production time while maintaining quality and engagement metrics.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated content scheduling
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> SEO optimization suggestions
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Performance analytics tracking
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
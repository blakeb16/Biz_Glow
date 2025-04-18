"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { motion } from "framer-motion";

export default function OperationalAutomationContent() {
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
            <span className="text-gray-100">Operational Automation</span>
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
              Operational Automation
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Transform your business efficiency with intelligent workflow automation for inventory management, supply chain optimization, and HR automation.
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
                <IconWrapper icon="Clock" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">Inventory Management</h3>
              </div>
              <p className="text-gray-300">
                Automate inventory tracking with real-time updates, predictive restocking, and demand forecasting to minimize stockouts and overstock situations.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">Supply Chain Optimization</h3>
              </div>
              <p className="text-gray-300">
                Streamline supply chain processes with AI-driven logistics planning, supplier coordination, and delivery scheduling to reduce costs and improve efficiency.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Bot" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">HR Automation</h3>
              </div>
              <p className="text-gray-300">
                Automate HR tasks like recruitment, onboarding, and payroll with intelligent workflows, freeing up your team to focus on strategic initiatives.
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
              </ul>
            </motion.div>
            <motion.div className="bg-gray-800 p-8 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Scalability & Insights</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Resource allocation optimization
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Real-time operational monitoring
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Scalable automation workflows
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Data-driven decision-making
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
              <h3 className="text-xl font-bold mb-4 text-gray-100">Retail Operations</h3>
              <p className="text-gray-300 mb-4">
                A retail chain implemented our operational automation tools, resulting in a 60% reduction in inventory discrepancies and a 30% improvement in supply chain efficiency through automated tracking and logistics optimization.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Real-time inventory updates
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Predictive restocking algorithms
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated supplier coordination
                </li>
              </ul>
            </motion.div>
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4 text-gray-100">Corporate HR</h3>
              <p className="text-gray-300 mb-4">
                A mid-sized company automated its HR processes, reducing onboarding time by 50% and payroll errors by 80% with our AI-driven recruitment and payroll workflows.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated candidate screening
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Streamlined onboarding workflows
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Payroll automation
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
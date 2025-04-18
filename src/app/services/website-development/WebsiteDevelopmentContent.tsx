"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { motion } from "framer-motion";

export default function WebsiteDevelopmentContent() {
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
            <span className="text-gray-100">Website Development</span>
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
              Website Development
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Get a professional, modern website up and running in days, not months. Our AI-powered website development service combines cutting-edge design with powerful functionality at a fraction of traditional costs.
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
                <IconWrapper icon="Target" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">Custom Design</h3>
              </div>
              <p className="text-gray-300">
                Our AI-powered design system creates unique, modern websites that reflect your brand identity. We combine your preferences with industry best practices to deliver stunning, conversion-focused designs.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="TrendingUp" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">E-commerce Solutions</h3>
              </div>
              <p className="text-gray-300">
                Complete online store setup with secure payment processing, inventory management, and order tracking. Our e-commerce solutions are optimized for conversions and provide a seamless shopping experience.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-4">
                <IconWrapper icon="Bot" variant="blue" size="lg" />
                <h3 className="text-xl font-bold text-gray-100">SEO Optimization</h3>
              </div>
              <p className="text-gray-300">
                Built-in SEO features that help your website rank higher in search results. Our system optimizes content, structure, and performance to maximize your online visibility and attract more visitors.
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
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Cost-Effective</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Up to 70% lower than traditional development
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> No hidden fees or maintenance costs
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Free hosting for the first year
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Affordable monthly maintenance plans
                </li>
              </ul>
            </motion.div>
            <motion.div className="bg-gray-800 p-8 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Fast Delivery</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Websites ready in 5-7 business days
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Quick content updates and changes
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> 24/7 technical support
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Regular performance optimizations
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
              <h3 className="text-xl font-bold mb-4 text-gray-100">Small Business Website</h3>
              <p className="text-gray-300 mb-4">
                A local bakery needed an online presence to showcase their products and take orders. We created a beautiful, mobile-friendly website with online ordering capabilities, resulting in a 40% increase in sales within the first month.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Product showcase gallery
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Online ordering system
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Customer testimonials
                </li>
              </ul>
            </motion.div>
            <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg" variants={fadeInUp}>
              <h3 className="text-xl font-bold mb-4 text-gray-100">E-commerce Store</h3>
              <p className="text-gray-300 mb-4">
                An online clothing retailer wanted to expand their business. We developed a full-featured e-commerce website with inventory management, secure payments, and automated shipping calculations, leading to a 60% increase in online sales.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Product management system
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Secure payment processing
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span> Automated shipping integration
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
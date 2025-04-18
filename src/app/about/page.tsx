"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import CtaSection from "@/components/CtaSection";

export default function About() {
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
      <section className="relative pt-32 pb-24">
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
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
              variants={fadeInUp}
            >
              About Biz Glow AI
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-10 font-light"
              variants={fadeInUp}
            >
              Transforming small businesses with cutting-edge AI automation since 2023. Our tailored solutions empower entrepreneurs to thrive in a digital world with simplicity and impact.
            </motion.p>
            <motion.div variants={fadeInUp}></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="relative py-24">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-8" variants={fadeInUp}>
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Our Story
              </h2>
              <div className="space-y-6">
                {[
                  {
                    year: "2023",
                    text: "Founded by data analytics and AI experts from global energy and utility giants, Biz Glow AI was born to bridge the gap between enterprise-grade technology and small businesses.",
                  },
                  {
                    year: "Mission",
                    text: "We recognized that small businesses were underserved by complex, costly platforms. Our mission was clear: make AI accessible, affordable, and transformative.",
                  },
                  {
                    year: "Growth",
                    text: "By leveraging proprietary AI algorithms and a customer-first approach, we’ve expanded our reach, helping businesses across industries unlock new levels of efficiency and growth.",
                  },
                  {
                    year: "Today",
                    text: "Partnering with countless entrepreneurs, we’ve empowered businesses to boost SEO, automate customer engagement, and streamline operations with tailored AI solutions.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:shadow-lg after:absolute after:left-1.5 after:top-5 after:bottom-0 after:w-0.5 after:bg-blue-500/30"
                    variants={fadeInUp}
                  >
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.year}</h3>
                    <p className="text-gray-200">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative bg-gradient-to-br from-blue-900/50 to-gray-800 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-blue-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-100 text-lg">
                A world where every small business thrives with AI-driven automation, empowering local shops, startups, and entrepreneurs to compete at scale with seamless operations and smart marketing. We envision a future where technology levels the playing field for all.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}
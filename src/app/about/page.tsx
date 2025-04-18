"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {Lightbulb } from "lucide-react";
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
    <main className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-gray-950">
          <div className="absolute inset-0 opacity-30 animate-pulse">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_50%)]" />
          </div>
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
              className="text-xl md:text-2xl text-gray-200 mb-10 font-light"
              variants={fadeInUp}
            >
              Transforming small businesses with cutting-edge AI automation since 2023. Our tailored solutions empower entrepreneurs to thrive in a digital world with simplicity and impact.
            </motion.p>
            <motion.div variants={fadeInUp}>

            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-4">
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
                    <p className="text-gray-300">{item.text}</p>
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
              <p className="text-gray-200 text-lg">
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
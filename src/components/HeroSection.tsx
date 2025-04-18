"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { ContactFormModal } from "@/components/ContactFormModal";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="bg-section-glow">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
      </div>
      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={badgeVariants}
            animate={["visible", "pulse"]}
            className="inline-flex items-center px-5 py-2 rounded-full bg-blue-600/20 border border-blue-400/30 mb-8 shadow-lg shadow-blue-500/10"
          >
            <IconWrapper icon="Sparkles" variant="gold" size="sm" />
            <span className="text-blue-200 text-sm font-medium ml-2 drop-shadow-md">
              AI-Powered Business Solutions
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-purple-500"
            >
              Transform Your Business with AI
            </motion.h1>
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-amber-400 rounded-full animate-orbit" />
            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-blue-400 rounded-full animate-orbit-delayed" />
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            Automate workflows, enhance customer service, and drive growth with our intelligent AI solutions designed for small businesses.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="relative bg-amber-500 hover:bg-amber-600 text-gray-900 px-10 py-6 text-lg font-semibold rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
            >
              <span className="relative z-10">Get Started</span>
              <IconWrapper icon="ArrowRight" className="ml-2 h-5 w-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 hover:opacity-30 rounded-full transition-opacity duration-300" />
            </Button>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-blue-400/50 text-blue-300 hover:bg-blue-500/20 px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-blue-500/30"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <ContactFormModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        defaultService="Customer Service Automation"
      />
    </section>
  );
}
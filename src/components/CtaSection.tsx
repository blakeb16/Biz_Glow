"use client";

import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24">
      <div className="bg-section-glow">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
      </div>
      <motion.div
        className="container mx-auto px-4 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto relative">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-purple-500 drop-shadow-md"
          >
            Ready to Transform Your Business?
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-amber-400 rounded-full animate-orbit" />
            <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-orbit-delayed" />
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            Join the businesses already using Biz Glow AI to automate their operations and drive growth!
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button
                className="relative bg-amber-500 hover:bg-amber-600 text-gray-900 px-10 py-6 text-lg font-semibold rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
              >
                <span className="relative z-10">Contact Us</span>
                <IconWrapper icon="ArrowRight" className="ml-2 h-5 w-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 hover:opacity-30 rounded-full transition-opacity duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
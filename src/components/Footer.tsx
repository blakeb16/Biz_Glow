"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
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
    <footer className="relative text-white">
      {/* Enhanced separator with glow */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_-2px_15px_rgba(59,130,246,0.3)]" />
      {/* Darker overlay for the footer */}
      <div className="absolute inset-0 bg-indigo-950/30" />
      <div className="bg-section-glow">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Biz Glow AI Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Biz Glow AI
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Empowering small businesses with intelligent automation solutions to streamline operations and drive growth.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Services</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: "Customer Service Automation", href: "/services/customer-service-automation" },
                { name: "Marketing Automation", href: "/services/marketing-automation" },
                { name: "Sales Automation", href: "/services/sales-automation" },
                { name: "Reporting and Insights", href: "/services/reporting-and-insights" },
                { name: "Website Development", href: "/services/website-development" },
                { name: "Operational Automation", href: "/services/operational-automation" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-blue-400 transition-all duration-300 hover:translate-x-1 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-blue-400 transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-blue-400 transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Connect</h3>
            <div className="flex space-x-6">
              {[
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 group relative"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 transform group-hover:scale-125 group-hover:shadow-blue-500/50 transition-all" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          variants={fadeInUp}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Biz Glow AI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
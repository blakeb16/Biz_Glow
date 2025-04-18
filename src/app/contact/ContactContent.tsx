"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactContent() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Customer Service Automation",
    message: "",
  });

  const services = [
    "Customer Service Automation",
    "Marketing Automation",
    "Sales Automation",
    "Operational Automation",
    "Reporting and Insights",
  ];

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    try {
      const response = await fetch("https://n8n.bizglowai.com/webhook/15fb5a36-d127-4984-b60b-dd7f92f0743d", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "Customer Service Automation", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
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
              Connect with Biz Glow AI
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-10 font-light"
              variants={fadeInUp}
            >
              Ready to transform your business with AI? Let’s start a conversation to explore your needs.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form and FAQ Section */}
      <section className="relative py-24">
        <div className="bg-section-glow">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.2),_transparent_80%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-blue-900/50 to-gray-800 p-8 rounded-xl shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Reach Out
              </h2>
              {submitStatus === "success" ? (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-100 mb-4">Thank You!</h3>
                  <p className="text-gray-200 mb-6">We’ve received your message and will be in touch soon.</p>
                  <Button
                    onClick={() => setSubmitStatus("idle")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="bg-gray-800 border-gray-700 text-white rounded-lg focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="bg-gray-800 border-gray-700 text-white rounded-lg focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone (Optional)"
                      className="bg-gray-800 border-gray-700 text-white rounded-lg focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-2">
                      Interested Service
                    </label>
                    <Select onValueChange={handleServiceChange} defaultValue={formData.service} required>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white rounded-lg focus:border-blue-500">
                        <SelectValue placeholder="Select a Service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your needs"
                      className="bg-gray-800 border-gray-700 text-white rounded-lg focus:border-blue-500 min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitStatus === "submitting"}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {submitStatus === "submitting" ? "Submitting..." : "Send Message"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {submitStatus === "error" && (
                    <p className="text-red-400 text-center mt-2">Error submitting form. Please try again.</p>
                  )}
                </form>
              )}
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Frequently Asked Questions
              </h2>
              {[
                {
                  question: "How does the process start?",
                  answer:
                    "We begin with a discovery meeting to thoroughly understand your business needs and goals. This allows us to scope a tailored AI solution that aligns perfectly with your vision.",
                },
                {
                  question: "What kind of businesses do you work with?",
                  answer:
                    "We partner with small to medium-sized businesses across industries, from retail and e-commerce to hospitality and services, customizing AI tools to fit your unique challenges.",
                },
                {
                  question: "How long does it take to implement a solution?",
                  answer:
                    "After our initial meeting, we design and deploy solutions based on the complexity of your needs. Timelines vary, but we prioritize efficiency without compromising quality.",
                },
                {
                  question: "What kind of support do you offer?",
                  answer:
                    "Our dedicated support team is available via email to assist with implementation, training, and ongoing optimization, ensuring your AI tools deliver maximum value.",
                },
                {
                  question: "Can you integrate with existing systems?",
                  answer:
                    "Yes, our solutions are designed to integrate seamlessly with your current tools and platforms, enhancing your workflow without disruption.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-100"> {faq.question}</h3>
                  <p className="text-gray-200">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
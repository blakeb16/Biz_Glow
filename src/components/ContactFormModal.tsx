"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ContactFormModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService: string;
}

export function ContactFormModal({ isOpen, onOpenChange, defaultService }: ContactFormModalProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const services = [
    "Customer Service Automation",
    "Marketing Automation",
    "Sales Automation",
    "Operational Automation",
    "Reporting and Insights",
    "Website Development",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Structure the data for the webhook
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
    };

    try {
      const response = await fetch("https://n8n.bizglowai.com/webhook/15fb5a36-d127-4984-b60b-dd7f92f0743d", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 text-white p-8 rounded-lg max-w-lg mx-auto">
        {submitStatus === "success" ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-400 mb-6">We’ll be in touch soon.</p>
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Get Started with {defaultService}
              </DialogTitle>
              <p className="text-gray-400 mt-2">
                Fill out the form below, and our team will contact you shortly.
              </p>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label htmlFor="name" className="text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-gray-300">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="text-gray-300">
                  Interested Service
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue={defaultService}
                  className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500"
                  required
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                type="submit"
                disabled={submitStatus === "submitting"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
              >
                {submitStatus === "submitting" ? "Submitting..." : "Submit"}
              </Button>
            </form>
            {submitStatus === "error" && (
              <p className="text-red-400 mt-2 text-center">Error submitting form. Please try again.</p>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
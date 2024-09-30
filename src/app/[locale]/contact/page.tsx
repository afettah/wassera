"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Facebook, color: "text-[#1877F2]", label: "Facebook", href: "https://www.facebook.com" },
  { icon: Twitter, color: "text-[#1DA1F2]", label: "Twitter", href: "https://www.twitter.com" },
  { icon: Instagram, color: "text-[#E4405F]", label: "Instagram", href: "https://www.instagram.com" },
  { icon: Linkedin, color: "text-[#0A66C2]", label: "LinkedIn", href: "https://www.linkedin.com" },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: formData.email ? "" : "Email is required",
      message: formData.message ? "" : "Message is required",
    };

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-center text-gray-900">Contact Us</h1>

        {/* Form Section */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
              <Input
                id="name"
                placeholder="Your name"
                className="rounded-md"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="rounded-md"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={4}
                className="rounded-md"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full rounded-md">Send Message</Button>
          </form>
        </div>

        {/* Social Links Section */}
        <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Connect With Us</h2>
          <div className="flex justify-center items-center space-x-8">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className={`${social.color} opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out transform hover:scale-110`}
                aria-label={social.label}
              >
                <social.icon className="h-10 w-10" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Find Us</h2>
          <div className="relative h-64 bg-gray-100 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-800">123 Main Street</p>
            <p className="text-gray-600">Cityville, State 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
}
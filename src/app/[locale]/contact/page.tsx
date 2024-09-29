import { AnimatedBeamDemo } from "@/app/components/AnimatedBeamDemo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Contact Us
        </h1>

        {/* Form Section */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send us a message
          </h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input id="name" placeholder="Your name" className="rounded-md" />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={4}
                className="rounded-md"
              />
            </div>
            <Button type="submit" className="w-full rounded-md">
              Send Message
            </Button>
          </form>
        </div>

        <AnimatedBeamDemo />

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

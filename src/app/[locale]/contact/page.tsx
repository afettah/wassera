"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import BackgroundImageContainer from "@/app/components/backgroundImageContainer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useScopedI18n } from '@/locales/client';

const socialLinks = [
  {
    icon: Facebook,
    color: "text-[#1877F2]",
    label: "Facebook",
    href: "https://www.facebook.com",
  },
  {
    icon: Twitter,
    color: "text-[#1DA1F2]",
    label: "Twitter",
    href: "https://www.twitter.com",
  },
  {
    icon: Instagram,
    color: "text-[#E4405F]",
    label: "Instagram",
    href: "https://www.instagram.com",
  },
  {
    icon: Linkedin,
    color: "text-[#0A66C2]",
    label: "LinkedIn",
    href: "https://www.linkedin.com",
  },
];

export default function ContactUs() {
  const t = useScopedI18n('contactUs');
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      name: formData.name ? "" : t('form.errors.name'),
      email: formData.email ? "" : t('form.errors.email'),
      message: formData.message ? "" : t('form.errors.message'),
    };

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const mapLocation = {
    address: t('map.address'),
    city: t('map.city'),
    state: t('map.state'),
    zip: t('map.zip'),
    country: t('map.country'),
  };
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBOrYxdKm5e-E-O5YPR51KHCSrZxPiaX9g&q=${encodeURIComponent(
    mapLocation.address
  )}`;

  return (
    <BackgroundImageContainer>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <h1 className="text-3xl font-bold text-center text-gray-900">
            {t('title')}
          </h1>

          {/* Form Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t('form.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t('form.name')}
                  </label>
                  <Input
                    id="name"
                    placeholder={t('form.name')}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t('form.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('form.email')}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    {t('form.message')}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t('form.message')}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" className="w-full">
                  {t('form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Media Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">{t('social.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center space-x-8">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className={`${social.color} p-2 opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-12 w-12 " />
                    <span className="sr-only ">{social.label}</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Map Section */}
          <Card>
            <CardHeader>
              <CardTitle>{t('map.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-gray-100 rounded-md overflow-hidden">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-4">
                <p className="text-gray-800">{mapLocation.address}</p>
                <p className="text-gray-600">
                  {mapLocation.city}, {mapLocation.state} {mapLocation.zip}
                </p>
                <p className="text-gray-600">{mapLocation.country}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </BackgroundImageContainer>
  );
}
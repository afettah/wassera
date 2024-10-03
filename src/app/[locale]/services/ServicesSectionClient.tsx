"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
}

export default function ServicesSectionClient({
  servicesData,
  title,
}: {
  servicesData: Service[];
  title: string;
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section aria-labelledby="services-heading" className="relative">
      <h2
        id="services-heading"
        className="text-4xl font-semibold mb-12 text-center"
      >
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}

function ServiceCard({ icon, title, description, imageSrc }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <CardHeader className="relative z-10 -mt-16 bg-background/80 backdrop-blur-sm">
        <CardTitle className="flex items-center space-x-3 text-2xl">
          <div className="p-2 bg-primary text-primary-foreground rounded-full">
            {icon}
          </div>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

"use client";
import Image from "next/image";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Rocket, Heart, Zap, TrendingUp } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card"; // Adjust the import path as necessary
import Container from "@/app/components/container";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const valuesData = [
  {
    title: "Customer-Centricity",
    description:
      "Creating a seamless customer experience that goes beyond expectations, putting our clients at the heart of everything we do.",
    icon: <Users className="h-10 w-10" />,
  },
  {
    title: "Innovation",
    description:
      "Delivering innovative services by empowering our team to think big, embrace change, and push the boundaries of what's possible in finance.",
    icon: <Rocket className="h-10 w-10" />,
  },
  {
    title: "Social Impact",
    description:
      "Providing inclusive and affordable solutions across all beneficiary segments, ensuring financial services are accessible to everyone.",
    icon: <Heart className="h-10 w-10" />,
  },
  {
    title: "Agility",
    description:
      "Establishing our operating model by embracing an agile environment and fast-paced workplace, adapting quickly to market changes.",
    icon: <Zap className="h-10 w-10" />,
  },
  {
    title: "Growth",
    description:
      "Supporting Saudi Arabia's ambition to fuel growth in non-oil industries, contributing to a diverse and sustainable economy.",
    icon: <TrendingUp className="h-10 w-10" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ValuesObjectivesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <Container aria-labelledby="values-objectives-heading" className="relative">
      <Image
        src=""
        alt="Abstract shapes"
        width={600}
        height={600}
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10"
      />
      <div className="relative z-10">
        <h2
          id="values-objectives-heading"
          className="text-4xl font-semibold mb-6 text-center"
        >
          Our values
        </h2>
        <p className="text-center mb-12 text-lg max-w-3xl mx-auto">
          We define our priorities and objectives through our core values,
          shaped by our commitment to contributing to the Kingdom&apos;s
          transformation in line with Saudi Vision 2030.
        </p>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {valuesData.slice(0, 3).map((value, index) => (
              <motion.div
                ref={ref}
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ValueCard {...value} />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-44">
              {valuesData.slice(3).map((value, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.2 }}
                >
                  <ValueCard {...value} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

function ValueCard({ icon, title, description, className }: ValueCardProps) {
  return (
    <MagicCard
      className={`relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 ${className}`}
      gradientColor="#33cc66"
      gradientOpacity={0.3}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-xl">
          <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
            {icon}
          </div>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </CardContent>
    </MagicCard>
  );
}

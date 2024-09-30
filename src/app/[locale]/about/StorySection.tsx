"use client";
import Image from "next/image";
import Container from "../../components/container";
import { motion, useAnimation } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

function StorySection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const OUR_STORY = {
    heading: "Our Story",
    paragraphs: [
      "Founded in 2024, our FinTech company is driven by a mission to unlock the value of assets and provide innovative investment and savings services. Specializing in collateralized mortgage loans, we offer a user-friendly platform that empowers individuals and market participants to monetize locked capital and tap into untapped assets, enabling financial growth and stability.",
      "Inspired by Saudi Arabia's Vision 2030, we align our core strategy with the program's pillars, focusing on economic growth, financial sustainability, and social responsibility. Our guiding principles include enhancing customer satisfaction, fostering shareholder loyalty, and ensuring employee retention, all while promoting environmental sustainability and operational excellence.",
      "We believe in empowering citizens by providing them with the tools and opportunities to improve their lives, enabling suitable homeownership, and contributing to a healthier, wealthier society. Through strategic partnerships and a commitment to developing end-to-end, innovative solutions, we are transforming the digital economy and unlocking new potential across non-oil sectors.",
    ],
    image: {
      src: "/images/wassera-building.webp",
      alt: "Wassera office",
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Card className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.h2
                className="text-4xl font-bold mb-6 text-gray-800 leading-tight"
                variants={headingVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {OUR_STORY.heading}
              </motion.h2>
              {OUR_STORY.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-gray-600 leading-relaxed"
                  variants={paragraphVariants}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div
              className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl"
              variants={imageVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Image
                src={OUR_STORY.image.src}
                alt={OUR_STORY.image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Card>
  );
}

export default StorySection;
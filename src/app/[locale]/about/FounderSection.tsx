"use client"

import Image from "next/image"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

const foundersData = [
  {
    name: "Abdulelah Aloshayni",
    title: "Founder",
    description: "14 years of Technology and digital transformation expertise holding an executive MBA.",
    image: "/images/persons/person6.png"
  },
  {
    name: "Saleh AlGhamdi",
    title: "Co-Founder",
    description: "17 years of experience in information technology & communications infrastructure.",
    image: "/placeholder.svg"
  },
  {
    name: "Khalid Alzahrani",
    title: "Co-Founder",
    description: "18 years of diverted experiences in many industries with strategic planning, development, and transformation focus.",
    image: "/placeholder.svg"
  },
  {
    name: "Saud Alharbi",
    title: "Co-Founder",
    description: "17 years of IT experience with extensive knowledge of infrastructure & processes.",
    image: "/placeholder.svg"
  },
  {
    name: "Abdulrahman Alkhalifa",
    title: "Co-Founder",
    description: "16 years of experience in marketing and sales in both private and government sectors.",
    image: "/placeholder.svg"
  },
  {
    name: "Jubran Alshahrani",
    title: "Co-Founder",
    description: "15 years of experience in diversified experiences in information technology, shared services, excellence management, new companies building up, governance and transformation. Holding Executive MBA.",
    image: "/placeholder.svg"
  },
  {
    name: "Amjad Shwali",
    title: "Co-Founder",
    description: "16 years of experience, in banking, treasury, and Investment for government & semi-gov entities.",
    image: "/placeholder.svg"
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function FoundersSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div aria-labelledby="founders-heading" className="relative">
      <Image
        src="/placeholder.svg"
        alt="Abstract shapes"
        width={600}
        height={600}
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10"
      />
      <div className="relative z-10">
        <h2
          id="founders-heading"
          className="text-4xl font-semibold mb-6 text-center"
        >
          Our Founders
        </h2>
        <p className="text-center mb-12 text-lg max-w-3xl mx-auto">
          Meet the visionaries behind our company, bringing years of expertise and innovation to drive our mission forward.
        </p>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundersData.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FounderCard {...founder} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface FounderCardProps {
  image: string
  name: string
  title: string
  description: string
}

function FounderCard({ image, name, title, description }: FounderCardProps) {
  return (
    <MagicCard
      className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
      gradientColor="#33cc66"
      gradientOpacity={0.3}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader className="flex flex-col gap-3">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <div className="absolute inset-0 bg-primary transform rotate-45 scale-110"></div>
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        <CardTitle className="text-xl text-center">{name}</CardTitle>
        <p className="text-center text-primary font-medium">{title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
          {description}
        </p>
      </CardContent>
    </MagicCard>
  )
}
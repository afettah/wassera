'use client';

import Image from "next/image"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useScopedI18n } from '@/locales/client'

const foundersData = [
  {
    image: "/images/persons/person6.png"
  },
  {
    image: "/placeholder.svg"
  },
  {
    image: "/placeholder.svg"
  },
  {
    image: "/placeholder.svg"
  },
  {
    image: "/placeholder.svg"
  },
  {
    image: "/placeholder.svg"
  },
  {
    image: "/placeholder.svg"
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function FoundersSection() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const t = useScopedI18n('foundersSection')

  return (
    <div aria-labelledby="founders-heading" className="relative">
      <div className="relative z-10">
        <h2
          id="founders-heading"
          className="text-4xl font-semibold mb-6 text-center"
        >
          {t('title')}
        </h2>
        <p className="text-center mb-12 text-lg max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundersData.map((founder, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FounderCard
                image={founder.image}
                name={t(`founders.${index}.name` as keyof typeof t)}
                title={t(`founders.${index}.title` as keyof typeof t)}
                description={t(`founders.${index}.description` as keyof typeof t)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FounderCard({ image, name, title, description }: { image: string; name: string; title: string; description: string }) {
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
            <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} className="transition-transform duration-300 group-hover:scale-110" />{' '}
          </div>
        </div>
        <CardTitle className="text-xl text-center">{name}</CardTitle>
        <p className="text-center text-primary font-medium">{title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">{description}</p>
      </CardContent>
    </MagicCard>
  );
}

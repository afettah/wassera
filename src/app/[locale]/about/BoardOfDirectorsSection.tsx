"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useAnimation } from 'framer-motion'

type Director = {
  name: string
  image: string
}

// path of images public/images/persons

const directors: Director[] = [
  { name: 'Naif Al-Watbaan', image: '/images/persons/person1.png' },
  { name: 'Mohammed Al-Eisa', image: '/images/persons/person2.png' },
  { name: 'Abdullah Al-Shaikh', image: '/images/persons/person3.png' },
  { name: 'Mohammed Al-Malki', image: '/images/persons/person4.png' },
  { name: 'Abdulaziz Al Harbi', image: '/images/persons/person5.png' },
  { name: 'Bassam AlBassam', image: '/images/persons/person6.png' },
]

export default function BoardOfDirectorsSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section ref={ref} className="py-12 ">
      <div >
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
        >
          Board of Directors
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <motion.div 
              key={director.name} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                <Image
                  src={director.image}
                  alt={director.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{director.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
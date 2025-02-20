'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';

type Director = {
  name: string;
  image: string;
  arabic: string;
};

const directors: Director[] = [
  { name: 'Naif Al-Watbaan', image: '/images/team/Naif Al-Watbaan.png', arabic: 'نايف الوطبان' },
  { name: 'Mohammed Al-Eisa', image: '/images/team/Mohammed Al-Eisa.png', arabic: 'محمد العيسى' },
  { name: 'Abdullah Al-Shaikh', image: '/images/team/Abdullah Al-Shaikh.png', arabic: 'عبدالله الشيخ' },
  { name: 'Mohammed Al-Malki', image: '/images/team/Mohammed Al-Malki.png', arabic: 'محمد المالكي' },
  { name: 'Abdulaziz Al Harbi', image: '/images/team/Abdulaziz Al Harbi.png', arabic: 'عبدالعزيز الحربي' },
  { name: 'Bassam AlBassam', image: '/images/team/Bassam AlBassam.png', arabic: 'بسام البسام' },
];

export default function BoardOfDirectorsSection() {
  const aboutT = useScopedI18n('about');
  const locale = useCurrentLocale();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section ref={ref} className="py-12 ">
      <div>
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
        >
          {aboutT('directors.title')}
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
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{locale === 'ar' ? director.arabic : director.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

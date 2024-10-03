'use client';
import Image from 'next/image';
import Container from '../components/container';
import CustomButton from '../components/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScopedI18n } from '@/locales/client';
import RegistrationForm from './RegistrationForm';

export default function OfferSection() {
  const { ref: inViewRef1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: inViewRef2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const leftToRightVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightToLeftVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const offertT = useScopedI18n('home.offers');
  const globalT = useScopedI18n('global');
  const offerCount = 6;

  return (
    <Container className="py-20 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          ref={inViewRef1}
          className="md:w-1/2 relative"
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
          variants={leftToRightVariants}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[#FFA500] opacity-20 transform -skew-x-12 w-full h-full"></div>{' '}
          <Image src="/images/offers.png" alt="Person using a laptop" width={400} height={400} className="relative z-10 w-full h-auto" />
        </motion.div>

        <motion.div
          ref={inViewRef2}
          className="md:w-1/2 mt-6 md:mt-0"
          initial="hidden"
          animate={inView2 ? 'visible' : 'hidden'}
          variants={rightToLeftVariants}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl md:text-4xl">{offertT('title.line1')}</h3>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary ">Waseera</span> <span className="text-gray-800">{offertT('title.line2')}</span>
          </h2>
          <ul className="space-y-3 md:pl-20 mb-6 text-base md:text-lg">
            {' '}
            {Array.from({ length: offerCount }).map((_, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary mr-2 ml-2">■</span>
                {/* @ts-expect-error: Dynamic key based on index, which TypeScript cannot infer */}
                <p>{offertT(`list.${i}`)}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <RegistrationForm>
          <CustomButton type="primary" variant="default" className="px-4 py-2 text-sm">
            {globalT('getStarted')}
          </CustomButton>
        </RegistrationForm>
      </div>
    </Container>
  );
}

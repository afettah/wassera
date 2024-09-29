'use client';
import Image from 'next/image';
import Container from '../components/container';
import CustomButton from '../components/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  return (
    <Container className="py-20 relative overflow-hidden">
      {' '}
      {/* Added overflow-hidden */}
      <div className="flex flex-col md:flex-row items-center">
        {/* first item to animate */}
        <motion.div
          ref={inViewRef1}
          className="md:w-1/2 relative"
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
          variants={leftToRightVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-[#FFA500] opacity-20 transform -skew-x-12 w-full h-full"></div>{' '}
          {/* Made sure background spans full width/height */}
          <Image src="/images/offers.png" alt="Person using a laptop" width={400} height={400} className="relative z-10 w-full h-auto" />
        </motion.div>

        {/* second item to animate */}
        <motion.div
          ref={inViewRef2}
          className="md:w-1/3 mt-6 md:mt-0"
          initial="hidden"
          animate={inView2 ? 'visible' : 'hidden'}
          variants={rightToLeftVariants}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-4xl"> Do you know about</h3>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary ">Waseera</span> <span className="text-gray-800">Offers !?</span>
          </h2>
          <ul className="space-y-3 md:pl-20 mb-6 text-base md:text-lg">
            {' '}
            {/* Reduced padding on small screens */}
            <li className="flex items-start">
              <span className="text-primary mr-2">■</span>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">■</span>
              <p className="text-gray-600">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">■</span>
              <p className="text-gray-600">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
          </ul>
        </motion.div>
      </div>
      <CustomButton className="bg-primary font-bold absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20">
        {' '}
        {/* Added z-index to ensure visibility */}
        Learn More
      </CustomButton>
    </Container>
  );
}

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Container from '../components/container';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScopedI18n } from '@/locales/client';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function InfoSection() {
  const infoT = useScopedI18n('home.info');
  const cards = [
    {
      title: infoT('wassera.title'),
      description: infoT('wassera.description'),
      link: '/about',
      image: '/images/wassera.svg',
    },
    {
      title: infoT('mission.title'),
      description: infoT('mission.description'),
      link: '/about',
      image: '/images/mission.svg',
    },
    {
      title: infoT('vision.title'),
      description: infoT('vision.description'),
      link: '/about',
      image: '/images/vision.svg',
    },
  ];
  return (
    <div className="w-full bg-gray-100 ">
      <Container className="info-section py-20 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <CardWithAnimation key={card.title} card={card} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function CardWithAnimation({ card }: { card: (typeof cards)[0] }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const globalT = useScopedI18n('global');

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <Card className="flex flex-col h-96 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] text-center">
        <CardHeader className="flex items-center justify-center p-2">
          <Image src={card.image} alt={card.title} width={170} height={170} className="w-full h-32 object-contain" />
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <div>
            <CardTitle className="text-xl mb-4 text-center">{card.title}</CardTitle>
            <p className="text-gray-700 text-base">{card.description}</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center mt-auto pb-0">
          <Button asChild className="w-full sm:w-auto text-xl bg-primary/10 text-primary hover:bg-primary/20">
            <div className="flex gap-3 justify-center items-center">
              <ArrowRight width={20} />
              <Link href={card.link}>{globalT('learnMore')}</Link>
            </div>
          </Button>
          <div className="mt-4 border-b-2 border-primary w-3/4"></div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

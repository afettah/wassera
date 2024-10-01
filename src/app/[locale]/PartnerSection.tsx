'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '../components/container';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import Locale from 'intl-locale-textinfo-polyfill';

const files = [
  'Zoho.webp',
  'bankers-lab.jpg',
  'darco.jpg',
  'jeel.png',
  'KAUST.png',
  'Knowledge-Net.jpg',
  'KSU.jpg',
  'menassat logo.png',
  'Microsoft.jpg',
  'misk.jpg',
  'NKB.jpg',
  'plugandplay.jpg',
  'ryad-bank.png',
  'SAB.png',
  'SADU.jpg',
  'sarwa.jpg',
  'Singleview.png',
  'siolla.png',
  'STC.jpg',
  'tabadul.jpg',
  'TAQADAM.webp',
  'WAED.jpg',
];

const TrustedByLogos = () => {
  const locale = useCurrentLocale();
  const { direction: dir } = new Locale(locale).textInfo;

  return (
    <motion.div
      className="flex space-x-8 w-[200%]"
      animate={{ x: dir === 'ltr' ? '-100%' : '100%' }}
      transition={{
        ease: 'linear',
        duration: 30,
        repeat: Infinity,
      }}
    >
      {files.map((file, index) => (
        <motion.div key={index} className="h-auto w-32 sm:w-48 lg:w-56 flex-shrink-0" whileHover={{ scale: 1.4 }}>
          <Image
            src={`/images/partnerships/${file}`}
            alt={`Partner logo ${index}`}
            width={300}
            height={100}
            className="object-contain w-full h-full"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function WaseeraPartnerships() {
  const parternshipsT = useScopedI18n('home.partnerships');
  return (
    <>
      <Container>
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center mb-4">
            <span className="text-primary">Waseera</span> {parternshipsT('title')}
          </h2>
          <p className="text-center text-secondary-foreground text-base sm:text-lg lg:text-xl my-4">{parternshipsT('description')} </p>
        </div>
      </Container>

      <div className="w-full overflow-hidden">
        <TrustedByLogos />
      </div>
    </>
  );
}

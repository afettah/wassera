'use client';

import Image from 'next/image';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MagicCard } from '@/components/ui/magic-card';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCurrentLocale, useScopedI18n } from '@/locales/client';

type Founder = {
  name: {
    en: string;
    ar: string;
  };
  position: 'founder' | 'coFounder';
  description: {
    en: string;
    ar: string;
  };
  image: string;
};

const foundersData: Founder[] = [
  {
    name: {
      en: 'Abdulelah Aloshayni',
      ar: 'عبدالإله العشيني',
    },
    position: 'founder',
    description: {
      en: '14 years of Technology and digital transformation expertise holding an executive MBA.',
      ar: '١٨ عاماً من الخبرة في التقنية والتحول الرقمي. حاصل على الماجستير في إدارة الأعمال التنفيذية.',
    },
    image: '/images/team/Abdulelah Aloshayni.png',
  },
  {
    name: { en: 'Saleh AlGhamdi', ar: 'صالح الغامدي' },
    position: 'coFounder',
    description: {
      en: '17 years of experience in information technology & communications infrastructure.',
      ar: '١٨ عاماً من الخبرة في تقنية المعلومات والبنية التحتية للاتصالات.',
    },
    image: '/images/team/Saleh AlGhamdi.png',
  },
  {
    name: { en: 'Khalid Alzahrani', ar: 'خالد الزهراني' },
    position: 'coFounder',
    description: {
      en: '18 years of diverted experiences in many industries with strategic planning,  development, and transformation focus.',
      ar: '١٨ عاماً من الخبرات المتنوعة في العديد من الصناعات، مع التركيز على التخطيط الاستراتيجي والتطوير والتحول.',
    },
    image: '/images/team/Khalid Alzahrani.png',
  },
  {
    name: { en: 'Saud Alharbi', ar: 'سعود الحربي' },
    position: 'coFounder',
    description: {
      en: '17 years of IT experience with extensive knowledge of infrastructure & processes.',
      ar: '١٨ عاماً من الخبرة في تقنية المعلومات مع معرفة واسعة بالبنية التحتية والعمليات.',
    },
    image: '/images/team/Saud Alharbi.png',
  },
  {
    name: { en: 'Abdulrahman Alkhalifa', ar: 'عبدالرحمن الخليفة' },
    position: 'coFounder',
    description: {
      en: '16 years of experience in marketing and sales in both private and government sectors.',
      ar: '١٨ عاماً من الخبرة في التسويق والمبيعات في كل من القطاعين الخاص والحكومي.',
    },
    image: '/images/team/Abdulrahman Alkhalifa.png',
  },
  {
    name: { en: 'Jubran Alshahrani', ar: 'جبران الشهراني' },
    position: 'coFounder',
    description: {
      en: '15 years of experience in diversified experiences in information technology, shared services, excellence management, new companies building up, governance and transformation. Holding Executive MBA.',
      ar: '١٨ عاماً من الخبرة في مجالات متنوعة تجارب في إدارة الشركات، التكنولوجيا، الخدمات المشتركة، والتحول. عقد ماجستير في إدارة الأعمال التنفيذية.',
    },
    image: '/images/team/Jubran Alshahrani.png',
  },
  {
    name: { en: 'Amjad Shwali', ar: 'أمجد شويل' },
    position: 'coFounder',
    description: {
      en: '16 years of experience, in banking, treasury, and Investment for government & semi-gov entities.',
      ar: '١٨ عاماً من الخبرة في مجال المصرفية والخزينة والاستثمار في العديد من الجهات الحكومية وشبه الحكومية.',
    },
    image: '/images/team/Amjad Shwail.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function FoundersSection() {
  const aboutT = useScopedI18n('about');
  const locale = useCurrentLocale();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div aria-labelledby="founders-heading" className="relative">
      <div className="relative z-10">
        <h2 id="founders-heading" className="text-4xl font-semibold mb-6 text-center">
          {aboutT('founders.title')}
        </h2>
        <p className="text-center mb-12 text-lg max-w-3xl mx-auto">{aboutT('founders.description')}</p>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundersData.map((founder, index) => (
            <motion.div
              key={founder.name.en}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <FounderCard
                image={founder.image}
                name={founder.name[locale]}
                title={aboutT(`founders.positions.${founder.position}`)}
                description={founder.description[locale]}
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

'use client';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MagicCard } from '@/components/ui/magic-card'; // Adjust the import path as necessary
import Container from '@/app/components/container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ValuesObjectivesSectionClientProps {
  heading: string;
  description: string;
  valuesData: Value[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ValuesObjectivesSectionClient({ heading, description, valuesData }: ValuesObjectivesSectionClientProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Container aria-labelledby="values-objectives-heading" className="relative">
      <div className="relative z-10">
        <h2 id="values-objectives-heading" className="text-4xl font-semibold mb-6 text-center">
          {heading}
        </h2>
        <p className="text-center mb-12 text-lg max-w-3xl mx-auto">{description}</p>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {valuesData.slice(0, 3).map((value, index) => (
              <motion.div
                ref={ref}
                key={index}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ValueCard {...value} />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-44">
              {valuesData.slice(3).map((value, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.2 }}
                >
                  <ValueCard {...value} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

function ValueCard({ icon, title, description, className }: ValueCardProps) {
  return (
    <MagicCard
      className={`relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 ${className}`}
      gradientColor="#33cc66"
      gradientOpacity={0.3}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 text-xl">
          <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">{icon}</div>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{description}</p>
      </CardContent>
    </MagicCard>
  );
}

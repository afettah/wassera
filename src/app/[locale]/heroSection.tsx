import Image from 'next/image';
import Container from '../components/container';
import { getScopedI18n } from '@/locales/server';
import CustomButton from '../components/button';

export default async function HeroSection() {
  const heroT = await getScopedI18n('hero');
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 xl:py-28">
      <Container>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col items-center justify-center space-y-12 text-center lg:items-start lg:text-justify">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{heroT('title')}</h1>
                <p className="max-w-[600px] md:text-xl mx-auto lg:mx-0">{heroT('description')}</p>
              </div>
              <div className="flex flex-col gap-2 w-full justify-center items-center min-[400px]:flex-row lg:justify-start">
                <CustomButton className="px-4 py-2 text-sm">{heroT('button.started')}</CustomButton>
                <CustomButton variant="orange" className="px-4 py-2 text-sm">
                  {heroT('button.more')}
                </CustomButton>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="800"
              src="/images/hero.png"
              width="500"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

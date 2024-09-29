import Image from 'next/image';
import Container from '../components/container';
import { getScopedI18n } from '@/locales/server';
import Link from 'next/link';
import CustomButton from '../components/button';
import Button from '../components/button';

export default async function HeroSection() {
  const heroT = await getScopedI18n('hero');
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <Container>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{heroT('title')}</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">{heroT('description')}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button>{heroT('button.started')}</Button>
                <Button variant="orange">{heroT('button.more')}</Button>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="550"
              src="/images/hero.png"
              width="550"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

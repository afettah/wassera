import Container from '../components/container';
import { getScopedI18n } from '@/locales/server';
import CustomButton from '../components/button';
import HeroVideoPlayer from './HeroVideoPlayer';
import RegistrationForm from './RegistrationForm';

export default async function HeroSection() {
  const heroT = await getScopedI18n('home.hero');

  return (
    <section className="w-full min-h-screen py-12 md:py-16 lg:py-20 xl:py-28">
      <Container>
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col items-center justify-center space-y-12 text-center lg:items-start lg:text-start">
              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{heroT('title')}</h1>
                <p className="max-w-[600px] md:text-xl mx-auto lg:mx-0">{heroT('description')}</p>
              </div>
              <div className="flex flex-col gap-2 w-full justify-center items-center min-[400px]:flex-row lg:justify-start">
                <RegistrationForm>
                  <CustomButton type="primary" variant="default" className="px-4 py-2 text-sm">
                    {heroT('button.started')}
                  </CustomButton>
                </RegistrationForm>

                <a href="/about">
                  <CustomButton type="orange" variant="default" className="px-4 py-2 text-sm">
                    {heroT('button.more')}
                  </CustomButton>
                </a>
              </div>
            </div>
            <HeroVideoPlayer />
          </div>
        </div>
      </Container>
    </section>
  );
}

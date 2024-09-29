import Image from 'next/image';
import Container from '../components/container';
import CustomButton from '../components/button';

export default function HeroSection() {
  return (
    <section className="py-8 md:py-8">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-2/5 flex flex-col space-y-8 lg:space-y-12 my-8 lg:my-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center lg:text-left text-gray-700">
              Let&apos;s start something big together.
            </h1>
            <div className="flex justify-center lg:justify-start">
              <CustomButton>Learn More</CustomButton>
            </div>
          </div>

          <div className="w-full lg:w-3/5 flex justify-center lg:justify-end">
            <Image src="/images/hero.png" alt="Hero Image" width={1000} height={1000} className="max-w-full h-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}

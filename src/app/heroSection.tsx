import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-background-secondary">
      <div className="max-w-7xl mx-auto pt-4 md:pt-8 px-4 sm:px-6 lg:px-10 xl:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-2/5 flex flex-col space-y-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold lg:text-left text-wrap">Let&apos;s start something big together.</h1>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-primary px-6 py-3 text-white uppercase w-full sm:w-auto ">Learn more</button>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <Image src="/images/hero.png" alt="Hero Image" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </section>
  );
}

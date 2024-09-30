import Image from 'next/image';
import Container from '../../components/container';

function StorySection() {
  const OUR_STORY = {
    heading: 'Our Story',
    paragraphs: [
      'Founded in 2024, our FinTech company is driven by a mission to unlock the value of assets and provide innovative investment and savings services. Specializing in collateralized mortgage loans, we offer a user-friendly platform that empowers individuals and market participants to monetize locked capital and tap into untapped assets, enabling financial growth and stability.',
      "Inspired by Saudi Arabia's Vision 2030, we align our core strategy with the program's pillars, focusing on economic growth, financial sustainability, and social responsibility. Our guiding principles include enhancing customer satisfaction, fostering shareholder loyalty, and ensuring employee retention, all while promoting environmental sustainability and operational excellence.",
      'We believe in empowering citizens by providing them with the tools and opportunities to improve their lives, enabling suitable homeownership, and contributing to a healthier, wealthier society. Through strategic partnerships and a commitment to developing end-to-end, innovative solutions, we are transforming the digital economy and unlocking new potential across non-oil sectors.',
    ],
    image: {
      src: '/images/wassera-building.webp',
      alt: 'Wassera office',
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{OUR_STORY.heading}</h2>
              {OUR_STORY.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative h-[400px] w-full">
              <Image src={OUR_STORY.image.src} alt={OUR_STORY.image.alt} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default StorySection;

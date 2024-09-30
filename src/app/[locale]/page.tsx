import BackgroundImageContainer from '../components/backgroundImageContainer';
import HeroSection from './heroSection';
import InfoSection from './infoSection';
import OfferSection from './OfferSection';
import WaseeraPartnerships from './PartnerSection';
import Statistics from './statistics';

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <BackgroundImageContainer>
        <HeroSection />
      </BackgroundImageContainer>
      <InfoSection />
      <OfferSection />
      <Statistics />
      <WaseeraPartnerships />
    </div>
  );
}

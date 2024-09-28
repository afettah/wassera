import SubContainer from "./components/sub-container";
import Footer from "./Footer";
import HeroSection from "./heroSection";
import InfoSection from "./infoSection";
import OfferSection from "./OfferSection";
import WaseeraPartnerships from "./PartnerSection";
import Statistics from "./statistics";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SubContainer>
        <HeroSection />
      </SubContainer>
      <InfoSection />
      <OfferSection />
      <Statistics />
      <WaseeraPartnerships />
      <Footer />
    </div>
  );
}

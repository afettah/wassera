import SubContainer from "./components/sub-container";
import HeroSection from "./heroSection";
import InfoSection from "./infoSection";
import OfferSection from "./OfferSection";
import Statistics from "./statistics";
import TopBar from "./topBar";
import TopMenu from "./topMenu";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SubContainer>
        <TopBar />
        <TopMenu />
        <HeroSection />
      </SubContainer>
      <InfoSection />
      <OfferSection />
      <Statistics />
    </div>
  );
}

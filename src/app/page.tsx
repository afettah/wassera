import SubContainer from "./components/sub-container";
import HeroSection from "./heroSection";
import InfoSection from "./infoSection";
import OfferSerction from "./offerSection";
import TopBar from "./topBar";
import TopMenu from "./topMenu";

export default function Home() {
  return (
    <>
      <SubContainer>
        <TopBar />
        <TopMenu />
        <HeroSection />
      </SubContainer>

      <InfoSection />
      <OfferSerction />
    </>
  );
}

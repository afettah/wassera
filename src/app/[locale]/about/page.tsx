import Container from "../../components/container";
import BackgroundImageContainer from "../../components/backgroundImageContainer";
import Header from "./header";
import ValuesObjectivesSection from "./ValuesObjectivesSection";
import ServicesSection from "./ServicesSection";

export default function AboutPage() {
  return (
    <BackgroundImageContainer className="overflow-hidden">
      <Container className="min-h-screen">
        <div className="container mx-auto px-4 space-y-24">
          <Header />
          <ValuesObjectivesSection />
          <ServicesSection />
        </div>
      </Container>
    </BackgroundImageContainer>
  );
}
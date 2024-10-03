import Container from "../../components/container";
import BackgroundImageContainer from "../../components/backgroundImageContainer";
import Header from "./header";
import BoardOfDirectorsSection from "./BoardOfDirectorsSection";
import FoundersSection from "./FounderSection";
import StorySectionServer from "./Story/StorySectionServer";
import ValuesObjectivesSectionServer from "./Values/ValuesObjectivesSectionServer";

export default function AboutPage() {
  return (
    <BackgroundImageContainer className="overflow-hidden">
      <Container className="min-h-screen">
        <div className="container mx-auto space-y-24">
          <Header />
          <StorySectionServer />
          <ValuesObjectivesSectionServer />
          <BoardOfDirectorsSection />
          <FoundersSection />
        </div>
      </Container>
    </BackgroundImageContainer>
  );
}

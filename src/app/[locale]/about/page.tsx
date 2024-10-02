import Container from "../../components/container";
import BackgroundImageContainer from "../../components/backgroundImageContainer";
import Header from "./header";
import ValuesObjectivesSection from "./ValuesObjectivesSection";
import StorySection from "./StorySection";
import BoardOfDirectorsSection from "./BoardOfDirectorsSection";
import FoundersSection from "./FounderSection";

export default function AboutPage() {
  return (
    <BackgroundImageContainer className="overflow-hidden">
      <Container className="min-h-screen">
        <div className="container mx-auto space-y-24">
          <Header />
          <StorySection />
          <ValuesObjectivesSection />
          <BoardOfDirectorsSection />
          <FoundersSection />
        </div>
      </Container>
    </BackgroundImageContainer>
  );
}

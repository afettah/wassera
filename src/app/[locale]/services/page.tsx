import BackgroundImageContainer from "@/app/components/backgroundImageContainer";
import Container from "@/app/components/container";
import React from "react";
import ServicesSection from "../about/ServicesSection";

const Services = () => {
  return (
    <BackgroundImageContainer>
      <Container>
        <ServicesSection />
      </Container>
    </BackgroundImageContainer>
  );
};

export default Services;

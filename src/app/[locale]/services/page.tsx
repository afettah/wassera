import BackgroundImageContainer from "@/app/components/backgroundImageContainer";
import Container from "@/app/components/container";
import React from "react";
import ServicesSectionServer from "./ServicesSectionServer";

const Services = () => {
  return (
    <BackgroundImageContainer>
      <Container>
        <ServicesSectionServer />
      </Container>
    </BackgroundImageContainer>
  );
};

export default Services;

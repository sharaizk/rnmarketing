import React from "react";
import {
  HomeContainer,
  LeftSection,
  HeroContainer,
  RightSection,
  HeroTitle,
  HeroDescription,
  HeroImg,
  Section2Container,
  Image,
  Button,
  Section3Container,
  ImgStyle,
  CollaboratorsContainer,
  Collaboratos,
} from "./Elements";
import ReactHTMLParser from "react-html-parser";
import heroImg from "assets/heroImg.jpg";
import TeamImg from "assets/teamWork.png";

import logo1 from "assets/companies/logo1.png";
import logo2 from "assets/companies/logo2.png";
import logo3 from "assets/companies/logo3.png";
import logo4 from "assets/companies/logo4.png";
import logo5 from "assets/companies/logo5.png";
import logo6 from "assets/companies/logo6.png";
import logo12 from "assets/companies/logo12.png";
import logo8 from "assets/companies/logo8.png";
import logo9 from "assets/companies/logo9.png";
import logo10 from "assets/companies/logo10.png";
import logo11 from "assets/companies/logo11.png";
import logo13 from "assets/companies/logo13.png";
import logo14 from "assets/companies/logo14.png";
import logo15 from "assets/companies/logo15.png";
import logo16 from "assets/companies/logo16.png";

const Home = () => {
  const description =
    "Business Utilities Services Simplified With Only a Few Clicks. We are a group of specialists whom each brings a variety of abilities and knowledge to your business needs. Your One-Stop-Shop for business savings.";
  return (
    <HomeContainer>
      <HeroContainer>
        <LeftSection>
          <HeroTitle>
            Business Utilities Services Simplified With Only a{" "}
            <span>Few Clicks</span>
          </HeroTitle>
          <HeroDescription>{ReactHTMLParser(description)}</HeroDescription>
        </LeftSection>
        <RightSection>
          <HeroImg src={heroImg} alt="" />
        </RightSection>
      </HeroContainer>
      <Section2Container>
        <LeftSection flex={"0.4"}>
          <Image src={TeamImg} alt="Team Image" />
        </LeftSection>
        <RightSection
          flex="0.5"
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
        >
          <HeroTitle>About</HeroTitle>
          <HeroDescription>
            Our company is dedicated to providing top-notch customer care with
            the goal of establishing long-term relationships with all UK
            suppliers while passing advantages through to the consumer by
            providing cost-effective energy solutions that satisfy their
            business demands. Our committed team of experts constantly monitors
            the market to improve efficiency and customer service.
          </HeroDescription>
          <Button to="/about">Learn More About Us</Button>
        </RightSection>
      </Section2Container>
      <Section3Container>
        <LeftSection flex="0.3">
          <HeroTitle>Our Collaborators</HeroTitle>
        </LeftSection>
        <RightSection flex="0.3">
          <CollaboratorsContainer>
            <Collaboratos>
              <ImgStyle src={logo1} $size={"10%"} alt="client logo" />
              <ImgStyle src={logo2} $size={"15%"} alt="client logo" />
              <ImgStyle src={logo3} $size={"12%"} alt="client logo" />
              <ImgStyle src={logo4} $size={"10%"} alt="client logo" />
            </Collaboratos>
            <Collaboratos>
              <ImgStyle src={logo5} $size={"20%"} alt="client logo" />
              <ImgStyle src={logo6} $size={"10%"} alt="client logo" />
              <ImgStyle src={logo8} $size={"15%"} alt="client logo" />
              <ImgStyle src={logo9} $size={"15%"} alt="client logo" />
            </Collaboratos>
            <Collaboratos>
              <ImgStyle src={logo10} $size={"15%"} alt="client logo" />
              <ImgStyle src={logo11} $size={"15%"} alt="client logo" />
              <ImgStyle src={logo12} $size={"15%"} alt="client logo" />
              <ImgStyle src={logo13} $size={"7%"} alt="client logo" />
            </Collaboratos>
            <Collaboratos>
              <ImgStyle src={logo14} $size={"10%"} alt="client logo" />
              <ImgStyle src={logo15} $size={"5%"} alt="client logo" />
              <ImgStyle src={logo16}  $size={"10%"}alt="client logo" />
            </Collaboratos>
          </CollaboratorsContainer>
        </RightSection>
      </Section3Container>
    </HomeContainer>
  );
};

export default Home;

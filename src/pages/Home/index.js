import React from "react";
import {
  HomeContainer,
  LeftSection,
  HeroContainer,
  RightSection,
  HeroTitle,
  HeroDescription,
  HeroImg,
  Section2Container
} from "./Elements";
import ReactHTMLParser from "react-html-parser";
import heroImg from 'assets/heroImg.jpg'
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
          <HeroImg src={heroImg} alt=""/>
        </RightSection>
      </HeroContainer>
      <Section2Container>
        
      </Section2Container>
    </HomeContainer>
  );
};

export default Home;

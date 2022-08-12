import React from "react";
import {
  ContainerTitle,
  FooterContainer,
  LinksContainer,
  StyledLink,
  ContactLabel,
  SecondContainer,
  Logo,
} from "./Element";
import logo from "assets/logoSet4.png";

const Footer = () => {
  return (
    <FooterContainer>
      <SecondContainer>
        <LinksContainer>
          <Logo src={logo} alt="logo" />
          <ContactLabel>
            <span>All Rights Reserved</span>
          </ContactLabel>
        </LinksContainer>
        <LinksContainer>
          <ContainerTitle>Company</ContainerTitle>
          <StyledLink to="/">About Us</StyledLink>
          <StyledLink to="/">FAQs </StyledLink>
          <StyledLink to="/">Complaint Handling</StyledLink>
          <StyledLink to="/">FAQs</StyledLink>
        </LinksContainer>
        <LinksContainer>
          <ContainerTitle>Site Links</ContainerTitle>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/">About Us</StyledLink>
          <StyledLink to="/">Services</StyledLink>
          <StyledLink to="/">Complaints</StyledLink>
          <StyledLink to="/">Contact Us</StyledLink>
        </LinksContainer>
        <LinksContainer>
          <ContainerTitle>Contact Us</ContainerTitle>
          <ContactLabel>
            Address:
            <br />
            <span>Hello</span>
          </ContactLabel>
          <ContactLabel>
            Email:
            <br />
            <span>Hello</span>
          </ContactLabel>
          <ContactLabel>
            Phone:
            <br />
            <span>Hello</span>
          </ContactLabel>
        </LinksContainer>
      </SecondContainer>
    </FooterContainer>
  );
};

export default Footer;

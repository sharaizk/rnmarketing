import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bg from "assets/bg.svg";
export const HomeContainer = styled.section`
  height: 100%;
  /* width: 100vw; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden !important;

`;

export const HeroContainer = styled.div`
  height: 90vh;
  max-height: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.primary};

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }

  @media screen and (max-width: 380px) {
    height: 100vh;
  }
`;

export const LeftSection = styled.div`
  flex: ${(props) => props.flex || "0.5"};
  height: 100%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 860px) {
    text-align: center;
  }
`;

export const RightSection = styled.div`
  flex: 0.5;
  height: 90%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  position: relative;
  flex-direction: ${(props) => props.flexDirection || "row"};
  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

export const HeroTitle = styled.h2`
  color: ${(props) => props.theme.secondary};
  font-size: 3rem;
  margin-bottom: 1vh;
  & span {
    color: ${(props) => props.theme.tertiary};
  }

  @media screen and (max-width: 860px) {
    font-size: 4rem;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

export const HeroDescription = styled.p`
  color: ${(props) => props.theme.secondary};
  font-size: 1rem;
  line-height: 1.6rem;
  margin-bottom: 1vh;
`;

export const HeroImg = styled.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 15%;
  filter: grayscale(100%) drop-shadow(-37px -25px 0px #ec9d19);
  @media screen and (max-width: 768px) {
    left: 30%;
  }
  @media screen and (max-width: 480px) {
    left: 20%;
    height: auto;
    filter: grayscale(100%) drop-shadow(-30px -20px 0px #ec9d19);
  }
`;

export const Section2Container = styled.div`
  height: 100%;
  width: 100vw;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  padding: 0 15px;
  position: relative;
  /* margin: 0 auto; */
  z-index: 2;
  background-color: ${(props) => props.theme.tertiary};
  &::before {
    content: "";
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: -1;
    filter: blur(8px);
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    padding: 0 15px 1rem 15px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Button = styled(NavLink)`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 2.5% 5%;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  color: ${(props) => props.theme.primary};
  font-size: 1rem;
  text-decoration: none;
  margin-top: 5vh;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.secondary};
    background-color: ${(props) => props.theme.primary};
  }
`;

export const Section3Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  padding: 0 15px;
  position: relative;
  margin: 0 auto;
  z-index: 2;
  flex-direction: column;
  padding: 0 15px 1rem 15px;
`;

export const CollaboratorsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Collaboratos = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  /* &:not(:nth-child(3)){
    margin-right: 3vw;
  } */
`;

export const ImgStyle = styled.img`
  width: ${(props) => props.$size};
  height: auto;
  vertical-align: middle;
  &:not(:last-child) {
    margin-right: 3vw;
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => `30%`};
    &:not(:last-child) {
    margin-bottom: 3vh;
  }
  }
  /* margin-right: auto; */
  /* padding: 10%; */
`;

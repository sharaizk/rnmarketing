import styled from "styled-components";
export const HomeContainer = styled.section`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  min-height: 90vh;
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
`;

export const LeftSection = styled.div`
  flex: 0.5;
  height: 100%;
  padding: 8%;
  display: flex;
  justify-content: flex-start;
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
  justify-content: center;
  align-items: center;
  position: relative;
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
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  padding: 0 15px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.tertiary};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

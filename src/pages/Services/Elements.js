import styled from "styled-components";

export const ServicesContainer = styled.section`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  height: 60vh;
  width: 100vw;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  padding: 3rem 2rem;
  background-color: ${(props) => props.theme.tertiary};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    padding: 0 15px 1rem 15px;
  }
`;

export const Card = styled.div`
  flex: 0.3;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 24px;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  flex: 0.3;
  width: 20%;
  align-self: center;
`;

export const CardTitle = styled.h3`
  text-align: center;
  align-self: center;
  font-size: 1.6rem;
  margin-top: 2vh;
`;

export const CardDescriptio = styled.p`
  text-align: center;
  margin-top: 2vh;
`;
export const HeroTitle = styled.h2`
  color: ${(props) => props.theme.secondary};
  font-size: 3rem;
  margin-bottom: 4vh;
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

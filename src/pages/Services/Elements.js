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
  height: 50vh;
  width: 100vw;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
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
`;

export const CardImage = styled.img`
  flex: 0.3;
  width: 20%;
  align-self: center;
`;

export const CardTitle = styled.h3`
  text-align: center;
  align-self: center;
`;

export const CardDescriptio = styled.p`
  text-align: center;
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

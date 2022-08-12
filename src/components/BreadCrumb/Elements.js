import styled from "styled-components";
import { Link } from "react-router-dom";
export const BreadCrumbContainer = styled.div`
  height: 400px;
  width: 100%;
  margin-bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary};
  @media screen and (max-width: 991.98px) {
    height: 300px;
  }
`;

export const CurrentTitle = styled.h1`
  color: ${(props) => props.theme.secondary};
  text-transform: uppercase;
  font-size: 4.5rem;
  @media screen and (max-width: 1200px) {
    font-size: calc(1.575rem + 3.9vw);
  }
`;

export const Crumbs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.tertiary};
  font-weight: 500;
  font-size: 1rem;
`;

export const StyledText = styled.h6`
  font-size: 1rem;
  margin-left: 2vw;
  text-transform: capitalize;
`;


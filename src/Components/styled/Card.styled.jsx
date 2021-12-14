import { useEffect } from "react";
import styled from "styled-components";

import useCountries from "../../hooks/useCountries";
import { theme } from "../Theme";
import helpers from "../helpers";

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
`;

const StyledImgWrapper = styled.div`
  width: 328px;
  height: 200px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
`;

const StyledCardBottom = styled.div`
  padding: 3.5rem 3.1rem 4.4rem 3.1rem;
`;
const StyledTitle = styled.header`
  font-size: 2.2rem;
  font-weight: ${helpers.fontWeight.extraBold};
`;
const StyledList = styled.ul``;
const StyledListNode = styled.li`
  padding: 0.3rem 0;
  font-size: 1.75rem;
`;
const StyledSpan = styled.span`
  font-weight: ${helpers.fontWeight.semiBold};
`;

const Card = ({
  id,
  name,
  flag,
  population,
  region,
  subRegion,
  capital,
  domain,
  currency,
  language,
  borders,
}) => {
  const { countries, fetchData } = useCountries();

  return (
    <StyledWrapper>
      <StyledImgWrapper>
        <StyledImage src={flag} />
      </StyledImgWrapper>
      <StyledCardBottom>
        <StyledTitle>{name}</StyledTitle>
        <StyledList>
          <StyledListNode>
            <StyledSpan>Population:</StyledSpan> {population}
          </StyledListNode>
          <StyledListNode>
            <StyledSpan>Region:</StyledSpan> {region}
          </StyledListNode>
          <StyledListNode>
            <StyledSpan>Capital:</StyledSpan> {capital}
          </StyledListNode>
        </StyledList>
      </StyledCardBottom>
    </StyledWrapper>
  );
};

export default Card;

import { useEffect } from "react";
import styled from "styled-components";
import useCountries from "../../hooks/useCountries";

const StyledWrapper = styled.article``;
const StyledImage = styled.img``;
const StyledTitle = styled.header``;
const StyledList = styled.ul``;
const StyledListNode = styled.li``;

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
      <StyledImage src={flag} />
      <StyledTitle>
        <p>{name}</p>
      </StyledTitle>
      <StyledList>
        <StyledListNode>{population}</StyledListNode>
        <StyledListNode>{region}</StyledListNode>
        <StyledListNode>{capital}</StyledListNode>
      </StyledList>
    </StyledWrapper>
  );
};

export default Card;

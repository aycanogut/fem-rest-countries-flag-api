import React from 'react'
import styled from 'styled-components'

import useCountries from '../hooks/useCountries'

import helpers from '../styles/helpers'

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;

  @media only screen and ${helpers.device.md} {
    max-width: 264px;
  } ;
`

const StyledImgWrapper = styled.div`
  max-width: 100%;
  height: auto;
`

const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;

  @media only screen and ${helpers.device.sm} {
    width: 328px;
    height: 200px;
  }

  @media only screen and ${helpers.device.md} {
    width: 265px;
    height: 160px;
  }
`

const StyledCardBottom = styled.div`
  padding: 3rem 3rem 4.3rem 3rem;

  @media only screen and ${helpers.device.md} {
    padding: 2.3rem 2.4rem 3.1rem 2.5rem;
  } ;
`

const StyledTitle = styled.header`
  font-size: 2.2rem;
  font-weight: ${helpers.fontWeight.semiBold};
  padding: 0 0 0.7rem 0;

  @media only screen and ${helpers.device.md} {
    font-size: 1.7rem;
  }
`

const StyledList = styled.ul``

const StyledListNode = styled.li`
  font-size: 1.75rem;
  line-height: 2.8rem;
  font-weight: ${helpers.fontWeight.thin};

  @media only screen and ${helpers.device.md} {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
`

const StyledSpan = styled.span`
  font-weight: ${helpers.fontWeight.regular};
`

interface ICardProps {
  id: number
  name: string
  flag: string
  population: number
  region: string
  subRegion: string
  capital: string[]
  domain: string
  currency: string[]
  language: string
  borders: string[]
}

const Card: React.FC<ICardProps> = ({
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
  borders
}) => {
  const { countries, fetchData } = useCountries()

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
  )
}

export default Card

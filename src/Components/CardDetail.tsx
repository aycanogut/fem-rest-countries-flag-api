import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import useCountries from '../hooks/useCountries'
import helpers from '../styles/helpers'
import uid from '../utils/uid.js'
import { getCountryName } from '../utils/alpha3Countries'

import Button from './Button'

const StyledWrapper = styled.div`
  padding: 0 24px;

  @media only screen and ${helpers.device.sm} {
    padding: 0 56px;
  }
`

const StyledCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  cursor: pointer;

  @media only screen and ${helpers.device.sm} {
    max-width: 640px;
  }

  @media only screen and ${helpers.device.lg} {
    flex-direction: row;
    max-width: 1290px;
  }
`

const StyledImgWrapper = styled.div`
  max-width: 100%;
  height: auto;
`

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const StyledCardBottom = styled.div`
  padding: 3rem 3rem 4.3rem 3rem;

  @media only screen and ${helpers.device.md} {
    padding: 2.3rem 2.4rem 3.1rem 2.5rem;
  }
`

const StyledTitle = styled.header`
  font-size: 2.2rem;
  font-weight: ${helpers.fontWeight.semiBold};
  padding: 0 0 0.7rem 0;

  @media only screen and ${helpers.device.md} {
    font-size: 1.7rem;
  }
`

const StyledText = styled.header`
  font-size: 2rem;
  font-weight: ${helpers.fontWeight.regular};
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

const StyledButton = styled.div`
  padding: 1rem;
  box-shadow: 0 0 8px 4px ${({ theme }) => theme.shadow};
  margin: 0.4rem;
`

interface ICardDetailProps {
  setFilteredItem: Function
}

const CardDetail: React.FC<ICardDetailProps> = ({ setFilteredItem }) => {
  const { country, fetchCountry } = useCountries()
  const { id } = useParams()

  useEffect(() => {
    fetchCountry(id)
  }, [])

  const handleClick = (item) => {
    setFilteredItem(item)
  }

  return (
    <StyledWrapper>
      <Button onClick={() => handleClick('All')} />
      {country &&
        country.slice(0, 1).map((country) => (
          <StyledCardWrapper key={uid()}>
            <StyledImgWrapper>
              <StyledImage src={country.flag} />
            </StyledImgWrapper>
            <StyledCardBottom>
              <StyledTitle>{country.name}</StyledTitle>
              <StyledList>
                <StyledListNode>
                  <StyledSpan>Native Name:</StyledSpan> {country.nativeName}
                </StyledListNode>
                <StyledListNode>
                  <StyledSpan>Population:</StyledSpan> {country.population}
                </StyledListNode>
                <StyledListNode>
                  <StyledSpan>Region:</StyledSpan> {country.region}
                </StyledListNode>
                <StyledListNode>
                  <StyledSpan>Sub Region:</StyledSpan> {country.subregion || 'No Information'}
                </StyledListNode>
                <StyledListNode>
                  <StyledSpan>Capital:</StyledSpan> {country.capital}
                </StyledListNode>
              </StyledList>
              <StyledList>
                <StyledListNode>
                  <StyledSpan>Top Level Domain:</StyledSpan> {country.topLevelDomain}
                </StyledListNode>
                <StyledListNode>
                  <StyledSpan>Currencies:</StyledSpan> {country.currencies[0].code}
                </StyledListNode>
                <StyledListNode>
                  <StyledSpan>Languages:</StyledSpan>{' '}
                  {country.languages.map((lang) => lang.name).join(', ')}
                </StyledListNode>
              </StyledList>
              <StyledText>Border Countries:</StyledText>
              {country.borders ? (
                country.borders
                  .slice(0, 3)
                  .map((border) => (
                    <StyledButton key={uid()}>{getCountryName(border)}</StyledButton>
                  ))
              ) : (
                <div>No Info</div>
              )}
            </StyledCardBottom>
          </StyledCardWrapper>
        ))}
    </StyledWrapper>
  )
}

export default CardDetail

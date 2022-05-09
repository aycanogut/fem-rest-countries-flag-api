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
  margin: 0 auto;

  @media only screen and ${helpers.device.sm} {
    padding: 0 56px;
  }

  @media only screen and ${helpers.device.sm} {
    max-width: 640px;
  }

  @media only screen and ${helpers.device.md} {
    padding: 0;
  }

  @media only screen and ${helpers.device.lg} {
    padding: 0 8rem;
    max-width: 1290px;
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
    background-color: ${({ theme }) => theme.body};
    box-shadow: none;
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

  @media only screen and ${helpers.device.lg} {
    max-width: 560px;
  }
`

const StyledCardBottom = styled.div`
  padding: 3rem 3rem 4.3rem 3rem;

  @media only screen and ${helpers.device.md} {
    padding: 2.3rem 2.4rem 3.1rem 2.5rem;
  }

  @media only screen and ${helpers.device.lg} {
    padding: 4.5rem 0 0 12rem;
  }
`

const StyledTitle = styled.header`
  padding: 0 0 0.7rem 0;
  white-space: nowrap;
  font-size: 2.2rem;
  font-weight: ${helpers.fontWeight.semiBold};

  @media only screen and ${helpers.device.md} {
    font-size: 1.7rem;
  }

  @media only screen and ${helpers.device.lg} {
    font-size: 2.2rem;
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

const StyledBorders = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and ${helpers.device.lg} {
    align-items: center;
    flex-direction: row;
  }
`

const StyledButtons = styled.div`
  display: flex;
`

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 4.5rem 1rem 0 1rem;
  padding: 1rem;
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.shadow};

  @media only screen and ${helpers.device.md} {
    margin: 0 2rem 0 0;
    min-width: 100px;
  }
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
              <StyledBorders>
                <StyledText>Border Countries:</StyledText>
                <StyledButtons>
                  {country.borders ? (
                    country.borders
                      .slice(0, 3)
                      .map((border) => (
                        <StyledButton key={uid()}>{getCountryName(border)}</StyledButton>
                      ))
                  ) : (
                    <div>No Info</div>
                  )}
                </StyledButtons>
              </StyledBorders>
            </StyledCardBottom>
          </StyledCardWrapper>
        ))}
    </StyledWrapper>
  )
}

export default CardDetail

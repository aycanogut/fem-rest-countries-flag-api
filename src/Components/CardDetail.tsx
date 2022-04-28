import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import useCountries from '../hooks/useCountries'
import helpers from '../styles/helpers'
import uid from '../utils/uid.js'
import { getCountryName } from '../utils/alpha3Countries'

import Button from './Button'

const StyledWrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  cursor: pointer;

  @media only screen and ${helpers.device.md} {
    max-width: 264px;
  }
`

const StyledButton = styled.button`
  padding: 1rem 2rem;
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

const CardDetail = () => {
  const { country, fetchCountry } = useCountries()
  const { id } = useParams()

  useEffect(() => {
    fetchCountry(id)
  }, [])

  return (
    <>
      {country &&
        country.map((country) => (
          <StyledWrapper key={uid()}>
            {console.log(country)}
            <Button path="/">Button</Button>
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
                  .map((border) => <div key={uid()}>{getCountryName(border)}</div>)
              ) : (
                <div>No Info</div>
              )}
            </StyledCardBottom>
          </StyledWrapper>
        ))}
    </>
  )
}

export default CardDetail

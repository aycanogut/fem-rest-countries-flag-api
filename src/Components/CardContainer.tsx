import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import useCountries from '../hooks/useCountries'
import helpers from '../styles/helpers'
import uid from '../utils/uid.js'

import Card from './Card'

const StyledContainer = styled.main`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  row-gap: 5rem;
  width: 280px;
  margin: 14rem auto 8rem auto;
  background-color: ${({ theme }) => theme.body};

  @media only screen and ${helpers.device.sm} {
    row-gap: 5rem;
    width: 328px;
  }

  @media only screen and ${helpers.device.md} {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    width: 640px;
    margin: 7rem auto;
  }

  @media only screen and ${helpers.device.lg} {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5rem;
    width: 864px;
  }

  @media only screen and ${helpers.device.xl} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 7.5rem;
    column-gap: 7.5rem;
    width: 1280px;
  }
`

interface ICardContainerProps {
  searchTerm: string
  filteredItem: string
}

const CardContainer: React.FC<ICardContainerProps> = ({ searchTerm, filteredItem }) => {
  const { countries, fetchCountries } = useCountries()

  useEffect(() => {
    fetchCountries()
  }, [])

  return (
    <StyledContainer>
      {filteredItem === 'All'
        ? countries
            .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((country) => (
              <Link to={`/${country.name.toLowerCase()}`} key={uid()}>
                <Card
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            ))
        : countries &&
          countries
            .filter((item) => item.region.toLowerCase().includes(filteredItem.toLowerCase()))
            .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((country) => (
              <Link to={`/${country.name.toLowerCase()}`} key={uid()}>
                <Card
                  flag={country.flag}
                  name={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            ))}
    </StyledContainer>
  )
}

export default CardContainer

import React, { useEffect } from 'react'
import styled from 'styled-components'

import useCountries from '../hooks/useCountries'
import helpers from '../styles/helpers'
import uid from '../utils/uid.js'

import Card from './Card'

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5rem;
  max-width: 280px;
  margin: 50px auto; //! update
  background-color: ${({ theme }) => theme.body};

  @media only screen and ${helpers.device.sm} {
    row-gap: 5rem;
    max-width: 328px;
  }

  @media only screen and ${helpers.device.md} {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    max-width: 640px;
  }

  @media only screen and ${helpers.device.lg} {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5rem;
    max-width: 864px;
  }

  @media only screen and ${helpers.device.xl} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 7.5rem;
    column-gap: 7.5rem;
    max-width: 1280px;
  }
`

const CardContainer = () => {
  const { countries, fetchData } = useCountries()

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <StyledContainer>
      {countries &&
        countries.map((country) => (
          <Card
            key={uid()}
            flag={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            id={0}
            subRegion={''}
            domain={''}
            currency={[]}
            language={''}
            borders={[]}
          />
        ))}
    </StyledContainer>
  )
}

export default CardContainer
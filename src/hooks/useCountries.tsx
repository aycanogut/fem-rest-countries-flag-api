import { useState } from 'react'

const baseUrl = `https://restcountries.com/v2/`
const allCountries = `all`
const singleCountry = `name/`

const useCountries = () => {
  const [countries, setCountries] = useState<any[]>([])
  const [country, setCountry] = useState<any[]>([])

  const fetchCountries = async () => {
    const response = await fetch(baseUrl + allCountries)
    const data = await response.json()

    setCountries(data)
  }

  const fetchCountry = async (countryName) => {
    const response = await fetch(`${baseUrl}${singleCountry}${countryName}`)
    const data = await response.json()

    setCountry(data)
  }

  return { countries, country, fetchCountries, fetchCountry }
}

export default useCountries

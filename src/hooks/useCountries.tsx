import { useState } from 'react'

const baseUrl = `https://restcountries.com/v3.1/all`

const useCountries = () => {
  const [countries, setCountries] = useState([])

  const fetchData = async () => {
    const response = await fetch(baseUrl)
    const data = await response.json()

    setCountries(data)
  }

  return { countries, fetchData }
}

export default useCountries

import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  width: 248px;
  height: 60px;
`

const Select: React.FC = () => {
  return (
    <StyledSelect>
      <option value="">Filter by Region</option>
      <option value="value">Value</option>
      {/* map options */}
    </StyledSelect>
  )
}

export default Select

import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSelectWrapper = styled.div`
  width: 24.8rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 0.8px;
`

const StyledSelect = styled.div`
  margin: 2.4rem 0 0 3.2rem;
  padding: 2.4rem 0 0 0;
`

const DropDownListContainer = styled.div`
  position: relative;
  z-index: 99;
`

const DropDownList = styled.ul`
  margin: 2.6rem 0 0 0;
  padding: 2.4rem 0 2.4rem 3.2rem;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  border-radius: 0.6rem;
  cursor: pointer;
`

const ListItem = styled.li`
  list-style: none;
  margin: 1rem 0;
`

const Select: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggling = () => setIsOpen(!isOpen)

  return (
    <StyledSelectWrapper onClick={toggling}>
      <StyledSelect>Filter by Region</StyledSelect>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            <ListItem>Africa</ListItem>
            <ListItem>America</ListItem>
            <ListItem>Asia</ListItem>
            <ListItem>Europe</ListItem>
            <ListItem>Oceania</ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </StyledSelectWrapper>
  )
}

export default Select

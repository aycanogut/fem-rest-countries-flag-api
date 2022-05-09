import React, { useState } from 'react'
import styled from 'styled-components'

import helpers from '../styles/helpers'

const StyledSelectWrapper = styled.div`
  width: 24.8rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 0 8px 2px ${({ theme }) => theme.shadow};
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 0.8px;
`

const StyledSelect = styled.div`
  display: flex;
  margin: 2.4rem 0 2.4rem 3.2rem;
`

const StyledIcon = styled.svg`
  width: 12px;
  height: auto;
  margin: 0 2rem 0 auto;
  fill: ${({ theme }) => theme.icon};
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

interface ISelectProps {
  setFilteredItem: Function
}

const Select: React.FC<ISelectProps> = ({ setFilteredItem }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggling = () => setIsOpen(!isOpen)

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All']

  const handleClick = (item) => {
    setFilteredItem(item)
  }

  return (
    <StyledSelectWrapper onClick={toggling}>
      <StyledSelect>
        <span>Filter by Region</span>
        <StyledIcon
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 330 330">
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
              c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
              s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </StyledIcon>
      </StyledSelect>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {regions.map((region) => (
              <ListItem onClick={() => handleClick(region)} key={region}>
                {region}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </StyledSelectWrapper>
  )
}

export default Select

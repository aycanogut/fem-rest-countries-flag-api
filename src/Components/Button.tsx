import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  padding: 0.6rem 1.6rem;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0 0 8px 4px ${({ theme }) => theme.shadow};
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem; ;
`

const StyledIcon = styled.svg`
  fill: ${({ theme }) => theme.text};
  width: 42px;
  height: 32px;
  padding: 0 2rem 0 0;
`

const StyledText = styled.span`
  color: ${({ theme }) => theme.text};
`

interface IButtonProps {
  onClick: (() => void | undefined) | undefined
}

const Button: React.FC<IButtonProps> = ({ onClick }) => {
  return (
    <Link to="/" onClick={onClick}>
      <StyledButton>
        <StyledIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title />
          <g data-name="Layer 2" id="Layer_2">
            <path d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z" />
          </g>
        </StyledIcon>
        <StyledText>Back</StyledText>
      </StyledButton>
    </Link>
  )
}

export default Button

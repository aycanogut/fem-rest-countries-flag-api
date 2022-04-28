import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled.span`
  padding: 1rem 2rem;
`

interface IButtonProps {
  children: ReactNode
  path: string
}

const Button: React.FC<IButtonProps> = ({ children, path }) => {
  return (
    <Link to={path}>
      <StyledButton>{children}</StyledButton>
    </Link>
  )
}

export default Button

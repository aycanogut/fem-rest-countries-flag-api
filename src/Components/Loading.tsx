import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Loading = ({ type, color }) => {
  return (
    <StyledLoading>
      <ReactLoading type={type} color={color} height={200} width={200} />
    </StyledLoading>
  )
}

export default Loading

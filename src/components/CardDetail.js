import React from 'react'
import styled from 'styled-components'
import CardDetailItem from './CardDetailItem'

const Container = styled.div`
height: 100vh;
padding: 2rem 1rem;
display: flex;
justify-content: center;
align-items: start;
background: linear-gradient(
    to bottom right,
    rgba(31, 36, 39, 0.9),
    rgba(31, 36, 39, 1)
  );
`

const CardDetail = ({infoBrews}) => {
  return (
    <Container>
        <CardDetailItem infoBrews={infoBrews}/>
    </Container>
  )
}

export default CardDetail
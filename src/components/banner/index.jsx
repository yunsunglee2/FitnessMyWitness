import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color:red;
`
const Media = styled.div`
  
`
const Title = styled.span`
  color: #fff;
  font-size: 2rem;
`
const Subtitle = styled.span`
  color: #fff;
  font-size: 1rem;
`

export const Banner = () => {
  return (
    <div className='banner'>
      <Wrapper>
        <Media />
        <Title>lulu lemon24ss</Title>
        <Subtitle>24ss new arrival</Subtitle>
      </Wrapper>
    </div>
  )
}
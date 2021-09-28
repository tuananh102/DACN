import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'

function Home() {
  return (
    <Container>
      <ImgSlider />

      <div> 
        4:04:24
      </div>


      <Viewers />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before{
    background-image: url('/images/home-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    content: "";
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`
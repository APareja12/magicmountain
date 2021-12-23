import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Hero = () => {
    return (
      <HeroContainer>
          <HeroBg>
              <VideoBg src="" type="video/mp4" />
          </HeroBg>
          <HeroContent>
            <HeroItems>
               <HeroH1>Magic Retreats</HeroH1> 
               <HeroP>Enter your dreams</HeroP>
               <Button>Book Now</Button>
            </HeroItems>
          </HeroContent>
      </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #fff;
`

const HeroBg = styled.div``

const VideoBg = styled.video``

const HeroContent = styled.div``

const HeroItems = styled.div``

const HeroH1= styled.h1``

const HeroP = styled.p``
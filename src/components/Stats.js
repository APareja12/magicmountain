import React from 'react'
import styled from 'styled-components'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/gi'

const StatsData = [
    {
        icon: (<GiEarthAmerica />),
        title: "Connect and learn more about nature",
        desc: "Unique experiences",
    },
    {
        icon: (<MdAirplanemodeActive />),
        title: "Relaxing creative workshops",
        desc: "A beautiful getaway",
    },
    {
        icon: (<MdTimer />),
        title: "Reach out",
        desc: "Access our support team 24/7",
    },
    {
        icon: (<FaMoneyCheck />),
        title: "Budget friendly packages",
        desc: "Offering payment plans",
    },
]

const Stats = () => {
    return (
        <StatsContainer>
            <Heading>Why Choose Us?</Heading>
            <Wrapper>
                {StatsData.map((item, index) => {
                    return (
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>   
                    )
                })}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
    width: 100%;
    background: #fff;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw -1300px) / 2);
`
const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const StatsBox = styled.div``

const Icon = styled.div``

const Title = styled.div``

const Description = styled.div``
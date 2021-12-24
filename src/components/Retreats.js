import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";


const Retreats = () => {
const data = useStaticQuery(graphql`query RetreatsQuery {
  allRetreatsJson {
    edges {
      node {
        alt
        button
        name
        img {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`)

function getRetreats(data) {
    const retreatsArray = []
    data.allRetreatsJson.edges.forEach((item, index) => {
        retreatsArray.push(
            <div key={index}>
                <GatsbyImage
                  image={item.node.img.childImageSharp.gatsbyImageData}
                  src={item.node.img.childImageSharp.gatsbyImageData.src}
                  fluid={item.node.img.childImageSharp.fluid}
                  alt={item.node.alt} /> 
                </div>
        )
    })
    return retreatsArray
}
    return (
       <ProductsContainer>
           <ProductsHeading>Heading</ProductsHeading>
           <ProductsWrapper>{getRetreats(data)}</ProductsWrapper>
       </ProductsContainer>
    )
}

export default Retreats

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw -1300px) / 2);
    background: red;
    color: #fff;
`

const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;

`

const ProductsWrapper = styled.div``
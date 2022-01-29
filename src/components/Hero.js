import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import BackgroundImage from "gatsby-background-image"

const query = graphql`
    {
      file(relativePath: {eq: "hero-img.jpg"}) {
        childImageSharp {
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

const Hero = () => {
  const {file:{
    childImageSharp: {fluid},
  },
  } = useStaticQuery(query)
  
  return (
    <header className="hero">
      <BackgroundImage className="hero-background" fluid={fluid}>
      <div className="section-center hero-center">
        
        <article>
          <div>
              <h1>I'm Anne</h1>
              <h4>Web developer</h4>
              <Link to='/contact' className="btn">contact me</Link>
              <SocialLinks />
          </div>
        </article>
       
      </div>
      </BackgroundImage>
    </header>
  )
  
}

export default Hero

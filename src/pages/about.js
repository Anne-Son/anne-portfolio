import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import anneLogo from '../assets/annesonLogoGold.png'
// ...GatsbyImageSharpFluid
const About = ({
  data:{
    about:{nodes},
  },
}) => {
  console.log(nodes[0].data.attributes);
const{title, info, skills} = nodes[0].data.attributes;  

  return(
    <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <img src={anneLogo} alt="" className="about-img" />
        <article className="about-text">
          <Title title={title}/>
          <p>{info}</p>
          <div className="about-stack">{skills}</div>
        </article>
      </div>

    </section>
    </Layout>
  ) 
}

export const query = graphql`
  {
    about:allStrapiApiAbout {
      nodes {
        data {
          attributes {
            title
            info
            skills
          }
        }
      }
    }
  }
`

export default About

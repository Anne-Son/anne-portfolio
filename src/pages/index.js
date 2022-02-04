import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import data from "../constants/projects"

export default () => {
  return <Layout>
    <Hero />
    <Services />
    <Projects projects={data} title="featured projects" showLink featured/>
  </Layout>
}
// ...GatsbyImageSharpFluid

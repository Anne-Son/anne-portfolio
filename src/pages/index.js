import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import ProjectsSlider from "../components/ProjectsSlider"
import data from "../constants/projectsData"

export default () => {
  return <Layout>
    <Hero />
    <Services />
    <ProjectsSlider projects={data} title="featured projects" showLink featured/>
  </Layout>
}
// ...GatsbyImageSharpFluid

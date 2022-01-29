import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import data from "../constants/projects"

export default () => {
  return <Layout>
    <Hero />
    <Services />
    <Projects projects={data} title="featured projects" showLink featured/>
  </Layout>
}
// ...GatsbyImageSharpFluid

import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import data from "../constants/projectsData"

const ProjectsPage = () => {
  return <Layout>
    <section className="projects-page">
      <Projects projects={data} title="all projects"/>
    </section>
  </Layout>
}

export default ProjectsPage

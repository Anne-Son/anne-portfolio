import React from "react"
import Title from "./Title"
import Project from "./ProjectSlider"
import { Link } from "gatsby"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useState } from "react"
import { useEffect } from "react"

const ProjectsSlider = ({projects, title, showLink, featured}) => {
  const[indice, setIndice] = useState(0);
  const featuredProjects = projects.filter(project => project.featured==true);
  console.log(featuredProjects.length);

  useEffect(()=>{
    const lastIndice = featuredProjects.length - 1;
    if(indice < 0) {
      setIndice(lastIndice);
    }
    if(indice > lastIndice){
      setIndice(0);
    }
  },[indice,featuredProjects])

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndice(indice + 1);
    }, 3000);
    return()=> clearInterval(slider)
    },[indice]);


  return <section className="section projects">
    <Title title={title}/>
    <div className="slider">
      {projects.map((project, index)=>{
       let position = 'nextSlide';
       if(index === indice){
         position = 'activeSlide';
       }
       if(index === indice - 1 || (indice === 0 && index === projects.length - 1)){
         position = 'lastSlide';
       }
      return featured && project.featured && <Project key={project.id} index={index} position={position} {...project}/>
        
      
        
      })}
      <button className="prev" onClick={() => setIndice(indice -1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndice(indice +1)}>
        <FiChevronRight />
      </button>
    </div>
    {
      showLink && <Link to="/projects" className="btn center-btn">projects</Link>
    }
  </section>
}

export default ProjectsSlider

import React from "react"
import PropTypes from "prop-types"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({description,title,repo,url,info2,img,index}) => {
  
  return <article className="project">
    <img cl src={img} className="project-img"/>
    <div className="project-info">
      <span className="project-number">0{index+1}</span>
      <h3>{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-stack"><span>{info2}</span></div>
      <div className="project-links">
        <a href={repo}>
          <FaGithubSquare className="project-icon"/>
        </a>
        <a href={url}>
          <FaShareSquare className="project-icon"/>
        </a>
      </div>
    </div>
    </article>

}

Project.propTypes = {}

export default Project

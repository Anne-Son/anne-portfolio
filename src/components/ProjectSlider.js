import React from "react"
//import PropTypes from "prop-types"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"


const ProjectSlider = ({description,title,repo,url,info2,img,index, position}) => {
  

  return (
  <>
  <article className={`article-slider ${position}`}>
    <img src={img}/>
    <div>
      <h4>{title}</h4>
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
</>
)
}

//Project.propTypes = {}

export default ProjectSlider

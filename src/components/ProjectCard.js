import React from "react";
import projects from './projects.json'

const ProjectCard = () => {
    return (
      <div className="album">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {projects.map((project) => (
              <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title>
                  <image href={project['photo']} width="100%" height="225" alt='project img'/>
                </svg>
                <div className="card-body">
                  <p className="card-text">{project['name']}</p>
                  <p className="card-text">{project['description']}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div >
                      {project['technologies'].map((item) => (
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">{item}</button>
                      ))}
                    </div>
                    <small className="text-muted">{project['date']}</small>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default ProjectCard;
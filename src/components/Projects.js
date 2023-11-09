import React from 'react'

function Projects() {
    return (
        <div id="projects" className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">Delivered projects</h2>
            <p className="p-heading">Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops</p>
          </div> {/* end of col */}
        </div> {/* end of row */}
        <div className="row">
          <div className="col-lg-12">

            <div className="text-container">
              <div className="image-container">
                <a href="project.html">
                  <img className="img-fluid" src="images/project-1.jpg" alt="alternative" />
                </a>
              </div> {/* end of image-container */}
              <p><strong>For:</strong> Jumbotron, <strong>Project:</strong> web design for their corporate websites and landing pages for marketing campaigns <a className="blue" href="project.html">details</a></p>
            </div> {/* end of text-container */}

            <div className="text-container">
              <div className="image-container">
                <a href="project.html">
                  <img className="img-fluid" src="images/project-2.jpg" alt="alternative" />
                </a>
              </div> {/* end of image-container */}
              <p><strong>For:</strong> Carsrepo, <strong>Project:</strong> designed and developed a modern platform for purchasing second-hand cars online <a className="blue" href="project.html">details</a></p>
            </div> {/* end of text-container */}

            <div className="text-container">
              <div className="image-container">
                <a href="project.html">
                  <img className="img-fluid" src="images/project-3.jpg" alt="alternative" />
                </a>
              </div> {/* end of image-container */}
              <p><strong>For:</strong> Truevideo, <strong>Project:</strong> created a custom video editing and upload web app for this awesome team <a className="blue" href="project.html">details</a></p>
            </div> {/* end of text-container */}

            <div className="text-container">
              <div className="image-container">
                <a href="project.html">
                  <img className="img-fluid" src="images/project-4.jpg" alt="alternative" />
                </a>
              </div> {/* end of image-container */}
              <p><strong>For:</strong> Evolosim, <strong>Project:</strong> complete redesign of their corporate website and platform update for their online shop <a className="blue" href="project.html">details</a></p>
            </div> {/* end of text-container */}

          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div>
    )
}

export default Projects

import React from 'react'

function Projects() {
    return (
        <div id="projects" className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading project-title">Delivered projects</h2>
            <p className="p-heading">Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops</p>
          </div> {/* end of col */}
        </div> {/* end of row */}
        <div className="row">
          <div className="col-lg-12">

            <div className="text-container">
              <div className="image-container">
                <a href="https://organify-c0005.web.app/">
                  <img className="img-fluid" src="images/project-1.jpg" alt="alternative" />
                </a>
              </div> {/* end of image-container */}
             
            </div> {/* end of text-container */}

            <div className="text-container">
              <div className="image-container">
                <a href="https://netflix-f6221.web.app/">
                  <img className="img-fluid" src="images/project-2.jpg" alt="alternative" />
                </a>
              </div> {/* end of image-container */}
             
            </div> {/* end of text-container */}

            <div className="text-container">
              <div className="image-container">
                <a href="https://to-do-fb966.web.app/">
                  <img className="img-fluid" src="images/project-3.jpg" alt="alternative" />
                </a>
              </div> {/* end of image-container */}
             
            </div> {/* end of text-container */}

            <div className="text-container">
              <div className="image-container">
                <a href="/">
                  <img className="img-fluid " src="images/project-4.png" alt="alternative" />
                </a>
              </div> {/* end of image-container */}
             
            </div> {/* end of text-container */}

          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div>
    )
}

export default Projects

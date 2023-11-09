import React from 'react'

function Services() {
    return (
        <div id="services" className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h2-heading">Skills</h2>
              <p className="p-heading">A highly skilled and motivated web developer with a passion for creating innovative and user-friendly
websites. Proficient in HTML, CSS, React and JavaScript </p>
            </div> {/* end of col */}
          </div> {/* end of row */}
          <div className="row">
            <div className="col-lg-4">
              <div className="text-box">
                <i className="far fa-gem"></i>
                <h4>DESIGN</h4>
                <p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
              </div> {/* end of text-box */}
            </div> {/* end of col */}
            <div className="col-lg-4">
              <div className="text-box">
                <i className="fas fa-code"></i>
                <h4>DEVELOPMENT</h4>
                <p>I can code my own designs or even use the customer's design as a base. My focus is to generate clean code that's well-structured for reliability</p>
              </div> {/* end of text-box */}
            </div> {/* end of col */}
            <div className="col-lg-4">
              <div className="text-box">
                <i className="fas fa-tv"></i>
                <h4>BASIC SEO</h4>
                <p>I can set up your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money</p>
              </div> {/* end of text-box */}
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div> 
    )
}

export default Services

import React from 'react'

function Questions() {
    return (
        <div className="accordion-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h2-heading">Frequent questions</h2>
            </div> {/* end of col */}
          </div> {/* end of row */}
          <div className="row">
            <div className="col-lg-12">
  
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How can I contact you and quickly get a quote for my online project?
                    </button>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                      The best way to reach me is through the contact form or by messaging me on my social media accounts. For a fast quote, make sure you provide many project details.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Do you create designs from the ground up or use themes?
                    </button>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                      I create designs from the ground up. Each project is unique, and I tailor the design to meet your specific needs.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Will I receive any included maintenance or warranty after project delivery?
                    </button>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                      Yes, I provide a period of free maintenance after project delivery. Additionally, I offer warranty support for any issues related to my work during this period.
                    </div>
                  </div>
                </div>
                {/* Add more FAQ items as needed */}
  
              </div> {/* end of accordion */}
  
            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div>
    )
}

export default Questions

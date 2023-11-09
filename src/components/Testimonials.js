import React from 'react'

function Testimonials() {
    return (
        <div className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">A few words from people that chose to work with me</h2>
          </div> {/* end of col */}
        </div> {/* end of row */}
        <div className="row">
          <div className="col-lg-12">

            {/* Card */}
            <div className="card">
              <div className="card-body">
                <p className="testimonial-text">“Mark is a skilled developer who will do everything possible to deliver the project on time, and I really appreciate that”</p>
                <div className="details">
                  <img src="images/testimonial-1.jpg" alt="alternative" />
                  <div className="text">
                    <div className="testimonial-author">Samantha Bloom</div>
                    <div className="occupation">Team Leader - Syncnow</div>
                  </div> {/* end of text */}
                </div> {/* end of testimonial-details */}
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-body">
                <p className="testimonial-text">“Loved to work with Mark. He's such an awesome developer with great attention to details. He also has a great eye for design”</p>
                <div className="details">
                  <img src="images/testimonial-2.jpg" alt="alternative" />
                  <div className="text">
                    <div className="testimonial-author">John Rowling</div>
                    <div className="occupation">Marketing Manager - Nexlite</div>
                  </div> {/* end of text */}
                </div> {/* end of testimonial-details */}
              </div>
            </div>
            {/* end of card */}

            {/* Card */}
            <div className="card">
              <div className="card-body">
                <p className="testimonial-text">“So glad we started working with Mark. We've used his design and development skills many times for our in-house online projects”</p>
                <div className="details">
                  <img src="images/testimonial-3.jpg" alt="alternative" />
                  <div className="text">
                    <div className="testimonial-author">Lana Smith</div>
                    <div className="occupation">General Manager - Shifter</div>
                  </div> {/* end of text */}
                </div> {/* end of testimonial-details */}
              </div>
            </div>
            {/* end of card */}

          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div>
    )
}

export default Testimonials

import React from 'react';

function About() {
  return (
    <div id="about" className="basic-1 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="text-container first">
              <h2>Hi there, I'm Gurmanpreet Singh</h2>
              <p>
                A highly skilled and motivated web developer with a passion for creating innovative and user-friendly websites. Proficient in HTML, CSS, React, and JavaScript.
              </p>
            </div> {/* end of text-container */}
          </div> {/* end of col */}
          <div className="col-lg-4">
            <div className="text-container second">
              <div className="time">06/2023 - 09/2023</div>
              <h5>MERN STACK DEVELOPMENT</h5>
              <h6>Netmax Technologies</h6>
              <h6><i className="fa-solid fa-location-dot"></i> Chandigarh</h6>
              <p>
                <ul>
                  <li>Design and develop MERN stack applications using React, Node.js, Express, and MongoDB.</li>
                  <li>Implement RESTful APIs and authentication systems.</li>
                  <li>Troubleshoot and debug MERN stack applications.</li>
                </ul>
              </p>
            </div> {/* end of text-container */}
          </div> {/* end of col */}
          <div className="col-lg-4">
            <div className="text-container third">
              <div className="time">2019-2023</div>
              <h5>Btech in Electronics and Communication</h5>
              <h6>DAV Institute of Engineering & Technology</h6>
              <h6><i className="fa-solid fa-location-dot"></i> Jalandhar</h6>
              <p>
                I pursued my B.Tech in Electronics and Communication at DAV Institute of Engineering & Technology, where I gained a solid understanding of electronic systems and communication technologies. 
              </p>
            </div> {/* end of text-container */}
          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div>
  );
}

export default About;

import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="social-container">
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-pinterest-p fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-youtube fa-stack-1x"></i>
                </a>
              </span>
            </div>
            {/* end of social-container */}
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}
      </div>
      {/* end of container */}
    </div>
    /* end of footer */
  );
};

export default Footer;

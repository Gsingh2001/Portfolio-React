import React from 'react';


const Footer = () => {
  return (
    <div className="footer bg-gray">
      <div className="container">

        <div className="row">


          <div className="col-lg-12">
            <div className="social-container">
              <span className="fa-stack ">
                <a className="nav-social" href="https://instagram.com/gurman_preetsingh/">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </span>
              <span className="fa-stack ">
                <a className="nav-social" href="https://github.com/Gsingh2001#your-link/">
                  <i className="fa-brands fa-square-github"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a className="nav-social" href="https://www.linkedin.com/in/gsingh07/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a className="nav-social" href="tel:9877371074">
                  <i class="fa-solid fa-square-phone"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a className="nav-social" href="mailto:gsingh07@outlook.in">
                  <i class="fa-solid fa-square-envelope"></i>
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

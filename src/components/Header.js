import React from 'react'

function Header() {
    return (
        <header id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container header-content">
              <h1 className="h1-large">I love to create beautiful and efficient websites</h1>
              <a className="btn-solid-lg page-scroll" href="#about">Discover</a>
              <a className="btn-outline-lg page-scroll" href="#contact"><i className="fas fa-user"></i>Contact Me</a>
            </div> 
          </div> 
        </div> 
      </div> 
    </header> 
    )
}

export default Header

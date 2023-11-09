import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <div className="container">

                {/* Image Logo */}
                <Link className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" />Gurmanpreet</Link>

                {/* Text Logo - Use this if you don't have a graphic logo */}
                {/* <a className="navbar-brand logo-text page-scroll" href="index.html">Mark</a> */}

                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#about">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Privacy Policy</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                
                                <a className="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <span className="nav-item social-icons">
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
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Nav

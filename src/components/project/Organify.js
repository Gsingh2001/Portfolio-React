import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const Organify = () => {

    const owlOptions = {
        items: 2, // Display one item at a time
        autoHeight: true, // Auto height based on the content
        autoplay: true,
        autoWidth: true,
        margin: 10,
        responsive: {
            0: {
                items: 2, // Display one item at a time on small screens
            },
            768: {
                items: 4, // Display three items at a time on screens larger than 768px
            },
        },
    };
    return (
        <div>
            <div className="ex-basic-1 pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img className="img-fluid mt-5 mb-3" src="../images/project-1.jpg" alt="alternative" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ex-basic-1 pt-4">
                <div className="container">
                    <div className="row">
                        <div className='project-title mb-3'>Let's Organify site (11/2023 - Present)</div>
                        <div className="col-xl-10 offset-xl-1">
                            <a href="https://organify-c0005.web.app/">
                                <h2 class="mb-3">Demo :- https://organify-c0005.web.app/
                                </h2></a>
                            <h2 class="mb-3">https://github.com/Gsingh2001/organify-ReactJS-Responsive</h2>
                            <p class="mb-1">
                                The "Organify" website, developed from November 2023 to the present, showcases a compelling synergy of React and Firebase technologies, offering users a seamless and responsive experience. The project, accessible at https://organify-c0005.web.app/, and its corresponding GitHub repository (https://github.com/Gsingh2001/organify-ReactJS-Responsive), exemplify the integration of powerful front-end and back-end technologies.
                            </p>
                            <p class="mb-1">
                                Built with React, the website ensures a dynamic and efficient user interface. Leveraging React's component-based architecture, Organify achieves modular design, enabling easy maintenance and scalability. The site's responsiveness is a testament to its adaptability across various devices and screen sizes.
                            </p>
                            <p class="mb-1">
                                Firebase serves as the backbone, handling user authentication, real-time database functionalities, and hosting. The seamless integration with Firebase not only ensures secure user interactions but also enables dynamic content updates in real-time.
                            </p>
                            <p class="mb-1">
                                The Organify project's GitHub repository provides valuable insights into the codebase, facilitating collaboration and contributions from the developer community. The project's evolution over time is evident, with ongoing development indicating a commitment to refinement and improvement.
                            </p>
                            <p class="mb-5">
                                The live demo offers users an interactive experience, allowing them to explore the features and functionality of Organify firsthand. This project encapsulates the modern web development landscape, combining the declarative power of React with the robustness of Firebase, ultimately resulting in an engaging and responsive web application.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
            <OwlCarousel className="owl-theme" {...owlOptions} >
                <div className="myCard">
                    <div className="innerCard ">
                        <div className="frontSide frontSide-JS ">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title" >JavaScript</p>
                            <p className="text">JavaScript: Essential for web development, powers interactivity on sites, versatile for front-end and back-end, foundational for modern web apps.</p>
                        </div>
                    </div>
                </div>




                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide frontSide-CSS">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title">CSS</p>
                            <p className="text">CSS, or Cascading Style Sheets, is a language used for styling web pages. It controls the layout and appearance of HTML elements</p>
                        </div>
                    </div>
                </div>



                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide frontSide-REACT">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title">ReactJS</p>
                            <p className="text">React, is a JavaScript library for building user interfaces. Developed by Facebook, it enables the creation of interactive and dynamic web applications.</p>
                        </div>
                    </div>
                </div>




                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide frontSide-FIRE">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title">FireBase</p>
                            <p className="text">Firebase is a comprehensive mobile and web development platform by Google. It provides a suite of services, including real-time databases, authentication, hosting, and cloud functions. </p>
                        </div>
                    </div>
                </div>
                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide frontSide-BT">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title">Bootstrap</p>
                            <p className="text">Bootstrap is a popular open-source front-end framework that simplifies and accelerates the process of building responsive and mobile-first web applications.  </p>
                        </div>
                    </div>
                </div>
                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide frontSide-OWL">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title">Owl Carousel</p>
                            <p className="text">Owl Carousel is a feature-rich and responsive jQuery plugin that simplifies the creation of interactive and customizable carousels (sliders) on websites.  </p>
                        </div>
                    </div>
                </div>

                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide frontSide-FA">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title">Font Awesome</p>
                            <p className="text">Font Awesome is a popular icon library that provides a comprehensive collection of scalable vector icons. I </p>
                        </div>
                    </div>
                </div>





            </OwlCarousel>




        </div>
    )
};

export default Organify;

import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const Resume = () => {

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
                            <img className="img-fluid mt-5 mb-3" src="../images/project-4.png" alt="alternative" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ex-basic-1 pt-4">
                <div className="container">
                    <div className="row">
                        <div className='project-title mb-3'>Resume (05/2023 - 05/2023)</div>
                        <div className="col-xl-10 offset-xl-1">
                            <a href=' https://gsingh2001.github.io/resume/'>
                                <h2 class="mb-3">Demo :- https://gsingh2001.github.io/resume/</h2>
                            </a>



                            <h2 class="mb-3">https://github.com/Gsingh2001/resume
                            </h2>
                            <p class="mb-1">
                                The Resume project, developed from May 2023 to May 2023, is a personal showcase of my skills in web development, featuring HTML, CSS, and SASS. The project serves as a digital representation of my professional journey and technical capabilities.
                            </p>
                            <p class="mb-1">
                                Accessible at https://gsingh2001.github.io/resume/, and with its source code available on GitHub (https://github.com/Gsingh2001/resume), the project employs clean and semantic HTML markup for content structure. The use of CSS and SASS enhances the visual appeal, providing a well-styled and responsive layout that adapts seamlessly across different devices and screen sizes.
                            </p>
                            <p class="mb-1">
                                The simplicity and elegance of the design prioritize clarity and readability, ensuring an optimal user experience for those exploring my resume. The project also demonstrates my proficiency in SASS, a CSS preprocessor, showcasing organized and maintainable styles through variables, nested rules, and other SASS features.
                            </p>
                            <p class="mb-1">
                                The live demo allows users to navigate through various sections of the resume, providing an overview of my skills, education, work experience, and projects. The GitHub repository not only makes the project accessible for review but also allows for collaboration and contributions from the developer community.
                            </p>

                            <p class="mb-5">
                                Overall, the Resume project reflects my commitment to creating clean and visually appealing web applications while showcasing my skills in HTML, CSS, and SASS. It serves as both a personal portfolio and an example of my dedication to maintaining an up-to-date and polished online presence.
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
                        <div className="frontSide frontSide-SASS">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title">SASS </p>
                            <p className="text">Sass (Syntactically Awesome Stylesheets) is a powerful and widely-used CSS preprocessor that extends the capabilities of traditional CSS.</p>
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

export default Resume;

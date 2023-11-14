import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Todo = () => {

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
                            <img className="img-fluid mt-5 mb-3" src="../images/project-3.jpg" alt="alternative" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ex-basic-1 pt-4">
                <div className="container">
                    <div className="row">
                        <div className='project-title mb-3'>To-Do Project (06/2023 - 06/2023)</div>
                        <div className="col-xl-10 offset-xl-1">
                            <a href="https://to-do-fb966.web.app/"><h2 class="mb-3" >Demo :- https://to-do-fb966.web.app/
                            </h2></a>

                            <h2 class="mb-3">https://github.com/Gsingh2001/To-Do</h2>
                            <p class="mb-1">
                                The To-Do project, developed by Gsingh2001, showcases a practical and user-friendly implementation of a task management application. This project, built using React, leverages the power of JSON for data storage and Redux for state management, providing a seamless and efficient user experience.
                            </p>
                            <p class="mb-1">
                                Utilizing the Bootstrap framework for a responsive and visually appealing design, the To-Do project offers a clean interface that simplifies the process of creating, editing, and managing tasks. The integration of Redux ensures a robust and scalable state management system, allowing users to interact with their to-do lists seamlessly.
                            </p>
                            <p class="mb-1">
                                The live demo, accessible at https://to-do-fb966.web.app/, allows users to experience the functionality firsthand. Additionally, the project's complete source code is available on GitHub at https://github.com/Gsingh2001/To-Do, offering transparency and collaboration opportunities for fellow developers interested in exploring or contributing to the project.</p>
                            <p class="mb-5">
                                Overall, the To-Do project represents a well-rounded application that combines modern web development technologies to deliver an efficient and user-friendly task management solution.
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
                        <div className="frontSide frontSide-REDUX">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title">Redux</p>
                            <p className="text">Redux is a state management library for JavaScript applications, commonly used with React. It centralizes the state of an application, making it predictable and easier to manage. </p>
                        </div>
                    </div>
                </div>

                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide frontSide-JSON">
                            <p className="title"></p>
                            <p></p>
                        </div>
                        <div className="backSide">
                            <p className="title">JSON</p>
                            <p className="text">JSON (JavaScript Object Notation) is a lightweight data interchange format. It is easy for humans to read and write and easy for machines to parse and generate. </p>
                        </div>
                    </div>
                </div>




            </OwlCarousel>




        </div>
    )
};

export default Todo;

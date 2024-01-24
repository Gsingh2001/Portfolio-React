import React from 'react'
import OwlCarousel from 'react-owl-carousel';
const Netflix = () => {

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
              <img className="img-fluid mt-5 mb-3" src="../images/project-2.jpg" alt="alternative" />
            </div>
          </div>
        </div>
      </div>
      <div className="ex-basic-1 pt-4">
        <div className="container">
          <div className="row">
            <div className='project-title mb-3'>Netflix-Clone (06/2026 - 07/2023)</div>
            <div className="col-xl-10 offset-xl-1">
              <a href="https://netflix-f6221.web.app/"><h2 class="mb-3" >Demo :- https://netflix-f6221.web.app/

              </h2></a>

              <h2 class="mb-3">https://github.com/Gsingh2001/netflix-clone</h2>
              <p class="mb-1">
                Creating a Netflix clone project spanning from June 2023 to July 2026 was an immersive and challenging endeavor that showcased my proficiency in several key technologies. Leveraging the power of React, Firebase, TMDB API, Bootstrap, and CSS, I embarked on this journey to replicate the iconic streaming platform's user interface and functionality.
              </p>
              <p class="mb-1">
                The React library served as the backbone, enabling the construction of a dynamic and responsive user interface. React's component-based architecture facilitated the modular design of the application, ensuring scalability and maintainability throughout the project's lifecycle.
              </p>
              <p class="mb-1">
                Firebase, a powerful backend-as-a-service (BaaS) platform, was instrumental in handling user authentication, database management, and hosting. Its real-time database capabilities seamlessly synchronized data across the application, providing users with a smooth and interactive experience.
              </p>
              <p class="mb-1">
                Integration with The Movie Database (TMDB) API was a pivotal aspect of the project, allowing the Netflix clone to dynamically fetch and display a vast array of movie and TV show information. This feature enhanced the project's realism, ensuring that users could explore a diverse range of content, similar to the original Netflix platform.
              </p>
              <p class="mb-1">
                The utilization of Bootstrap and CSS played a crucial role in achieving a polished and visually appealing design. Leveraging Bootstrap's responsive grid system, along with custom styling using CSS, resulted in a sleek and user-friendly interface that adapts seamlessly to various screen sizes and devices.
              </p>
              <p class="mb-1">
                Throughout the development process, I encountered and overcame various challenges, including ensuring smooth video playback, optimizing performance, and maintaining a consistent user experience. Regular updates and refinements were made to keep the project aligned with the latest trends and technologies.
              </p>
              <p class="mb-5">
                In summary, the Netflix clone project served as a comprehensive showcase of my skills in React, Firebase, TMDB integration, Bootstrap, and CSS. This hands-on experience not only strengthened my technical proficiency but also deepened my understanding of building scalable, real-world applications that mirror the functionality of popular platforms.
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
            <div className="frontSide frontSide-TMDB">
              <p className="title"></p>
              <p></p>
            </div>
            <div className="backSide">
              <p className="title">TMDB</p>
              <p className="text">TMDB, short for "The Movie Database," is an online database and community-driven platform that provides comprehensive information about movies, TV shows, and celebrities. </p>
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

export default Netflix;

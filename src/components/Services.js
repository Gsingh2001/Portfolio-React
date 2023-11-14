import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const Services = () => {

  const owlOptions = {
    items: 2, // Display one item at a time
    autoHeight: true, // Auto height based on the content
    autoplay: true,
    autoWidth:true,
    margin:10,
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

    <div id="services" className="basic-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">Skills</h2>
            <p className="p-heading">A highly skilled and motivated web developer with a passion for creating innovative and user-friendly websites. Proficient in HTML, CSS, React, and JavaScript </p>
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
              <div className="frontSide frontSide-HTML">
                <p className="title"></p>
                <p></p>
              </div>
              <div className="backSide">
                <p className="title">HTML</p>
                <p className="text">HTML is the fundamental language for building web pages. HTML provides the basic framework for web documents. </p>
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
              <div className="frontSide frontSide-NODE">
                <p className="title"></p>
                <p></p>
              </div>
              <div className="backSide">
                <p className="title">NodeJS</p>
                <p className="text"> Node.js is a server-side JavaScript runtime that allows developers to build scalable and high-performance applications. It utilizes an event-driven, non-blocking I/O model, making it efficient for handling concurrent requests. </p>
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
              <div className="frontSide frontSide-SHOPIFY">
                <p className="title"></p>
                <p></p>
              </div>
              <div className="backSide">
                <p className="title">SHOPIFY</p>
                <p className="text">Shopify is an e-commerce platform that allows businesses to create online stores. Known for its user-friendly interface, Shopify simplifies the process of setting up and managing an online business. </p>
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

          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide frontSide-EXP">
                <p className="title"></p>
                <p></p>
              </div>
              <div className="backSide">
                <p className="title">Express</p>
                <p className="text">Express is a minimal and flexible Node.js web application framework. It simplifies the creation of robust web applications and APIs by providing a set of features for routing, middleware, and HTTP utility methods. </p>
              </div>
            </div>
          </div>

          <div className="myCard">
            <div className="innerCard">
              <div className="frontSide frontSide-DJ">
                <p className="title"></p>
                <p></p>
              </div>
              <div className="backSide">
                <p className="title">Django</p>
                <p className="text">Django is a high-level Python web framework known for its simplicity and flexibility. It follows the "don't repeat yourself" (DRY) principle, making it efficient for building web applications. </p>
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
              <div className="frontSide frontSide-WORD">
                <p className="title"></p>
                <p></p>
              </div>
              <div className="backSide">
                <p className="title">Wordpress</p>
                <p className="text">JavaScript: Essential for web development, powers interactivity on sites, versatile for front-end and back-end, foundational for modern web apps.</p>
              </div>
            </div>
          </div>




        </OwlCarousel>
      </div>

    </div>

  );
};

export default Services;

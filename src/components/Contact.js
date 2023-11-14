import React from 'react';

const Contact = () => {


  return (
    <div id="contact" className="form-1 bg-gray">
      <form className="form ">
        <header>
          Contact Form
          <span className="message">Fill the form to continue.</span>
        </header>
        <label>
          <span>Name</span>
          <input placeholder="Type your name" className="input" type="text" required="" />
        </label>
        <label>
          <span>Email</span>
          <input placeholder="Type your Email adress" className="input" type="text" required="" />
        </label>
        <label>
          <span>Message</span>
          <textarea placeholder="Type your Message " className="input " type="text" required="" rows="3" />
        </label>

        <button>
          <span class="circle1"></span>
          <span class="circle2"></span>
          <span class="circle3"></span>
          <span class="circle4"></span>
          <span class="circle5"></span>
          <span class="text">Submit</span>
        </button>


      </form>
    </div >

  );
};

export default Contact;

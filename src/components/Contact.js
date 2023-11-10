import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for form submission here
  };

  return (
    <div id="contact" className="form-1 bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Contact details</h2>
            <p className="p-heading">
              For any type of online project, please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email{' '}
              <a className="blue no-line" href="mailto:contact@domain.com">
                contact@domain.com
              </a>
            </p>
          </div>
          {/* end of col */}
        </div>
        {/* end of row */}

            {/* Contact Form */}

            <form class="px-7 h-screen grid justify-center items-center">
              <div class="grid gap-6" id="form">
                <div class="w-full flex gap-3">
                  <input class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black" type="text" placeholder="First Name" id="First-Name" name="First-Name" required="" />
                  <input class="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="text" placeholder="Last Name" id="Last-Name" name="Last-Name" />
                </div>
                <div class="grid gap-6 w-full">
                  <input class="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]" type="Email" placeholder="Email" id="Email" name="email" />
                    <input class="p-3 shadow-2xl   glass w-full text-black outline-none focus:border-solid focus:border-[1px]border-[#035ec5]" type="date" required="" />
                    </div>
                    <div class="flex gap-3">
                      <input class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Password" id="password" name="password" required="" />
                      <input class="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]" type="password" placeholder="Confirm password" required="" />
                    </div>
                    <button class="outline-none glass shadow-2xl  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold" type="submit">Submit</button>
                </div>
            </form>

            {/* end of contact form */}
          </div>
          {/* end of col */}
      
      {/* end of container */}
    </div>

  );
};

export default Contact;

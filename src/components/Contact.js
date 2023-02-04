import React from 'react';

function Contact() {
  return (
    <div id="contacts" className="bg-christin-white mt-1 activities container-fluid px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48 relative">
      <div className="w-full flex flex-col justify-center items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat md:pb-8 border-b border-christin">
        <h2 className="text-christin-secondary font-light text-2xl md:text-4xl">
          Let’s chat!
        </h2>
        <span className="md:hidden text-christin text-4xl font-bold">
          CHRI
          <span className="text-christin-secondary">STIN</span>
        </span>
      </div>
      <div className="ContactForm w-full flex flex-col md:flex-row justify-between sm:pt-8 md:pt-16 space-y-8 sm:space-y-0 mb-8  sm:mb-16">
        <div className="hidden md:flex flex-col font-montserrat sm:pb-8">
          <span className="text-christin-secondary font-thin mb-2 md:text-xl lg:text-2xl">GET IN TOUCH</span>
          <span className="text-christin-gray font-light lg:text-xl">Email: christinbertin77@gmail.com</span>
          <span className="text-christin-gray font-light lg:text-xl"> Phone: +1 347-664-0849</span>
          <span className="text-christin-gray font-light lg:text-xl">Address: Address: Brooklyn, NY 11236</span>
          <span className="text-christin text-4xl md:text-5xl font-bold mt-4">
            CHRI
            <span className="text-christin-secondary">STIN</span>
          </span>
        </div>
        <form action="" method="" className="md:w-7/12 px-0 flex flex-col space-y-4">
          <div className="flex flex-col space-y-4 font-light">
            <input type="text" id="name" name="name" placeholder="Full Name" className="border-none bg-christin-grayLight px-4 py-2 outline-none focus-none" />
            <input type="email" id="email" name="email" placeholder="Email" className="border-none bg-christin-grayLight px-4 py-2 outline-none" />
            <textarea id="message" name="message" placeholder="Message..." className="border-none bg-christin-grayLight px-4 py-2 outline-none" rows={5} />
          </div>
          <span className="flex justify-end">
            <button type="submit" className="w-full bg-christin font-montserrat text-christin-primary px-4 py-2.5 whitespace-nowrap sendMessage">Send Message</button>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Contact;

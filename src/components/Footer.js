import React from 'react';

function Footer() {
  return (
    <div className="bg-christin flex flex-col py-4 md:py-8 md:space-y-8 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-center md:justify-between items-center w-full">
        <span className="text-christin-white text-2xl md:text-5xl font-bold mt-4">
          CHRI
          <span className="text-christin-secondary">STIN</span>
        </span>
        <span className="flex flex-col justify-center md:items-start items-center font-montserrat pb-8">
          <span className="text-christin-grayLight font-light lg:text-xl">Email: christinbertin77@gmail.com</span>
          <span className="text-christin-grayLight font-light lg:text-xl"> Phone: +1 347-664-0849</span>
          <span className="text-christin-grayLight font-light lg:text-xl">Address: Address: Brooklyn, NY 11236</span>
        </span>
      </div>
      <span className="w-full text-christin-grayLight font-thin font-montserrat text-xs sm:text-md lg:text-lg 2xl:text-xl text-center border-t border-christin-primary pt-2 sm:pt-4 pb-8">
        &copy; Copyright 2023
        {' '}
        <span className="text-christin-white text-md font-light">
          CHRI
          <span className="text-christin-secondary">STIN</span>
        </span>
        {' '}
        - All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;

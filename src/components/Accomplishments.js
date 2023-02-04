import React from 'react';
import { socials } from './Data';

function Accomplishments() {
  return (
    <div className="py-8 md:16 md:mt-12">
      <div className="px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48 pb-8">
        <div className="w-full flex items-center space-x-2 sm:space-x-4 md:space-x-6 text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat pb-4 md:pb-8 border-b border-christin-primary">
          <h1 className="font-montserrat font-normal text-christin">
            Accomplishments
            <span className="text-christin-secondary">.</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col space-y-12 sm:space-y-36">
        <div id="accomplishments" className="w-full h-52 mt-1 activities container-fluid relative">
          <div className="w-full h-52 flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-center sm:space-x-4 absolute left-0 right-0 sm:-bottom-24 mx-auto px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
            <div className="w-full sm:w-4/12 lg:w-3/12 h-full flex sm:flex-col justify-center items-center space-x-2 sm:space-x-0 sm:space-y-2 md:space-y-4 bg-christin-secondary">
              <h1 className="font-montserrat font-light text-christin-white sm:text-2xl lg:text-4xl">
                Projects
              </h1>
              <span className="text-christin-white sm:text-2xl lg:text-4xl">20+</span>
            </div>
            <div className="w-full sm:w-4/12 lg:w-3/12 h-full flex sm:flex-col justify-center items-center space-x-2 sm:space-x-0 sm:space-y-2 md:space-y-4 bg-christin">
              <h1 className="font-montserrat font-light text-christin-primary sm:text-2xl lg:text-4xl">
                Knowledge
              </h1>
              <span className="text-christin-primary sm:text-2xl lg:text-4xl">8+</span>
            </div>
            <div className="w-full sm:w-4/12 lg:w-3/12 h-full flex sm:flex-col justify-center items-center space-x-2 sm:space-x-0 sm:space-y-2 md:space-y-4 bg-christin-primary">
              <h1 className="font-montserrat font-light text-christin sm:text-2xl lg:text-4xl">
                Certificates
              </h1>
              <span className="text-christin sm:text-2xl lg:text-4xl">2+</span>
            </div>
          </div>
        </div>
        <div className="bg-christin h-24 flex justify-between md:justify-center items-center md:space-x-12 px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48">
          {
            socials.map((social) => (
              <a href={social.url} target="_blank" rel="noreferrer" key={social.id} className="text-christin-primary md:hover:text-christin-hover font-thin">{social.name}</a>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Accomplishments;

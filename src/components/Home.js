import React from 'react';
import young from '../assets/images/handsome-young-businessman-suit.png';

const Home = () => (
  <div id="home" className="container-fluid px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48 relative">
    <div className="flex flex-col items-start justify-center h-screen relative">
      <div className="flex justify-between z-20">
        <div className="flex flex-col space-y-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          <h1 className="font-montserrat font-thin text-christin-white">Hi, I&apos;m</h1>
          <span className="flex flex-col space-y-1 md:space-y-2 font-montserrat font-bold text-5xl sm:text-6xl xl:text-7xl text-christin-white">
            <h1 className="">Christin</h1>
            <h1 className="">BERTIN</h1>
          </span>
          <p className="sm:w-10/12 lg:w-7/12 text-justify font-montserrat font-light text-sm sm:text-lg text-christin-grayLight">
            Welcome to my personal website!
            I am a highly motivated and ambitious engineering student
            with a passion for innovative design and development.
          </p>
        </div>
      </div>
      <button type="button" className="bg-christin text-christin-white hover:text-christin-gray font-normal font-montserrat text-sm sm:text-lg md:text-md lg:text-lg text-center py-2 px-8 lg:px-12 mt-4 z-20">
        Let&apos;s talk
      </button>
      <img src={young} alt="young" className="sm:object-cover absolute sm:h-4/6 md:h-5/6 right-0 bottom-0 z-10 opacity-25" />
    </div>
  </div>
);

export default Home;

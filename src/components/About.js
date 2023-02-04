/* eslint-disable max-len */
import React from 'react';
import data from './Data';

function About() {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <div id="about" className="about container-fluid px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48 relative">
      <div className="flex flex-col space-y-4 md:space-y-10 pt-12">
        <div className="flex flex-col space-y-8">
          <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-3xl md:text-4xl lg:text-5xl font-bold font-nayanika pb-4 md:pb-8 border-b border-ejs">
            <h1 className="font-montserrat font-bold text-christin">
              About me
              {' '}
              <span className="text-christin-secondary">.</span>
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-4 md:space-x-8 md:space-y-0 md:flex-row">
          <span className="w-full md:w-7/12 text-md md:text-lg text-clip font-light letter-spacing-4">
            {data.map((item) => (
              <div key={item.id}>
                <p className="text-christin-gray text-justify">
                  {item.description.length > 521 ? `${item.description.substring(0, 521)}` : item.description}
                  {readMore && (
                    <p className="text-christin-gray text-justify">
                      {item.description.substring(521, item.description.length)}
                    </p>
                  )}
                </p>
                {item.description.length > 521 ? (
                  <button type="button" className="text-christin-secondary font-light" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Read Less' : 'Read More'}
                  </button>
                ) : (
                  <button type="button" className="text-christin-secondary font-light" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Read More' : 'Read Less'}
                  </button>
                )}
              </div>
            ))}
          </span>
          <span className="imageContainer w-full md:w-5/12 h-72 md:h-84 lg:h-96 bg-christin-grayLight">
            {
              data.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt="handsome young businessman suit"
                  className="w-full h-full object-fit object-contain"
                />
              ))
            }
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;

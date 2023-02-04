import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Carousel from 'react-multi-carousel';
import { projects } from './Data';

function Projects() {
  return (
    <div id="projects" className="projects container-fluid px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48 relative">
      <div className="flex flex-col space-y-4 md:space-y-10 pt-12">
        <div className="flex flex-col space-y-8">
          <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat pb-4 md:pb-8 border-b border-christin-primary">
            <h1 className="font-montserrat font-bold text-christin">
              Projects
              <span className="text-christin-secondary">.</span>
            </h1>
          </div>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="w-full h-full flex mt-8 lg:mt-12 z-10"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 639,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {
            projects.map((project) => (
              <div className="items flex flex-col space-y-6 sm:px-3 md:px-4" key={project.id}>
                <img src={project.image} alt={project.title} className="w-full h-56 lg:h-80 object-cover" />
                <div className="flex flex-col space-y-2">
                  <h1 className="text-lg md:text-xl lg:text-2xl text-christin font-medium font-montserrat">{project.title}</h1>
                  <p className="text-md md:text-lg text-clip font-light letter-spacing-4 font-montserrat text-christin-gray text-justify">{project.description}</p>
                  <div className="flex flex-row space-x-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="w-32 md:w-36 px-4 md:px-8 py-2 bg-christin-secondary flex flex-row justify-center items-center space-x-2 text-christin-white hover:text-christin text-md md:text-lg lg:text-xl font-montserrat font-light">
                      <FontAwesomeIcon icon={faGithub} />
                      <p>GitHub</p>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;

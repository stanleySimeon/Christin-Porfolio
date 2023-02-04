/* eslint-disable max-len */
import React from 'react';
import { activities } from './Data';

function Activity() {
  const [showMore, setShowMore] = React.useState(false);
  const [readMore, setReadMore] = React.useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  const firstThreeActivities = activities.slice(0, 3);
  const restOfActivities = activities.slice(3);

  return (
    <div id="activities" className="bg-christin-grayLight mt-1 activities container-fluid px-3 sm:px-8 md:px-16 lg:px-24 xl:px-36 2xl:px-48 relative">
      <div className="flex flex-col space-y-4 pb-8 md:pb-12 md:space-y-10 pt-12">
        <div className="flex flex-col space-y-8">
          <div className="w-full flex items-center text-ejs space-x-2 sm:space-x-4 md:space-x-6 text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat pb-4 md:pb-8 border-b border-christin-primary">
            <h1 className="font-montserrat font-bold text-christin">
              Activities
              <span className="text-christin-secondary">.</span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
          {
            firstThreeActivities.map((activity) => ((
              <div key={activity.id} className="flex flex-col space-y-4">
                <img src={activity.image} alt={activity.title} className="w-full h-64 object-cover" />
                <div className="flex flex-col space-y-2">
                  <h1 className="text-lg md:text-xl lg:text-2xl text-christin-secondary font-medium font-montserrat">{activity.title}</h1>
                  {
                    activity.description.length > 100 && (
                      <p className="text-md md:text-lg text-clip font-light letter-spacing-4 font-montserrat text-christin-gray text-justify">
                        {readMore ? activity.description : `${activity.description.substring(0, 100)}...`}
                        <button type="button" onClick={toggleReadMore} className="text-christin-secondary font-light">
                          {readMore ? 'Show less' : 'Read more'}
                        </button>
                      </p>
                    )
                  }
                </div>
              </div>
            )))
          }
          {
            showMore && restOfActivities.map((activity) => ((
              <div key={activity.id} className="flex flex-col space-y-4">
                <img src={activity.image} alt={activity.title} className="w-full h-64 object-cover" />
                <div className="flex flex-col space-y-2">
                  <h1 className="text-lg md:text-xl lg:text-2xl text-christin-secondary font-medium font-montserrat">{activity.title}</h1>
                  <p className="text-md md:text-lg text-clip font-light letter-spacing-4 font-montserrat text-christin-gray text-justify">
                    {readMore ? activity.description : `${activity.description.substring(0, 100)}...`}
                    <button type="button" onClick={toggleReadMore} className="text-christin-secondary font-light">
                      {readMore ? 'Show less' : 'Read more'}
                    </button>
                  </p>
                </div>
              </div>
            )))
          }
        </div>
        <button type="button" onClick={toggleShowMore} className="text-lg text-christin-secondary font-light">
          {showMore ? 'Show less' : 'Show more '}
        </button>
      </div>
    </div>
  );
}

export default Activity;

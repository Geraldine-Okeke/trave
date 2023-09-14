import React from 'react';
import Places from './Places';
import date from './images/date.png';
import like from './images/like.png'
import love from './images/love.png'
import hate from './images/hate.png'
export default function RightSec3() {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl mb-4 text-center">My Schedule</h1>
      <div className="flex flex-col my-3 py-3">
        {Places.map((place, index) => (
          <div
            key={index}
            className="p-4 flex flex-col sm:flex-row border py-3 my-3 rounded-xl"
          >
            <div className="sm:w-1/4">
              <img
                src={place.image}
                alt={place.Name}
                className="w-24 h-24 object-cover rounded-lg mx-auto sm:mx-0"
              />
            </div>
            <div className="sm:w-3/4 flex flex-col sm:pl-4">
              <h3 className="text-lg font-bold mt-2 text-center sm:text-left">
                {place.Name}
              </h3>
              <div className="flex flex-row mt-2 sm:mt-0 items-center justify-center sm:justify-start">
                <img className="h-5 w-5" src={date} alt="date" />
                <span className="ml-2">{place.dateR}</span>
              </div>
              <div className='flex flex-row mx-auto  '>
                <img className='h-6 w-6 ' src={like} alt="emoji"/>
                <img className='h-6 w-6' src={love} alt="emoji"/>
                <img className='h-6 w-6' src={hate} alt="emoji"/>
                <span className='text-green-500 font-medium pl-2 h-4 w-4'>{place.rxn}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

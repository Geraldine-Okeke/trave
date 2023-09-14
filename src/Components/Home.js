import React from 'react';
import Left from './LEFT/Left';
import Middle from './MIDDLE/Middle';
import Right from './RIGHT/Right';

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-1 ">
      <div className="lg:col-span-1 md:col-span-1 ">
        <Left />
      </div>
      <div className="lg:col-span-2 md:col-span-1 mr-10 ml-0 flex">
        <Middle />
      </div>
      <div className="lg:col-span-1 md:col-span-1 ">
        <Right />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavIcon from './images/navigate.png';
import DsIcon from './images/dashboard.png';
import ticket from './images/ticket.png';
import favorite from './images/fav.png';
import msg from './images/msg.png';
import prom from './images/promotion.png';
import set from './images/settings.png';
import logout from './images/logout.png';
import arrow from './images/arrow.png';

const Left = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarClasses = `text-white w-64 h-full fixed top-0 z-50 ${
    isOpen ? 'left-0 bg-white' : '-left-64 bg-white text-white'
  } transition-all duration-300 ease-in-out`;

  const checkWindowWidth = () => {
    if (window.innerWidth < 1150) {
      setIsSmallScreen(true);
      setIsOpen(false);
    } else {
      setIsSmallScreen(false);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    checkWindowWidth();

    window.addEventListener('resize', checkWindowWidth);

    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  return (
    <div>
      {(isSmallScreen || window.innerWidth >= 800) && (
        <button
          onClick={toggleSidebar}
          className="lg:hidden md:hidden p-3 text-black focus:outline-none absolute -top-2 right-2"
          style={{
            display: isSmallScreen || window.innerWidth < 1024 ? 'block' : 'none',
          }}
        >
          Menu
        </button>
      )}

      {isOpen || isSmallScreen ? (
        <div className={sidebarClasses}>
          <nav className="mt-8" style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
          <div className="flex flex-row items-center">
              <h1 className="text-2xl font-bold text-black px-2">Travigo</h1>
              <img className="w-5 h-5 ml-2" src={NavIcon} alt="navicon" />
            </div>
            <ul>
              <li className="mb-1 py-2">
                <Link
                  to="#"
                  className="flex flex-row items-center rounded-xl py-5 px-2 hover:bg-green-500 hover:text-white "
                >
                  <img className="w-5 h-5 mr-2" src={DsIcon} alt="dashboard" />
                  <h1 className="font-bold text-black">Dashboard</h1>
                </Link>
              <li/>
              <li className="mb-1 py-2">
                <Link
                  to="#"
                  className="flex flex-row items-center rounded-xl py-5 px-2 hover:bg-green-500 hover:text-white hover:py-5"
                >
                  <img className="w-5 h-5 mr-2" src={ticket} alt="dashboard" />
                  <h1 className="font-bold text-black">My Tickets</h1>
                </Link>
             </li>
              <li className="mb-1 py-2">
                <Link
                  to="#"
                  className="flex flex-row items-center rounded-xl py-5 px-2 hover:bg-green-500 hover:text-white hover:py-5"
                >
                  <img className="w-5 h-5 mr-2" src={favorite} alt="dashboard" />
                  <h1 className="font-bold text-black">Favorite</h1>
                </Link>
              </li>
              <li className="mb-1 py-2">
                <Link
                  to="#"
                  className="flex flex-row items-center rounded-xl py-5 px-2 hover:bg-green-500 hover:text-white hover:py-5"
                >
                  <img className="w-5 h-5 mr-2" src={msg} alt="dashboard" />
                  <h1 className="font-bold text-black">Message</h1>
                </Link>
              </li>
              <li className="mb-1 py-2">
                <Link
                  to="#"
                  className="flex flex-row items-center rounded-xl py-5 px-2 hover:bg-green-500 hover:text-white hover:py-5"
                >
                  <img className="w-5 h-5 mr-2" src={prom} alt="dashboard" />
                  <h1 className="font-bold text-black">Promotions</h1>
                </Link>
              </li>
              <li className="mb-1 py-2">
                <Link
                  to="#"
                  className="flex flex-row items-center rounded-xl py-5 px-2 hover:bg-green-500 hover:text-white hover:py-5"
                >
                  <img className="w-5 h-5 mr-2" src={set} alt="dashboard" />
                  <h1 className="font-bold text-black">Settings</h1>
                </Link>
              </li>
              </li>
            </ul>
            <div className="bg w-full h-28 -ml-10 rounded-lg">
              <div className="flex flex-row text-xl px-2 font-bold">
                <span className="text-orange-500 mr-2">50%</span>
                <span>Discount</span>
              </div>
              <p className="text-sm">Get a discount for every</p>
              <p className="text-sm">learn More </p>
              <img className="w-4 h-5 ml-4" src={arrow} alt="arrow"/>
          </div>
          <Link
            to="#"
            className="flex flex-row items-center rounded-xl py-5 px-2 text-gray-500 text-sm hover:bg-green-500 hover:text-white hover:py-5"
          >
            <img className="w-5 h-5 mr-2" src={logout} alt="dashboard" />
            <h1 className="font-bold">Log Out</h1>
          </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default Left;

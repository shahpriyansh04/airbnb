import React from "react";
function Dropdown() {
  return (
    <div
      className="flex flex-col  h-screen text-md md:hidden  shadow-md dark:shadow-md bg-white dark:bg-dark-primary dark:text-dark-text  items-center  text-center"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <div className="pb-6 border-b ">
        <div
          className="text-bold text-xl text-gray-500 px-4 py-3 mt-4 cursor-pointer border-2 border-red-400 rounded-full dark:text-dark-text"
          tabindex="-1"
          id="user-menu-item-0"
        >
          Become a host
        </div>
        <div
          className="text-bold text-xl text-gray-500 px-4 py-3 mt-4 cursor-pointer border-2 border-red-400 rounded-full dark:text-dark-text"
          tabindex="-1"
          id="user-menu-item-1"
        >
          Profile
        </div>
        <div
          href="#"
          className="text-bold text-xl text-gray-500 px-4 py-3 mt-4 cursor-pointer border-2 border-red-400 rounded-full dark:text-dark-text"
          tabindex="-1"
          id="user-menu-item-2"
        >
          Sign out
        </div>
      </div>
      <div className="flex-grow w-screen bg-gray-200 dark:bg-dark-primary "></div>
    </div>
  );
}

export default Dropdown;

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "react-hook-tailwind-darkmode";
import { Popover } from "@headlessui/react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SunIcon,
  UsersIcon,
  MoonIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
function Header({ placeholder }) {
  const { theme, changeTheme } = useTheme();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberofGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,

    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
    setStartDate(new Date());
    setEndDate(new Date());
    setNumberOfGuests(1);
  };

  const search = () => {
    if (searchInput) {
      router.push({
        pathname: "/search",
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests: numberofGuests,
        },
      });
    }
    setSearchInput("");
  };

  return (
    <header className="sticky  top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 dark:bg-dark-primary ">
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto "
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="hidden md:inline-flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 dark:placeholder-dark-text dark:text-dark-text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon
          className="hidden md:inline h-8 md:mx-2 bg-red-400 text-white rounded-full p-2 cursor-pointer dark:text-dark-text"
          onClick={search}
        />
      </div>
      <div className="flex items-center justify-end -mx-24 sm:-mx-48 md:mx-0 space-x-4 text-gray-500 dark:text-dark-text">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden md:inline-flex h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="hidden md:inline h-6 cursor-pointer" />
          {theme === "light" ? (
            <MoonIcon
              onClick={() => {
                changeTheme();
              }}
              className="h-7 cursor-pointer hover:scale-110 transform transition ease-in"
            ></MoonIcon>
          ) : (
            <SunIcon
              onClick={() => {
                changeTheme();
              }}
              className="h-6 cursor-pointer hover:scale-110 transform transition ease-in"
            ></SunIcon>
          )}
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-6 rounded-lg">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4 mt-4">
            <h2 className="text-2xl flex-grow font-semibold dark:text-dark-text">
              Number of Guests
            </h2>
            <UsersIcon className="h-5 dark:text-dark-text" />
            <input
              value={numberofGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400 dark:bg-dark-primary"
            />
          </div>
          <div className="flex">
            <button
              className="flex-grow text-gray-500 dark:text-dark-text"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

import React from "react";
import { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "react-hook-tailwind-darkmode";
import { useScrollLock } from "@mantine/hooks";
import { Transition } from "@headlessui/react";
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
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
function Header({ placeholder }) {
  const { theme, changeTheme } = useTheme();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberofGuests, setNumberOfGuests] = useState(1);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useScrollLock(searchInput);
  useScrollLock(toggleDropdown);
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
    if (searchInput && startDate && endDate) {
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

  const handleToggleDropdown = () => {
    setSearchInput("");
    setToggleDropdown((toggleDropdown) => !toggleDropdown);
  };

  return (
    <div className="sticky top-0 z-50">
      <header
        className={`grid grid-cols-3 bg-white  md:shadow-md p-5 md:px-10 dark:bg-dark-primary ${
          toggleDropdown ? "" : "shadow-md"
        }`}
      >
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

        <SearchBar
          searchInput={searchInput}
          placeholder={placeholder}
          setSearchInput={setSearchInput}
          search={search}
        />
        <div className="flex items-center justify-end -mx-24 sm:-mx-48 md:mx-0 space-x-4 text-gray-500 dark:text-dark-text">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="hidden md:inline-flex h-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon
              onClick={handleToggleDropdown}
              className="h-6 md:hidden cursor-pointer outline-none"
            />
            <UserCircleIcon className="hidden md:inline h-6 cursor-pointer" />
            {theme === "light" ? (
              <MoonIcon
                onClick={() => {
                  changeTheme();
                }}
                className="h-6 cursor-pointer hover:scale-110 transition duration-500 ease-in-out rounded-full"
              ></MoonIcon>
            ) : (
              <SunIcon
                onClick={() => {
                  changeTheme();
                }}
                className="h-6 cursor-pointer hover:scale-110 transition duration-500 ease-in-out rounded-full"
              ></SunIcon>
            )}
          </div>
        </div>
      </header>
      <div className="shadow-md px-8 mx-auto pt-2 py-6 md:py-0 bg-white dark:bg-dark-primary dark:text-dark-text  ">
        {!toggleDropdown && (
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            search={search}
            show={true}
          />
        )}
      </div>
      {searchInput && (
        <div className="grid bg-white relative z-150 h-screen md:h-auto  md:shadow-md md:p-5 md:px-10 dark:bg-dark-primary">
          <div
            className="flex 
            flex-col col-span-3 mx-auto md:mt-0 rounded-lg bg-white
            dark:bg-dark-primary"
          >
            <div className="md:hidden">
              <DateRange
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5b61"]}
                onChange={handleSelect}
              />
            </div>
            <div className="hidden md:inline">
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5b61"]}
                onChange={handleSelect}
              />
            </div>
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
            <div className="flex justify-around items-center">
              <button
                className="text-2xl bg-transparent text-gray-500 dark:text-dark-text md:bg-transparent"
                onClick={resetInput}
              >
                Cancel
              </button>
              <button
                className="text-2xl bg-transparent text-red-400"
                onClick={search}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
      <Transition
        show={toggleDropdown}
        className="absolute z-200"
        enter="duration-200 ease-out"
        enterFrom="-translate-x-5"
        enterTo="translate-x-0"
        leave="duration-200 ease-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-80"
      >
        <Dropdown />
      </Transition>
    </div>
  );
}

export default Header;

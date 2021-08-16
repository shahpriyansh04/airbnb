import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SunIcon,
  UsersIcon,
  MoonIcon,
} from "@heroicons/react/solid";
export default function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <div>
      {theme === "light" ? (
        <MoonIcon
          onClick={() => {
            setTheme("dark");
          }}
          className="h-6 cursor-pointer hover:scale-110 transition duration-500 ease-in-out rounded-full"
        ></MoonIcon>
      ) : (
        <SunIcon
          onClick={() => {
            setTheme("light");
          }}
          className="h-6 cursor-pointer hover:scale-110 transition duration-500 ease-in-out rounded-full"
        ></SunIcon>
      )}
    </div>
  );
}

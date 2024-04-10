import React from "react";
import { Menu, MenuItem } from "@radix-ui/react-menu";
import { CheckIcon } from "@radix-ui/react-icons";

const HeaderTest = () => {
  return (
    <header className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      <div className="text-white text-xl font-bold">My Website</div>
      <nav className="space-x-4 hidden md:flex items-center">
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          Services
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          Contact
        </a>
      </nav>
      <Menu>
        <Menu.Button variant="ghost" className="text-white">
          Menu <CheckIcon className="w-5 h-5 ml-1" />
        </Menu.Button>
        <Menu.Content className="bg-gray-800 shadow-lg rounded-md mt-2 py-2 w-48 absolute right-0">
          <MenuItem className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300">
            <a href="#">Home</a>
          </MenuItem>
          <MenuItem className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300">
            <a href="#">About</a>
          </MenuItem>
          <MenuItem className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300">
            <a href="#">Services</a>
          </MenuItem>
          <MenuItem className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-300">
            <a href="#">Contact</a>
          </MenuItem>
        </Menu.Content>
      </Menu>
    </header>
  );
};

export default HeaderTest;

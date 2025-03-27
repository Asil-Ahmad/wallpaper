import React from "react";
import { Link } from "react-router-dom";
import Button from "../constant/Button";

const Navbar = () => {
  return (
    <header className='bg-black/80 sticky top-0 text-white'>
      <nav className=" w-full m-auto max-w-[300px]  flex justify-between items-center p-1">
        <Link to='/' className='px-4 py-2 rounded-md hover:text-gray-200 hover:underline'>
        Ramadan
        </Link>
        <Link to='/alvida' className='px-4 py-2 rounded-md hover:text-gray-200 hover:underline'>
          Alvida
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

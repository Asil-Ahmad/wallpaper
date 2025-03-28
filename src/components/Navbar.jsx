import React, { useState, useEffect, useRef, use } from "react";
import { Link } from "react-router-dom";
import Button from "../constant/Button";

const Navbar = () => {
  const container = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
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
    // <div className='menu-container' ref={container}>
    //   <div className='menu-bar'>
    //     <div className='menu-logo'>
    //       <Link href='/' className=''>ASIL</Link>
    //     </div>
    //     <div className='menu-open' onClick={toggleNav}> 
    //       <p>Menu</p>
    //     </div>
    //   </div>
    //   <div className='menu-overlay'>
    //     <div className='menu-overlay-bar'>
    //       <div className='menu-logo'>
    //         <Link href='/' className=''>ASIL</Link>
    //       </div>
    //       <div className='menu-close' onClick={toggleNav}>
    //         <p>Close</p>
    //       </div>
    //     </div>
    //     <div className='menu-close-icon'>
    //       <p>X</p>
    //     </div>
    //     <div className='menu-copy'>
    //       <div className='menu-links'>
    //         {menuLinks.map((link, index) => (
    //           <div className='menu-link-item' key={index}>
    //             <div className='menu-link-item-holder' onClick={toggleNav}>
    //               <Link href={link.link} className='menu-link '>
    //                 {link.title}
    //               </Link>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //       <div className='menu-info'>
    //         <div className='menu-info-col'>
    //           <a href='#'>X</a>
    //           <a href=''>Hello</a>
    //           <a href=''>Hello</a>
    //           <a href=''>Hello</a>
    //           <a href=''>Hello</a>
    //         </div>
    //         <div className='menu-info-col'>
    //           <p>@email</p>
    //           <p>@email</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='menu-preview'>
    //       <p>Show reels</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;

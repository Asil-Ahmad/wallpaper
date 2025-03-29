import React, { useState, useEffect, useRef, use } from "react";
import { Link } from "react-router-dom";
import Button from "../constant/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const container = useRef();
  const tl = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isNavOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isNavOpen]);

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
    //       <Link href='/'>ASIL</Link>
    //     </div>
    //     <div className='menu-open'>
    //       <p onClick={toggleNav}>Menu</p>
    //     </div>
    //   </div>
    //   <div className='menu-overlay'>
    //     <div className='menu-overlay-bar'>
    //       <div className='menu-logo'>
    //         <Link href='/' className=''>
    //           ASIL
    //         </Link>
    //       </div>
    //       <div className='menu-close' >
    //         <p className='z-50' onClick={toggleNav}>Close</p>
    //       </div>
    //     </div>
    //     <div className='menu-close-icon'>
    //       <p className=''>&#x2715;</p>
    //     </div>
    //     <div className='menu-copy'>
    //       <div className='menu-links'>
    //         {menuLinks.map((link, index) => (
    //           <div className='menu-link-item' key={index}>
    //             <div className='menu-link-item-holder' >
    //               <Link href={link.link} onClick={toggleNav} className='menu-link '>
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

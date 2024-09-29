"use client";
import useSize from "./utils/useSize";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
const menu = [
  {
    title: "My work",
    href: "/my-work",
  },
  {
    title: "Case study",
    href: "/case-study",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  useLayoutEffect(() => {
    function handleResize() {
      // 640px is the 'sm' breakpoint in Tailwind
      if (window.innerWidth >= 640) setNavOpen(false);
    }
    function handleClicks(event: MouseEvent) {
      //Close navmenu if click outside the unordered list is registered
      if (ulRef.current && !ulRef.current.contains(event.target as Node))
        setNavOpen(false);
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClicks);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClicks);
    };
  }, []);

  //Our compeonent for the navItems in navbar
  function NavItems({ className }: { className: string }) {
    return (
      <ul ref={ulRef} className={`${className} gap-4 items-center `}>
        {menu.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav
      ref={navRef}
      className="w-full h-24 shadow-xl flex bg-white justify-between items-center px-8 2xl:px-16"
    >
      <Link href="/">
        <div>home</div>
      </Link>
      <NavItems className="hidden h-full sm:flex" />

      {navOpen && (
        <NavItems className="flex flex-col sm:hidden fixed justify-center left-0 top-0 w-[76%] h-full bg-[#ecf0f3] ease-in duration-500" />
      )}
      <button onClick={toggleNav} className="sm:hidden cursor-pointer ">
        {!navOpen ? <SlMenu /> : <GrClose />}
      </button>
    </nav>
  );
};

export default Navbar;

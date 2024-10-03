"use client";
import { Link } from "@chakra-ui/next-js";
import { useLayoutEffect, useRef, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { GrClose } from "react-icons/gr";
import { Text } from "@chakra-ui/react";
const menu = [
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "About",
    href: "/#about",
  },
  // {
  //   title: "Case study",
  //   href: "/case-study",
  // },
  {
    title: "Contact",
    href: "/#contact",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  function toggleNav(event: React.MouseEvent) {
    event.stopPropagation();
    setNavOpen(!navOpen);
  }

  //Hook handles closing mobile menu on events when resize or clicks outside of it
  useLayoutEffect(() => {
    function handleResize() {
      // 640px is the 'sm' breakpoint in Tailwind
      if (window.innerWidth >= 640) setNavOpen(false);
    }
    function handleClicks(event: MouseEvent) {
      //Close navmenu on any click execept for ul and button
      //Don't close if ul or button is clicked.
      if (
        ulRef.current &&
        !ulRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      )
        setNavOpen(false);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", handleClicks);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleClicks);
    };
  }, []);

  function NavItems({ className }: { className: string }) {
    return (
      <ul ref={ulRef} className={`${className} gap-4 items-center `}>
        {menu.map((item, i) => (
          <li key={i}>
            <Link
              fontWeight="600"
              scrollBehavior="smooth"
              fontSize="17px"
              onClick={() => setNavOpen(false)}
              _hover={{ color: "primary.400" }}
              transition="color 0.24s ease"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <nav className="w-full shadow-[0_0_10px_rgba(0,0,0,0.09)] flex bg-white justify-between items-center z-50 px-6  sm:px-12 relative sm:py-4">
      <Link
        href="/"
        padding="2"
        variant="plain"
        _hover={{ textDecoration: "none" }}
      >
        <Text fontWeight="700" fontSize="xl">
          arob.dev
        </Text>
      </Link>
      <NavItems className="hidden h-full sm:flex left-[100%]" />

      {navOpen && (
        <NavItems className="flex flex-col sm:hidden fixed justify-center left-0 top-0 w-[76%] h-full bg-[#ecf0f3] ease-in duration-500" />
      )}
      <button
        ref={btnRef}
        onClick={toggleNav}
        className="sm:hidden p-1.5 font-black cursor-pointer text-xl outline-2 outline-yellow-900 hover:bg-yellow-400 hover:text-white"
      >
        {!navOpen ? <SlMenu /> : <GrClose />}
      </button>
    </nav>
  );
};

export default Navbar;

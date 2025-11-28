import { useState } from "react";
import { navLists } from "./nav-lists";

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const handleClick = () => {
    setNavToggle((prev) => !prev); // toggle state
  };

  return (
    <nav className="w-full z-20 relative h-fit">
      <div className="navbar mb-10 md:mb-30">
        {/* Logo */}
        <div className="logo">Travely</div>

        {/* Desktop nav-list */}
        <div className="hidden md:block">
          <div className="links flex justify-center items-center">
            <ul className="nav-links flex justify-between">
              {navLists.map((list, index) => {
                const lowerList = list.toLowerCase();

                const handleClick = () => {
                  const scrollable = [
                    "features",
                    "pricing",
                    "testimonials",
                    "blogs",
                  ];

                  if (scrollable.includes(lowerList)) {
                    const section = document.getElementById(lowerList);
                    section?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                };
                return (
                  <li key={index} onClick={handleClick}>
                    {list}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => {
                const section = document.getElementById("get-started");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="btn-nav shadow-md outline-none md:ml-8 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Hamburger menu */}
        <div
          onClick={handleClick}
          className="hamburger shadow-md md:hidden cursor-pointer flex flex-col gap-1.5 z-30"
        >
          {/* Top bar */}
          <div
            className={`hamburger-top h-[2.5px] w-7 rounded transition-all duration-300 ${
              navToggle ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>

          {/* Middle bar */}
          <div
            className={`hamburger-middle h-[2.5px] w-7 rounded transition-all duration-300 ${
              navToggle ? "opacity-0" : "opacity-100"
            }`}
          ></div>

          {/* Bottom bar */}
          <div
            className={`hamburger-bottom h-[2.5px] w-7 rounded transition-all duration-300 ${
              navToggle ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={` w-full md:hidden overflow-hidden transition-all duration-300  ${
          navToggle ? "py-12" : "max-h-0 py-0"
        }`}
      >
        <ul className="nav-links flex flex-col justify-center items-center px-4">
          {navLists.map((lists, index) => {
            const lowerList = lists.toLowerCase();
            // const handleClick = () => {
            //   const scrollable = [
            //     "features",
            //     "pricing",
            //     "testimonials",
            //     "blogs",
            //   ];

            //   if (scrollable.includes(lowerList)) {
            //     const section = document.getElementById(lowerList);
            //     section?.scrollIntoView({ behavior: "smooth", block: "start" });
            //   }

            //   setNavToggle(false);
            // };

            // const handleClick = () => {
            //   if (
            //     lowerList === "features" ||
            //     lowerList === "pricing" ||
            //     lowerList === "testimonials" ||
            //     lowerList === "blogs"
            //   ) {
            //     const section = document.getElementById(lowerList);
            //     section?.scrollIntoView({ behavior: "smooth", block: "start" });
            //   }
            // };
            const handleClick = () => {
              const isValidSection = [
                "features",
                "pricing",
                "testimonials",
                "blogs",
              ].includes(lowerList);

              if (isValidSection) {
                const section = document.getElementById(lowerList);
                section?.scrollIntoView({
                  behavior: "smooth",
                  block: "start", // ⬅ scroll to top
                });
              }
            };
            return (
              <li
                key={index}
                onClick={() => {
                  handleClick();
                }}
              >
                {lists}
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => {
            const section = document.getElementById("get-started");
            section?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="btn-nav shadow-md outline-none mt-8 w-fit mx-auto cursor-pointer"
        >
          Get Started
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import { navLists } from "./nav-lists";
import { useNavigate } from "react-router";

export default function Header() {
  const [navToggle, setNavToggle] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setNavToggle((prev) => !prev); // toggle state
  };

  const navigateAndScroll = (sectionId) => {
    navigate("/");

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 200); // slight delay to allow page render
  };

  return (
    <nav className="header w-full z-20 relative h-fit  border">
      <div className="header-container">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="logo cursor-pointer">
          Travely
        </div>

        {/* Desktop nav-list */}
        <div className="hidden md:block">
          <div className="links flex justify-center items-center">
            <ul className="nav-links flex justify-between">
              {navLists.map((list, index) => {
                const lowerList = list.toLowerCase();
                return (
                  <li
                    key={index}
                    onClick={() => {
                      navigateAndScroll(lowerList);
                    }}
                  >
                    {list}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => {
                setNavToggle(false);
                navigateAndScroll("get-started");
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
        className={`menu-list w-full md:hidden overflow-hidden transition-all duration-300  ${
          navToggle ? "py-12" : "max-h-0 py-0"
        }`}
      >
        <ul className="nav-links flex flex-col justify-center items-center px-4">
          {navLists.map((lists, index) => {
            const lowerList = lists.toLowerCase();
            return (
              <li
                key={index}
                onClick={() => {
                  setNavToggle(false);
                  navigateAndScroll(lowerList);
                }}
              >
                {lists}
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => {
            setNavToggle(false);
            navigateAndScroll("get-started");
          }}
          className="btn-nav shadow-md outline-none mt-8 w-fit mx-auto cursor-pointer"
        >
          Get Started
        </div>
      </div>
    </nav>
  );
}

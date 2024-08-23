import { Link } from 'react-router-dom';
import { routes } from "./navRoutes";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  const handleLinkClick = () => {
    // Only close the menu
    setOpen(false);
    // The default link behavior will occur naturally
  };

  return (
    <div ref={ref} className="fixed top-0 w-full z-50 bg-[#F9F5F0] h-[80px]">
      {isOpen && (
        <>
          {/* Menu */}
            <ul className="grid gap-2 fixed left-5 top-20 h-[100px] z-50">
              {routes.map((route) => {
                return (
                  <li key={route.title}>
                    <Link
                      to={route.href}
                      className="flex items-center justify-between w-full p-4 max-md:p-2"
                      onClick={handleLinkClick}
                    >
                      <span
                        className={`flex 
                          text-5xl 
                          uppercase
                          text-white hover:text-[#c45e31]
                          max-sm:text-3xl
                          max-md:text-4xl
                          font-black
                          transition-colors
                        `}
                      >
                        {route.title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setOpen(false)}
          ></div>
        </>
      )}
      
      <div className="relative flex justify-center items-center z-50 top-5">
        <Hamburger
          toggled={isOpen}
          size={30}
          toggle={setOpen}
          color={isOpen ? "white" : "#3c392b"}
        />
        <Link
          to="/"
        >
        <h1 
        className={`text-2xl font-black ml-5 transition-colors 
        duration-500 ${isOpen ? "text-white" : "text-[#3c392b]"} hover:text-[#c45e31] hover:duration-0`}
        onClick={() => setOpen(false)}
        >
           YATE</h1>
        </Link>
      </div>
    </div>
  );
};
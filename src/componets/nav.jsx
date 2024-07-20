import { navLinks } from "../constants";
import { logo,  name, close, menu } from "@/assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%" },
  };

  return (
    <nav className="w-full flex items-center py-2 fixed top-0 bg-transparent bg-white border-black bg-pattern z-20 px-4 md:px-8">
      <div className="w-full flex items-center justify-between max-w-[1600px] mx-auto">
        <Link
          to="/"
          className="flex pl-10 items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-7  h-7 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-13  object-contain  rounded-sm"
          />
          <img
            src={name}
            alt="name"
            className="w-32 xs:w-28 sm:w-28 sm:ml-1  md:ml-1 md:w-28 object-contain rounded-sm"
          />
        </Link>

        <ul className="list-none font-bold hidden sm:flex flex-row justify-center items-center gap-4 md:gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-blue-950" : "text-black"
              } hover:text-black text-sm md:text-base lg:text-lg font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <li>
            <Link to="/login">
              <button className="px-3 py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium sm:font-semibold md:font-bold lg:font-extrabold border border-transparent bg-red-600 hover:bg-red-700 text-white rounded-md">
                Login
              </button>
            </Link>
          </li>
        </ul>

        <div className="sm:hidden absolute flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
                className="p-6 absolute top-16 left-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-white shadow-lg"
              >
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title
                          ? "bg-black text-white"
                          : "text-blue-950"
                      } font-medium cursor-pointer text-base`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Link to="/login " className="sm:hidden  h-full flex  justify-center items-center">
          <button className="mt-4 px-3 py-2 text-sm md:text-base font-semibold bg-red-500 hover:bg-blue-600 text-white rounded-md">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

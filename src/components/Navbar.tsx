import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { logo } from "../assets/images";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  const [isScrolledUp, setIsScrolledUp] = useState(true);

  // Detect scroll direction
  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > lastScrollY) {
      // User is scrolling down, hide navbar
      setIsScrolledUp(false);
    } else {
      // User is scrolling up, show navbar
      setIsScrolledUp(true);
    }
    setLastScrollY(y); // Update the last scroll position
  });
  return (
    <motion.div
      animate={isScrolledUp ? "visible" : "hidden"}
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed  inset-x-0  z-10 flex flex-col md:h-[125px] lg:h-[125px] border-2  bg-white mx-auto top-0 "
    >
      <div className="hidden md:flex lg:flex justify-between px-8 ">
        <ul className="flex space-x-4">
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 "
          >
            About us
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 "
          >
            Student corner
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 "
          >
            French version
          </motion.li>
        </ul>
        <motion.p className=" ease-out duration-100 rounded-md">
          10+ years of experience
        </motion.p>
      </div>
      <div className="flex justify-between items-center py-4 px-8 ">
        <img
          src={logo}
          alt="logo"
          className="h-[30px] md:h-[50px] lg:h-[50px]"
        />
        <ul className="hidden md:flex lg:flex space-x-4">
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 p-2"
          >
            Home
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 p-2"
          >
            Training
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 p-2"
          >
            Companies
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 p-2"
          >
            Education
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 p-2"
          >
            Job-Seekers
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 p-2"
          >
            Entrepreneurs
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer hover:text-red-500 hover:border-b hover:border-red-500 p-2"
          >
            Contact Us
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;

"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import BackArrow from "@/components/atoms/BackArrow";
import UpArrow from "@/components/atoms/UpArrow";
import Carousel from "@/components/molecules/Carousel";

const Sidebar = ({ details, isOpen, toggleOpen }) => {
  const { title, type, dimensions, description } = details;

  const [detailsHeight, setDetailsHeight] = useState("76%");

  const dimensionsRef = useRef(null);

  let isMobile = true;

  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 768;
  }

  const axesToMove = isMobile ? "y" : "x";

  useEffect(() => {
    dimensionsRef.current;
    setDetailsHeight(dimensionsRef.current.clientHeight - 235);
  }, [dimensionsRef]);

  return (
    <motion.div
      ref={dimensionsRef}
      initial={{ [axesToMove]: isMobile ? "100%" : "-100%" }}
      animate={{
        [axesToMove]: isMobile
          ? // mobile
            isOpen
            ? detailsHeight
            : "0%"
          : // desktop
          isOpen
          ? "0%"
          : "100%",
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full md:w-80 h-full bg-[white] bg-opacity-70 backdrop-filter z-50 shadow-xl"
    >
      <div className="p-4 md:mt-8">
        <div className="relative md:right-[.8rem] flex items-center justify-center h-10 w-10 focus:outline-none focus:bg-crimson hover:bg-crimson hover:text-cream p-0 px-2 md:p-8 rounded-full cursor-pointer">
          <Link href="/">
            <BackArrow />
          </Link>
        </div>
      </div>

      <div className="p-4 pt-2 md:pt-4">
        <div className="flex flex-row justify-between">
          <h1 className={`t2`}>{title}</h1>
          <div className="flex md:hidden items-center h-full justify-center px-5 py-3 mt-3 rounded-full border border-charcoal-a">
            <UpArrow
              onClick={() => toggleOpen()}
              className={`${isOpen ? "" : "rotate-180"} transition ease-in-out`}
            />
          </div>
        </div>
        <div className="mb-4 b1">
          <p>{type}</p>
          <p className="b2">{dimensions}</p>
        </div>
        <div>
          <p
            className={`${isMobile && isOpen ? "opacity-0" : "opacity-1"} 
              transition ease-in-out b2 delay-200 duration-300`}
          >
            {description}
          </p>
        </div>
        <div className="absolute bottom-0">
          <Carousel
            images={[
              {
                id: "O1",
                src: "/img/splash.png",
              },
              {
                id: "O2",
                src: "/img/coming-soon.png",
              },
              {
                id: "O3",
                src: "/img/coming-soon.png",
              },
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

/**
 * The `Navbar` function in this JavaScript React code defines a responsive navigation bar component
 * with links, icons, and user authentication features.
 */
"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineAlignRight } from "react-icons/ai";
import { GiWrappedSweet } from "react-icons/gi";
import { TbUserSearch } from "react-icons/tb";
import Link from "next/link";
// import { useSelector } from "react-redux";
// import { RootState } from "@/app/StateManagement/store";
import Cookies from "js-cookie";
import { Badge, Button} from "antd";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import { FcTimeline } from "react-icons/fc";
import { TbShoppingCartSearch } from "react-icons/tb";
import { Dancing_Script } from "next/font/google";


const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

function Navbar() {



  const [userName ,setUsername] = useState(null)
  const pathname = usePathname();
  
  let NavValue = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/product" },
    { name: "About Us", link: "/about-us" },
    { name: "Contacts", link: "/contact-us" },
  ];

  const [toggle, setToggle] = useState(false);

  function clickToggle() {
    setToggle(!toggle);
  }
  // const cardValue = useSelector(state => state.counter.value);
  const cardValue = null;


  useEffect(() => {   
    setUsername(Cookies.get("username"))
  }, [])
  

  const iconRef = useRef(null);

  useEffect(() => {
    gsap.to(iconRef.current, {
      y: 20, // Moves the icon 10px up
      repeat: -1, // Infinite repeat
      yoyo: true, // Makes the animation reverse
      duration: 1.5, // Duration of the animation
      ease: "circ.in", // Smooth easing
    });
  }, []);

  return (
    // 14100b
    // bg-[#14100b]
    // bg-neutral-950
    <div>
      <div className="backgroundColorMain antialiased">
        <div className="">
          <div className=" text-white">
            <div className="flex justify-between items-center w-[92%]  mx-auto">
              <div>
                <div className={dancing_Script.className}>
                  <div className="py-4  flex">
                    <div
                      ref={iconRef}
                      className="text-4xl text-white mr-2"
                      style={{ filter: "hue-rotate(180deg)" }}
                    >
                      {/* Replace this with your icon (could be an <img> or <svg> as well) */}
                      <FcTimeline />
                    </div>
                    <Link href="/" className="cursor-pointer">
                   
                    <div>
                      <div className="flex flex-row">
                        <div className="font-thin text-2xl">Muslim Sweets</div>
                        <div>
                          {" "}
                          <GiWrappedSweet className="text-amber-400"></GiWrappedSweet>
                        </div>
                      </div>

                      <small className="text-amber-400">
                        Sweets & Chocolets
                      </small>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  "nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0  md:w-auto  w-full flex items-center px-5",
                  {
                    "top-[-100%]": toggle == false,
                    "top-[30%]  bg-stone-800 text-white": toggle == true,
                  }
                )}
              >
                <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                  {NavValue?.map((nav, i) => (
                    <div key={i}>
                      {/* <a className="hover:text-gray-500" href="#"> */}
                      <Link
                        className={`${
                          pathname === nav?.link ? "text-yellow-500" : ""
                        }`}
                        href={nav?.link}
                      >
                        {" "}
                        {nav?.name}
                      </Link>

                      <span className="text-xs font-thin text-amber-400 hover:text-red-600">
                        +
                      </span>
                      {/* </a> */}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 text-amber-300 ">
                <div>
                  {!userName && (
                    <Link href={"/login"}>
                      <TbUserSearch size={22} />
                    </Link>
                  )}
                </div>
                <div>
                  <Badge
                    // badgeContent={userName ? cardValue?.length || 0 : null}
                    color="error"
                    className="text-amber-300"
                  >
                    <Link href={"/card"}>
                      <TbShoppingCartSearch size={22} />
                    </Link>
                  </Badge>
                </div>

                <div
                  onClick={clickToggle}
                  className="text-3xl cursor-pointer md:hidden"
                >
                  {toggle ? (
                    <AiOutlineClose></AiOutlineClose>
                  ) : (
                    <AiOutlineAlignRight></AiOutlineAlignRight>
                  )}
                </div>
                <div>
                  {userName && (
                    <Button className="text-yellow-200 bg-slate-700">{userName}</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BackgroundBeams></BackgroundBeams> */}
    </div>
  );
}

export default Navbar;


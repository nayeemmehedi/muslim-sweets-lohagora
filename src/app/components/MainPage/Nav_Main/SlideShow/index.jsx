"use client";

import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Dancing_Script } from "next/font/google";
import "../../../../style/slider.css";
import { imagesSlide } from "../../../../extra/JsonFile/JsonFile";
import Link from "next/link";

const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

const SlideShow = () => {
  return (
    <div className="backgroundColorMain">
      <div>{/* <img src={allsweet.src}  width="200" alt="" ></img> */}</div>
      <Zoom duration={1200} scale={1.4} indicators={true}>
        {imagesSlide.map((each, index) => (
          <div key={index}>
            <div
              className="value object-cover"
              style={{
                backgroundImage: `url(${each.pic.src})`,
                width: "100%",
                minHeight: "600px",
              }}
            ></div>

            <div className={dancing_Script.className}>
              <div className="content">
                <p className="text-4xl text-white ">{each.content_h1}</p>
                <p className="text-amber-400">{each.content_h2}</p>
                <p className="mt-5 text-red-100 ">{each.content_p}</p>
                <Link href={"/product"}>
                  <button className="text-amber-400 my-3 border border-amber-400 p-3 rounded">
                    {" "}
                    ONLINE STORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default SlideShow;

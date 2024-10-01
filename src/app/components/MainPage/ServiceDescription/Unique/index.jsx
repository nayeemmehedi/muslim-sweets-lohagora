"use client";

import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { Dancing_Script } from "next/font/google";
const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

function Unique() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image:
              // "https://c8.alamy.com/comp/A07MRH/sweets-on-display-in-bakery-in-dhaka-bangladesh-A07MRH.jpg",
              "https://roshbd.com/wp-content/uploads/photo-gallery/BAB_5438aaaa.jpg",
            speed: -20,
            style: {
              objectFit: "cover", // or "contain" depending on how you want it to scale
              objectPosition: "center", // controls which part of the image is centered
            },
          },
          {
            speed: -15,
            children: (
              <div className={dancing_Script.className}>
                <div className="absolute inset-0 flex items-center justify-center  ">
                  <div className="text-4xl text-center ">
                    <div className="text-amber-600 lg:w-[60]">
                      স্বাদ উপভোগ করুন যা <span className="text-green-950 text-2xl">পরিবারকে একসাথে</span> আনে। প্রতিটি উৎসবে
                      বেছে নিন{" "}
                      <span className="text-red-800">মুসলিম সুইটস</span>।
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          //   { image: "https://media.istockphoto.com/id/1143856977/photo/dim-sum-buffet.webp?s=170667a&w=0&k=20&c=U31fdys8fk_PUmNb619ZfKFFv1IvfVxK_17VWLzYIMk=", speed: -10 },
        ]}
        className="aspect-[2/1]"
      ></ParallaxBanner>
    </ParallaxProvider>
  );
}
export default Unique;

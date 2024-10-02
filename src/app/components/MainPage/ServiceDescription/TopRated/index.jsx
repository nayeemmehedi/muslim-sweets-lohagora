"use client";

import * as React from "react";
import { Dancing_Script } from "next/font/google";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { value } from "../OnlineStore";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const inter = Dancing_Script({ subsets: ["latin"], weight: "400" });

function TopRated() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  return (
    <div className={inter.className}>
      <div className="text-center text-teal-900 py-4 text-4xl font-bold">
        Top Rated<span className="text-red-800"> Product</span>
      </div>
      <div className="w-[90%] mx-auto overflow-hidden">
        <Carousel plugins={[plugin.current]} className="w-full">
          <CarouselContent className="flex gap-4"> {/* Ensure proper gap between items */}
            {value?.map((v, index) => (
              <CarouselItem
                key={index}
                className={`flex-shrink-0 ${
                  index === 0 || index === 3 ? "md:basis-1/3" : "md:basis-1/2"
                } lg:basis-1/4`} 
              >
                <Card>
                  <CardContent>
                    <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-white my-3">
                      {/* Image Section */}
                      <div className="relative h-64 w-full">
                        <Image
                          src="/img/sweets/malai.jpg" // Replace with your product image
                          alt="Malai Sweet"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4">
                        {/* Product Names */}
                        <div className="text-center mb-4">
                          <h2 className="text-2xl font-bold text-gray-800">
                            মালাই
                          </h2>
                          <h3 className="text-lg text-gray-500">Malai</h3>
                        </div>
                        <div className="text-2xl text-center font-semibold text-red-600">
                          $15
                        </div>

                        {/* Price and Rating */}
                        <div className="flex justify-center items-center mb-4">
                          <div className="flex items-center">
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-gray-300" />
                            <span className="ml-2 text-sm text-gray-600">
                              (4.0)
                            </span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="text-center my-3">
                          <button className="py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300 px-5">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default TopRated;

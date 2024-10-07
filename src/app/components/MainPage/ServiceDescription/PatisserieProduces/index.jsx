import React from "react";
import { Dancing_Script } from "next/font/google";
import { IoLanguageOutline } from "react-icons/io5";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

function PatisserieProduct() {
  return (
    <div className={`${dancing_Script.className} backgroundColorMain`}>
      {/* Header Section */}
      <div className="pt-5">
        <p className="text-2xl sm:text-3xl lg:text-5xl text-white text-center">
          WELCOME <span className="text-red-800">TO</span> MUSLIM SWEETS
          <br />
          <span>& Chocolets</span>
        </p>
        <hr className="mt-4 lg:mt-10 w-3/4 sm:w-1/2 mx-auto border-gray-300" />
      </div>

      {/* Main Content Section */}
      <div className="px-4 py-8 sm:py-12 ">
        <div className=" flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between ">
          {/* Image Section */}
          <div className="lg:w-[45%] w-full flex justify-center " style={{objectFit:"cover"}}>
            <Image
              className="rounded-lg"
              src="/img/sweets/malai.jpg"
              alt="Blurred Image"
              height={400}
              width={400}
              
            />
          </div>

          {/* Text Section */}
          <div className="text-white lg:w-[50%]  ">
            <p className="text-lg sm:text-xl">
              Our patisserie produces{" "}
              <span className="text-amber-300">unique sweets </span> for lovers
              of yummy. Excellent product quality, upscale presentation &
              uncompromised service.
            </p>
            <p className="my-6 sm:my-8 text-lg sm:text-xl">
              Excellent product quality, upscale presentation & uncompromised
              service eventually built its own momentum, through referrals.
            </p>
            <p className="text-base sm:text-lg">
              Otherwise, your identity as our patron, would be vague and{" "}
              <span className="text-amber-400">
                the brand would become commoditized.
              </span>
            </p>
            <p className="mt-6 sm:mt-8 text-2xl sm:text-3xl">
              Learn More <span className="text-red-800 ">About Us</span>...
            </p>
            <Link href="about-us">
              <Button className="px-5 my-4" variant="destructive">
                About Us{" "}
              </Button>
            </Link>
          </div>
        </div>

        {/* Icon Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 ">
          <div className="flex items-center text-white">
            <IoLanguageOutline className="text-amber-300" size={40} />
            <div className="ml-4">
              <p className="text-lg sm:text-xl">Natural Organic Product.</p>
              <p className="text-sm sm:text-base mt-2">
                Vivamus vel magna non mi gravida ultr sed ut turpis.
              </p>
            </div>
          </div>

          <div className="flex items-center text-white">
            <IoLanguageOutline className="text-amber-300" size={40} />
            <div className="ml-4">
              <p className="text-lg sm:text-xl">Premium Quality Ingredients.</p>
              <p className="text-sm sm:text-base mt-2">
                Vivamus vel magna non mi gravida ultr sed ut turpis.
              </p>
            </div>
          </div>

          <div className="flex items-center text-white">
            <IoLanguageOutline className="text-amber-300" size={40} />
            <div className="ml-4">
              <p className="text-lg sm:text-xl">Handcrafted with Care.</p>
              <p className="text-sm sm:text-base mt-2">
                Vivamus vel magna non mi gravida ultr sed ut turpis.
              </p>
            </div>
          </div>
        </div>

        <div className="text-white mt-12 text-2xl sm:text-3xl text-center">
          Quality 100% <span className="text-amber-300">Pure...</span>
        </div>
      </div>
    </div>
  );
}

export default PatisserieProduct;

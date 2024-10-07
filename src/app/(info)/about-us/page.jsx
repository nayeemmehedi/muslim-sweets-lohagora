import React from "react";
import sweet from "/public/img/sweets/sweets2.jpg";
import Image from "next/image";

function AboutUs() {
  return (
    <div  >
      <div className="h-[200px] w-full bg-rose-900 grid content-center ">
        <p className="ms-10 mt-10 text-5xl font-bold text-white ">About Us</p>
      </div>
      <div className="w-[70%] ml-auto mr-auto py-10">
        <div className="flex">
         <div>
         <Image src={sweet} alt="" width={800} height={300}></Image>
         </div>

          <div className="ms-6">
            <p className="text-2xl font-bold text-red-300">Muslim Sweets Lohagora</p>
            <p className="font-semibold ">
              {" "}

              "We run a sweets business with the goal of fulfilling people's cravings by selling beautiful and delicious sweets. We are highly popular in Lohagora, Narail, and Jessore, Bangladesh. Our aim is to continue delighting our customers with even better sweets, making sure that they love our products more and more with each bite."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

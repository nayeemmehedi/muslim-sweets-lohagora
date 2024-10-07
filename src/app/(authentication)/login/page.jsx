
import React from "react";
import FormLogin from "./FormLogin";
import { Dancing_Script } from "next/font/google";
import LottieReact from "@/app/utls/LottieReact";
import animation2 from "public/illustration/Animation2.json";

const inter = Dancing_Script({ subsets: ["latin"] });

function page() {
  return (
    <div className="grid grid-cols-2 bg-stone-800">
      <div className={inter.className}>
        <div className="w-[60%] ml-auto mr-auto">
          <div className="h-[100px]"></div>
         <div>
          <p className="my-4 text-center text-3xl text-amber-500">
            Login Your Account
          </p>
         </div>
          <FormLogin></FormLogin>
        </div>
      </div>
      <div>
       
          <LottieReact value={animation2}></LottieReact>
       
      </div>
    </div>
  );
}

export default page;

"use client"

import { useLottie } from "lottie-react";

function LottieReact({value}) {

    const options = {
        animationData: value,
        loop: true
      };
    
      const { View } = useLottie(options);

 
  return <>{View}</>;
}

export default LottieReact
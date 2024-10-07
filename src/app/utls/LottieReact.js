"use client";

import { useLottie } from "lottie-react";
import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

function LottieReact({ value }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when in view
    threshold: 0.1, // Trigger when 50% of the animation is in view
  });

  const options = useMemo(
    () => ({
      animationData: value,
      loop: true,
    }),
    [value]
  );

  const { View } = useLottie(options);

  return <div ref={ref}> {View}</div>;
}

export default LottieReact;

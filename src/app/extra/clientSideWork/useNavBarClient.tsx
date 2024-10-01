"use client";

import React, { useState } from "react";

function useNavBarClient() {

  const [toggle, setToggle] = useState(false);

  function clickToggle() {
    setToggle(!toggle);
  }

  return {toggle, clickToggle};
}

export  default useNavBarClient ;

"use client";

import Link from "next/link";
import React, { useState } from "react";

function ProductButton({productid}:any) {
  const [value,setValue] = useState(false)

  function productLoading(){
    setValue(!value)
  }

  return (
    <Link href={`/product/${productid}`}>
    <div className="flex justify-center my-1">
      {" "}
      <button className="border border-red-600 text-red-500 hover:text-green-500 hover:border-green-400  p-1  w-full  m-3 rounded-md ">
        <div className="text-blue-700">Product Details</div>
      </button>
    </div>
  </Link>
  );
}

export default ProductButton;

"use client";
import React, { useEffect, useState } from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import food from "/public/food.jpg";
import { InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { productDeleteRedux } from "@/app/redux/cardStore/counterSlice";


const AddCard = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {value?.map((v, item) => (
        <div key={item} className="p-10 m-5 bg-white">
          <div className="grid grid-cols-5">
            <div className="col-span-3 flex ">
              <div className="flex items-center"></div>
              <div>
                <Image
                  src={v?.imgUrl}
                  width={70}
                  height={70}
                  alt="not found"
                ></Image>
              </div>
              <div className="ms-5 flex items-center">
                <div>
                  <p className="">
                    {v?.banglaName}-{v?.englishName}-{v?.rating}
                  </p>
                  <p className="text-orange-600">Price: ৳ {v?.price}</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex items-center">{v?.qty} kg</div>
            <div className="col-span-1 flex items-center">
              <button
                onClick={() => dispatch(productDeleteRedux(v?.englishName))}
                className="px-4 py-2 border border-green-900 rounded hover:border-red-600 "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddCard;

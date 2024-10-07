"use client";

import React, { useEffect } from "react";
import { Button, Input, Space } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";


function OderSummery({ value }) {
  const [price, setPrice] = React.useState(0);

  const cardValue = useSelector((state) => state.counter.value);


  useEffect(() => {
    if (cardValue.length > 0) {
      let allprice = cardValue.map((v,item) => v.price * v.qty);
      const sum = allprice.reduce((acc, curr) => acc + curr, 0);
      setPrice(sum);
    }
  
  }, [])
  
  return (
    <div>
      <div className="m-4 p-4 bg-white">
        <div>
          <p className="text-2xl py-3">Order Summary</p>
          <hr />
          <div className="flex justify-between py-3">
            <p> Subtotal ({cardValue?.length} items)</p>
            <p>৳ {price}</p>
          </div>
          <div className="flex justify-between py-3">
            <p>Shipping Fee</p>
            <p>৳ 100</p>
          </div>

          <hr />

          <div className="flex justify-end py-3  ">
            <Space direction="horizontal">
              <Input className="w-[250px]" placeholder="Input Coupon" />
              <Button style={{ width: 80 }}>APPLY</Button>
            </Space>
          </div>

          <div className="flex justify-between py-3">
            <p>Total</p>
            <p className="text-orange-300">৳ {price + 100}</p>
          </div>
          <div className="my-4">

            {
              cardValue?.length > 0 &&   <Link href="confirm-product">
              <button className="w-full py-2 border  border-red-500 text-red-400 hover:text-blue-600">
                PROCEED TO CHECKOUT
              </button>
            </Link>
            }


           
          </div>
        </div>
      </div>
    </div>
  );
}

export default OderSummery;

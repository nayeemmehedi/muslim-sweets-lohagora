// "use client"
import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { Button } from "antd";
import ProductButton from "../../NextClientSIdeWork/ProductButton";
import Link from "next/link";




async function MainProduct({ product }: any) {
  if (!product) {
    // Handle product not found case
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-8 mx-10 my-6 ">
        {product?.data?.value.map((p: any, item: any) => (
          <div
            key={item}
            className="shadow-lg hover:shadow-2xl rounded-md grid content-between "
          >
            <div>
              <Image
                className="rounded-md object-contain "
                src={p?.imgUrl}
                width={350}
                height={150}
                alt="Unavailable"
                loading="lazy"
              ></Image>

              <div className="flex justify-between content-center p-5">
                <div>
                  <p className="text-rose-950 text-lg">{p?.englishName}</p>
                  <p className="text-amber-500">{p?.banglaName}</p>

                  <p className="text-black mt-3">৳ {p?.price}</p>
                </div>
                <div className="self-center">
                  <p>Rating: {p?.rating}</p>
                </div>
              </div>
            </div>
            {/* <Link href={`/product/${p?._id}`} prefetch={true}>
              <div className="flex justify-center my-1">
                {" "}
                <button className="border border-red-600 text-red-500 hover:text-green-500 hover:border-green-400  p-1  w-full  m-3 rounded-md ">
                  <div className="text-blue-700">Product Details</div>
                </button>
              </div>
            </Link> */}
            {p?._id && <ProductButton productid={p._id}></ProductButton>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainProduct;

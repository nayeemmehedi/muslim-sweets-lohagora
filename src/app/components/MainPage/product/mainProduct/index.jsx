import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { Button } from "antd";
// import ProductButton from "../../NextClientSIdeWork/ProductButton";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

async function MainProduct({ product }) {
  if (!product) {
    // Handle product not found case
    return <div>Product not found</div>;
  }

  return (
    <div >
       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3    lg:w-[90%]	">
          {product?.data?.value.map((p, key) => (
            <div key={key} className=" mx-3  rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl  my-3 border-3 ">
              {/* Image Section */}

              <Link href={`/product/${p._id}`}>
              <div className="relative h-64 w-full">
                <Image
                 src ={p.imgUrl}
                  alt="Malai Sweet"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Content Section */}
              <div className="py-4 bg-slate-200  ">
                {/* Product Names */}
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                  {p?.englishName}
                  </h2>
                  <h3 className="text-lg text-gray-500">{p?.banglaName}</h3>
                </div>
                <div className="text-2xl  text-center font-semibold text-red-600">
                ৳ {p?.price}
                </div>

                {/* Price and Rating */}
                <div className="flex justify-center items-center mb-4">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">{p?.rating}/5</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="text-center">
                  <button className="px-4 py-2 text-white bg-green-700 hover:bg-green-600 rounded-lg transition duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
              </Link>


            </div>
          ))}
        </div>
    </div>
  );
}

export default MainProduct;


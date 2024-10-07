// import React from "react";
import { Rate } from "antd";
import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

async function fetchProduct(id) {
  const res = await fetch(`https://muslim-sweets-backend.onrender.com/api/v1/product/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    notFound(); // Automatically shows 404 if the product is not found
  }
  return res.json();
}

// Page component that fetches product details
async function Page({ params }) {
  const { id } = params;
  const { data } = await fetchProduct(id);

  return (
    <div>
      <div>
        <div className="antialiased">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Link href="/">
                  <span className="hover:underline hover:text-gray-600">
                    Home
                  </span>
                </Link>
                <span>
                  <IoIosArrowForward />
                </span>
                <span>Product</span>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div>
                    <div className="h-64 md:h-80 rounded-lg mb-4 flex items-center justify-center">
                      <div className="object-cover w-full h-full rounded-lg">
                        <Image
                          src={data?.value[0]?.imgUrl}
                          alt="Picture"
                          width={500}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                    {data?.value[0]?.englishName} / {data?.value[0]?.banglaName}
                  </h2>
                  <div className="flex items-center space-x-4 my-4">
                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span className="text-yellow-800 mr-1 mt-1">৳</span>
                      <span className="font-bold text-yellow-800 text-3xl">
                        {data?.value[0].price}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    {data?.value[0]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] ml-auto mr-auto my-10">
        <div className="flex">
          <div>
            <div className="flex items-center my-3">
              <div className="text-4xl">{data?.value[0]?.rating}</div>
              <div className="text-white bg-yellow-400 flex items-center w-[120px] h-auto ms-2 px-1">
                <IoMdStar color="white" />
                <span className="ps-2">
                  {data?.value[0]?.rating > 4.5
                    ? "Excellent"
                    : data?.value[0]?.rating > 4.3 &&
                      data?.value[0]?.rating < 4.5
                    ? "Very Good"
                    : "Good"}
                </span>
              </div>
            </div>
            <Rate disabled defaultValue={data?.value[0]?.rating} />
          </div>
          <div className="ps-10">
            <Rate disabled defaultValue={5} />
            <br />
            <Rate disabled defaultValue={4} />
            <br />
            <Rate disabled defaultValue={3} />
            <br />
            <Rate disabled defaultValue={2} />
            <br />
            <Rate disabled defaultValue={1} />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

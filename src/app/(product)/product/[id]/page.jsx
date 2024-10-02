import React from "react";
import { Rate } from "antd";
import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

async function page({ params }) {
  const res = await fetch(
    `https://muslim-sweets-backend.onrender.com/api/v1/product/${params.id}`,
    {
      // Cache options, optional
      next: { revalidate: 10 }, // Revalidate the data every 10 seconds (ISR-like behavior)
    }
  );
  const product = await res.json();

  const productDetails = product.data.value[0];

  return (
    <div>
      <div>
        <div>
          <div className="antialiased">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <span className="hover:underline hover:text-gray-600">
                    Home
                  </span>

                  <span>
                    <IoIosArrowForward></IoIosArrowForward>
                  </span>
                  <span>Product</span>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="flex flex-col md:flex-row -mx-4">
                  <div className="md:flex-1 px-4">
                    <div>
                      <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                          <Image
                            src={productDetails.imgUrl}
                            // layout="responsive"
                            width={400}
                            height={300}
                            alt="Picture"
                            loading="lazy"
                            className="object-cover w-full h-full"
                          />
                          {/* // style={{ maxWidth: "400px", maxHeight: "320px" }} */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex-1 px-4">
                    <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                      {productDetails.englishName} / {productDetails.banglaName}
                    </h2>

                    <div className="flex items-center space-x-4 my-4">
                      <div>
                        <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                          <span className="text-yellow-800 mr-1 mt-1">৳</span>
                          <span className="font-bold text-yellow-800 text-3xl">
                            {productDetails.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-500">
                      {productDetails.description}
                    </p>

                    {/* <ProductDetailButton
                    productDetails={productDetails}
                  ></ProductDetailButton> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] ml-auto mr-auto my-10 ">
        <div className="flex">
          <div>
            <div className="flex items-center my-3">
              <div className="text-4xl">{productDetails.rating}</div>
              <div className="text-white bg-yellow-400 flex items-center w-[120px] h-auto ms-2 px-1">
                <IoMdStar color="white" className=""></IoMdStar>
                <span className="ps-2">
                  {productDetails.rating > 4.5
                    ? "Excelent"
                    : productDetails.rating > 4.3 && productDetails.rating < 4.5
                    ? "Very Good"
                    : "Good"}
                </span>
              </div>{" "}
            </div>
            <Rate disabled defaultValue={productDetails.rating} />
          </div>

          <div className="ps-10">
            <Rate disabled defaultValue={5} /> <br />
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

export default page;

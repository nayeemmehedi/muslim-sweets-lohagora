import React from "react";
import Image from "next/image";


async function Toprate({product}:any) {
  // const product = await productAll();

  return (
    <div>
      {product?.data?.value
        ?.sort((a: any, b: any): any => b.rating - a.rating)
        .slice(0, 3)
        .map((p: any,i:any) => (
          <div key={i} className="cursor-not-allowed rounded-md shadow-md border hover:shadow-xl hover:border-red-950 hover:bg-teal-950 my-4 max-w-40 max-h-40 flex hover:text-stone-100">
            <Image
              className="rounded-md"
              src={p.imgUrl}
              width={100}
              height={100}
              alt="Unavailable"
            ></Image>
            <div className="ps-3">
              <p> {p.banglaName}</p>
              <p>৳ {p.price}</p>
              <p> rating: {p.rating}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Toprate;

// lower number
// let ratings = [{rating: 3.4}, {rating: 3.9}, {rating: 2.3}];

// ratings.sort((a, b) => a.rating - b.rating); // Sort the array based on the rating property

// let lowestRating = ratings[0].rating; // Get the rating of the first element (lowest rating)

// console.log(lowestRating); // Output the lowest rating

// higer number
// let ratings = [{rating: 3.4}, {rating: 3.9}, {rating: 2.3}];

// ratings.sort((a, b) => b.rating - a.rating); // Sort the array in descending order based on the rating property

// let highestRatings = ratings.slice(0, 2).map(item => item.rating); // Get the two highest rating numbers

// console.log(highestRatings); // Output the two highest ratings

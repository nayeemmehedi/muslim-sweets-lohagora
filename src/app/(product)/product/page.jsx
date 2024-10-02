import MainProduct from "../../components/MainPage/product/mainProduct";
import Toprate from "../../components/MainPage/product/topRated";
import { Dancing_Script } from "next/font/google";
const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

async function Product() {
  const res = await fetch(
    "https://muslim-sweets-backend.onrender.com/api/v1/product",
    {
      // Cache options, optional
      next: { revalidate: 10 }, // Revalidate the data every 10 seconds (ISR-like behavior)
    }
  );
  const product = await res.json();

  return (

    <div className={dancing_Script.className}>
    <div className="backgroundColorMain">
      <div className="container w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Left column for Top Rated */}
          <div className="my-5 lg:col-span-1">
            <p className="py-3 text-center text-orange-500 text-3xl">Top Rated</p>
            <hr />
            <Toprate product={product}></Toprate>
          </div>
  
          {/* Right column for Main Products */}
          <div className="col-span-1 lg:col-span-4">
            <MainProduct product={product}></MainProduct>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Product;

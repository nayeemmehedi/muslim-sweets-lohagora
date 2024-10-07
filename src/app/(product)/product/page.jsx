import MainProduct from "../../components/MainPage/product/mainProduct";
import Toprate from "../../components/MainPage/product/topRated";
import { Dancing_Script } from "next/font/google";
const dancing_Script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });


async function fetchProducts() {
  try {
    const res = await fetch('https://muslim-sweets-backend.onrender.com/api/v1/product', { cache: 'no-store' });
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}


async function Product() {

  const product = await fetchProducts();



  return (
    <div className={dancing_Script.className}>
      <div className="backgroundColorMain">
        <div className="container w-[90%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Left column for Top Rated */}
            <div className="my-5 lg:col-span-1">
              <p className="py-3 text-center text-orange-500 text-3xl">
                Top Rated
              </p>
              <hr />
              <Toprate product={product}></Toprate>
            </div>

            {/* Right column for Main Products */}
            <div className="col-span-1 lg:col-span-3">
              <MainProduct product={product}></MainProduct>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

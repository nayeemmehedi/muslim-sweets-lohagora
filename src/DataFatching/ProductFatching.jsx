import { apiValue } from "./MainApi";

const productAll = async () => {
  try {
    const response = await apiValue.get("/product");

    return response.data;
  } catch (error) {
    return null;
  }
};

const productId = async (id) => {
  try {
    const response = await apiValue.get("/product/" + id);
    // console.log("response data", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { productAll, productId };

import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const Products = () => {
  const states = useContext(ProductContext);
  const products = states.products;
  return (
    <div className=" w-[60%] h-[300px] border-4 border-gray-400 pb-1">
      <h1 className=" text-center text-2xl mb-8 w-full py-1 bg-blue-300">
        PRODUCTS
      </h1>
      <div className="flex flex-col gap-3 text-lg px-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-300 py-2 px-3 items-center"
          >
            <p>{product.name}</p>
            <p>{product.price}</p>
            <div className="flex items-center justify-between bg-blue-300 p-1 rounded-full w-[100px]">
              <button
                onClick={() => states.addToCart(product.id)}
                className="hover:scale-105 transition-all"
              >
                ➕
              </button>
              <span className="font-bold">{product.quantity}</span>
              <button
                onClick={() => states.removeFromCart(product.id)}
                className="hover:scale-105 transition-all"
              >
                ➖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

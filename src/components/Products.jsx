import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const Products = () => {
  const states = useContext(ProductContext);
  const products = states.products;
  return (
    <div className=" w-[60%] border-2 border-gray-500 py-1 px-3">
      <h1>Products</h1>
      {products.map((product, index) => (
        <div key={index} className="flex justify-between">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <div>
            <button onClick={() => states.addToCart(product.id)}>+</button>
            <span>{product.quantity}</span>
            <button onClick={() => states.removeFromCart(product.id)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

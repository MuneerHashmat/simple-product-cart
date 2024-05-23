import ProductContext from "../context/ProductContext";
import { useContext } from "react";

const Cart = () => {
  const states = useContext(ProductContext);
  const cartItems = states.cartItems;

  return (
    <div className="w-[35%] h-[300px] border-4 border-gray-400 relative">
      <h1 className=" text-center text-2xl mb-5 w-full py-1 bg-blue-300">
        Cart
      </h1>
      <div className="flex flex-col gap-2 text-lg px-3">
        {cartItems.length == 0 ? (
          <p className=" text-center text-red-500">No items in the cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between bg-gray-300 py-2 px-3 items-center"
            >
              <span>{item.name}</span>
              <span>
                {item.quantity} x {item.price}
              </span>
            </div>
          ))
        )}
      </div>

      <div>
        {cartItems.length == 0 ? null : (
          <div className="flex justify-between bg-gray-300 py-2 px-3 items-center text-lg absolute bottom-0 w-full left-0">
            <span>Total: </span>
            <span>
              {cartItems.reduce((total, item) => {
                return (total += item.price * item.quantity);
              }, 0)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

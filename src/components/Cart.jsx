import ProductContext from "../context/ProductContext";
import { useContext } from "react";

const Cart = () => {
  const states = useContext(ProductContext);
  const cartItems = states.cartItems;

  return (
    <div className="w-[35%] border-2 border-gray-500 py-1 px-3">
      <h1>Cart</h1>
      {cartItems.length == 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.name}</span>
            <span>
              {item.quantity} x {item.price}
            </span>
          </div>
        ))
      )}

      {cartItems.length == 0 ? null : (
        <div>
          <span>Total: </span>
          <span>
            {cartItems.reduce((total, item) => {
              return (total += item.price * item.quantity);
            }, 0)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;

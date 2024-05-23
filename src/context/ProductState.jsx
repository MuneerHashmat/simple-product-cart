import { useState } from "react";
import ProductContext from "./ProductContext";
import PropTypes from "prop-types";

const ProductState = (props) => {
  const productArray = [
    { id: 1, name: "Product-1", price: 100, quantity: 0 },
    { id: 2, name: "Product-2", price: 200, quantity: 0 },
    { id: 3, name: "Product-3", price: 300, quantity: 0 },
  ];

  const [products, setProducts] = useState(productArray);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    setProducts(
      products.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      })
    );

    const cartProduct = cartItems.find((item) => item.id === id);
    const product = products.find((item) => item.id === id);

    if (cartProduct) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: product.quantity + 1 },
      ]);
    }
  };

  const removeFromCart = (id) => {
    setProducts(
      products.map((item) => {
        return item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      })
    );

    const product = cartItems.find((item) => item.id === id);
    if (product && product.quantity > 1) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        })
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, cartItems, addToCart, removeFromCart }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

ProductState.propTypes = {
  children: PropTypes.node,
};
export default ProductState;

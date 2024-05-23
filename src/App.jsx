import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductState from "./context/ProductState";

function App() {
  return (
    <>
      <ProductState>
        <div className="w-[80%] mx-auto mt-8 flex gap-3">
          <Products />
          <Cart />
        </div>
      </ProductState>
    </>
  );
}

export default App;

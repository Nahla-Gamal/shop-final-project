import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import LayoutPage from "./Pages/LayoutPage/LayoutPage";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductItem from "./Pages/ProductItem/ProductItem";
import CartPopup from "./Components/CartPopup/CartPopup";
import { createContext, useState, useEffect } from "react";

export const CartPopupContext = createContext(null);

function App() {
  const [cartPopupOpen, setCartPopupOpen] = useState(false);

  useEffect(() => {
    const URL = "https://fakestoreapi.com/products";

    fetch(URL)
      .then((res) => res.json())
      .then((json) => localStorage.setItem("products", JSON.stringify(json)));
  }, []);

  return (
    <main>
      <BrowserRouter>
        <CartPopupContext.Provider value={{ cartPopupOpen, setCartPopupOpen }}>
          <CartPopup />
          <Header></Header>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<HomePage />}></Route>
              <Route path="contact" element={<ContactPage />}></Route>
              <Route
                path="/category/:categoryId/products"
                element={<Products />}
              ></Route>
              <Route
                path="/category/:categoryId/products/:productId"
                element={<ProductItem />}
              ></Route>
              <Route path="cart" element={<Cart />}></Route>
            </Route>
          </Routes>
          <Footer></Footer>
        </CartPopupContext.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;

import "./Cart.css";
import deleteIcon from "../../assets/images/Vector 5.png";
import Banner from "../../Sections/banner/banner";
import SellingPoints from "../../Sections/SellingPoints/SellingPoints";
import webLogo from "../../assets/images/logo.png";
import rightArrow from "../../assets/images/right-arrow.png";
import Cover4 from "../../assets/images/cart.jpg";
import { useState, useEffect } from "react";
import { getCart, getCartTotalPrice } from "../../utils/Cart";
import { removeItemFromCart } from "../../utils/Cart";


function Cart() {
  const [cartProducts, setCartProducts] = useState([]);

  // **** GETTING CART DATA USING FAKE API **** //

  // useEffect(() => {
  //   // const URL = `https://fakestoreapi.com/carts/1`;

  //   // fetch(URL)
  //   //   .then((res) => res.json())
  //   //   .then((json) => {
  //   //     const updatedProducts = json.products.map((product) => {
  //   //       return {
  //   //         ...getProductDetails(product.productId),
  //   //         quantity: product.quantity,
  //   //       };
  //   //     });
  //   //     console.log("updatedProducts", updatedProducts);
  //   //   });
  //   setCartProducts(getCart());
  // }, []);

  // const getProductDetails = (id) => {
  //   const products = localStorage.getItem("products");
  //   const parsedProducts = JSON.parse(products);
  //   const product = parsedProducts.find((product) => product.id == id);
  //   return product;
  // };

  useEffect(() => {
    setCartProducts(getCart());
  }, []);

  console.log('cartProducts',cartProducts)


  const removeFromCart = (id) => {
    removeItemFromCart(id);
    setCartProducts(getCart());
    console.log(removeFromCart,"hello")
  }
  return (
    <>
      <Banner
        bgPic={Cover4}
        webLogo={webLogo}
        title={"Cart"}
        text={"Home"}
        rightArrow={rightArrow}
      ></Banner>
      <div className="cart-page section">
        <div className="table-display">
          <table className="cart-content">
            <thead>
              <tr className="first-row">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="second-row">
              {cartProducts.map((cartProduct, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="productItem-div">
                        <img src={cartProduct.image} />
                        <label className="productcart-name">
                          {cartProduct.title}
                        </label>
                      </div>
                    </td>
                    <td className="productcart-cost">{cartProduct.price} $</td>
                    <td>
                      <div className="item-quantity">
                        <label>{cartProduct.quantity}</label>
                      </div>
                    </td>
                    <td>
                      <div className="total-prices">
                        <label>
                          {cartProduct.price * cartProduct.quantity} $
                        </label>
                      </div>
                    </td>
                    <td className="delete-td">
                      <div className="button delete-icon">
                        <img src={deleteIcon} onClick={() => removeFromCart(cartProduct.id)} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="cart-prices">
          <div className="cart-title">
            <label>Cart Totals</label>
          </div>
          <div className="prices-details">
            <div className="subtotal">
              <label className="subtotal-title">Subtotal</label>
              <label className="subtotal-price">{getCartTotalPrice()} $</label>
            </div>
            <div className="total">
              <label className="total-title">Total</label>
              <label className="total-price">{getCartTotalPrice()} $</label>
            </div>
            <div className="cartDiv-btn">
            <button className="cart-button">Check Out</button>
            </div>
          </div>
        </div>
      </div>
      <SellingPoints />
    </>
  );
}

export default Cart;

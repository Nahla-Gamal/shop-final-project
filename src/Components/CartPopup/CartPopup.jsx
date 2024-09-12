import { CartPopupContext } from "../../App";
import "./CartPopup.css";
import { useContext } from "react";
import deleteIcon from "../../assets/images/delete.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCart, getCartTotalPrice } from "../../utils/Cart";
import { removeItemFromCart } from "../../utils/Cart";

function CartPopup() {
  const [shoppingCart, setShoppingCart] = useState();

  const cartPopupContext = useContext(CartPopupContext);

  useEffect(() => {
    setShoppingCart(getCart());
  }, [cartPopupContext.cartPopupOpen]);

  const removeFromCart = (id) => {
    removeItemFromCart(id);
    setShoppingCart(getCart());
  };

  const closeCart = () => {
    cartPopupContext.setCartPopupOpen(false);
  };

  if (!cartPopupContext.cartPopupOpen) return;

  return (
    <div id="cart-modal" className="modal">
      <div className={`modal-content ${cartPopupContext.cartPopupOpen ? "open" : ""}`}>
        <div className="cart-header">
          <div className="cart-heading">
            <label>Shopping Cart</label>
            <span className="close" onClick={closeCart}>
              &times;
            </span>
          </div>
        </div>
        <hr></hr>
        <div className="cart-body">
          {shoppingCart.map((cartItem, index) => (
            <div key={index} className="cart-item">
              <div className="shoppingcart-details">
                <div className="shoppingItemDiv-pic">
                <img src={cartItem.image} className="shoppingItem-pic" />
                </div>
                <div className="name-price">
                  <label className="shoppingitem-name">{cartItem.title}</label>
                  <div className="price-quantity">
                    <label className="cart-quantity">{cartItem.quantity}</label>
                    <label className="multiply-icon"> &times; </label>
                    <label className="cart-cost">{cartItem.price}$</label>
                  </div>
                </div>
              </div>
              <img
                src={deleteIcon}
                className="delete-icon"
                onClick={() => removeFromCart(cartItem.id)}
              />
            </div>
          ))}
          {shoppingCart.length == 0 && (
            <div className="empty-cart">Your cart is empty</div>
          )}
        </div>
        <div className="cart-footer">
          <div className="shoppingCart-prices">
            <label className="priceTitle">Subtotal</label>
            <label className="price-number">{getCartTotalPrice()} $</label>
          </div>
          <Link to="/cart">
            <div className="shopping-btn">
              <button className="btn" onClick={closeCart}>
                Cart
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPopup;

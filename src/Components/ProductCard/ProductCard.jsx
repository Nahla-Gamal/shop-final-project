/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { CartPopupContext } from "../../App";
import { addItemToCart } from "../../utils/Cart";

function ProductCard({ product }) {
  const cartPopupContext = useContext(CartPopupContext);

  const addToCart = (event) => {
    addItemToCart(product);
    event.preventDefault();
    cartPopupContext.setCartPopupOpen(true);
  };

  return (
    <div className="product-card">
      <Link to={`/category/${product.category}/products/${product.id}`}>
        <div className="productDiv-img">
          <img className="product-img" src={product.image} />
        </div>
        <div className="product-details">
          <label className="product-name">{product.title}</label>
          <label className="product-description">{product.description}</label>
          <div className="product-price">
            <label className="real-price">{product.price}$</label>
          </div>
        </div>

        <div className="hoverProduct-card">
          <button className="hover-content" onClick={addToCart}>
            <label className="content-text">Add to cart</label>
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;

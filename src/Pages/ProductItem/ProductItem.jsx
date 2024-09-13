import "./ProductItem.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import minusIcon from "../../assets/images/minus.png";
import plusIcon from "../../assets/images/plus.png";
import Description from "../../Sections/Description/Description";
import { CartPopupContext } from "../../App";
import { useContext } from "react";
import facebookIcon from "../../assets/images/facebook.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import twitterIcon from "../../assets/images/twitter.png";
import BreadCrumbs from "../../Sections/BreadCrumbs/BreadCrumbs";
import { Rating } from "react-simple-star-rating";
import { addItemToCart } from "../../utils/Cart";

function ProductItem() {
  const { productId } = useParams();
  const cartPopupContext = useContext(CartPopupContext);
  const [counter, setCounter] = useState(0);

  const addToCart = () => {
    // const URL = "https://fakestoreapi.com/carts";

    // fetch(URL, {
    //   method: "POST",
    //   body: JSON.stringify(productDetails),
    // });
    if (counter > 0) {
      addItemToCart(productDetails, counter);
      cartPopupContext.setCartPopupOpen(true);
    }
  };

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/${productId}`;

    fetch(URL)
      .then((res) => res.json())
      .then((json) => setProductDetails(json));
  }, [productId]);

  useEffect(() => {
    if (productDetails) {
      const rating = productDetails.rating.rate;
      const starsFillingElement = document.querySelector(
        ".style-module_fillIcons__6---A"
      );

      starsFillingElement.style.width = `${(rating / 5) * 100}%`;
    }
  }, [productDetails]);

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function increment() {
    setCounter(counter + 1);
    // productDetails.quantity += 1;
  }

  if (!productDetails) {
    return;
  }

  return (
    <>
      <BreadCrumbs title={productDetails.title}></BreadCrumbs>
      <div className="product-item section">
        <div className="product-picDiv">
          <img className="product-pic" src={productDetails.image} />
        </div>
        <div className="product-information">
          <label className="item-name">{productDetails.title}</label>
          <label className="item-price">{productDetails.price} $</label>
          <div className="item-rating">
            <Rating readonly allowFraction initialValue={0} />
            <div className="vl2"></div>
            <label>{productDetails.rating.count} Customer review</label>
          </div>
          <p className="item-description">{productDetails.description}</p>
          <div className="actions">
            <div className="counter">
              <button className="minus-icon" onClick={decrement}>
                <img src={minusIcon} />
              </button>
              <label className="number-item">{counter}</label>
              <button className="plus-icon" onClick={increment}>
                <img src={plusIcon} />
              </button>
            </div>
            <button className="add-item" onClick={addToCart}>
              Add To Cart
            </button>
          </div>
          <hr className="productitem-hr" />
          <div className="more-info">
            <div className="row1">
              <label className="info-title">Category </label>
              <label>:</label>
              <label>{productDetails.category}</label>
            </div>
            <div className="row2">
              <label className="info-title">Share</label>
              <label>:</label>
              <div className="share-actions">
                <img src={facebookIcon} className="share-icon" />
                <img src={linkedinIcon} className="share-icon" />
                <img src={twitterIcon} className="share-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Description></Description>
    </>
  );
}
export default ProductItem;

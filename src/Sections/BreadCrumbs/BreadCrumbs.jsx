/* eslint-disable react/prop-types */
import "./BreadCrumbs.css";
import rightArrow from "../../assets/images/right-arrow.png";
import { Link } from "react-router-dom";

function BreadCrumbs(props) {
  return (
    <div className="bread-crumbs section">
      <div className="bread-crumbs-content">
      <Link to="/">
        <label className="breadcrumbs-text1">Home</label>
      </Link>
        <img src={rightArrow} />
        <Link to="/category/shop/products"> 
        <label className="breadcrumbs-text1">Shop</label>
        </Link> 
        <img src={rightArrow} />
        <div className="vl"></div>
        <label className="breadcrumbs-text2">{props.title}</label>
      </div>
    </div>
  );
}

export default BreadCrumbs;

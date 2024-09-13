import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Products.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../../Sections/Banner/Banner";
import webLogo from "../../assets/images/logo.png";
import rightArrow from "../../assets/images/right-arrow.png";
import SellingPoints from "../../Sections/SellingPoints/SellingPoints";
import cover2 from '../../assets/images/cover2-desktop.jpg';

function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL =
      categoryId == "shop"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${categoryId}`;

    fetch(URL)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [categoryId]);

  return (
    <>
      <Banner
        bgPic={cover2}
        webLogo={webLogo}
        title={categoryId}
        text={"Home"}
        rightArrow={rightArrow}
      ></Banner>
      <div id="products" className="section">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </div>
      <SellingPoints />
    </>
  );
}
export default Products;

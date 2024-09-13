import "./HomePage.css";
import { Link } from "react-router-dom";
import SellingPoints from "../../Sections/SellingPoints/SellingPoints";
import HomeCover from "../../assets/images/home-cover-desktop.png";
import Banner from "../../Sections/Banner/Banner";
import ElectronicPic from "../../assets/images/electronicImg.jpeg";
import JeweleryPic from "../../assets/images/jeweleryImg.jpeg";
import MenClothingPic from "../../assets/images/men-clothing-img.jpeg";
import WomenClothingPic from "../../assets/images/womenClothing-img.jpeg";

export const categories = [
  {
    id: "electronics",
    title: "Electronics",
    categoryPic: ElectronicPic
  },
  {
    id: "jewelery",
    title: "Jewelery",
    categoryPic: JeweleryPic
  },
  {
    id: "men's clothing",
    title: "Men's Clothing",
    categoryPic: MenClothingPic
  },
  {
    id: "women's clothing",
    title: "Women's Clothing",
    categoryPic: WomenClothingPic
  },
];

function HomePage() {
  return (
    <>
      <Banner bgPic={HomeCover}></Banner>
      <div id="home-content" className="section">
        <label className="home-name">Categories</label>
        <div id="categoryWrapper">
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                className="categorylink"
                to={`/category/${category.id}/products`}
              >
                <div className="categoryBox">
                  <div className="image-wrapper">
                    <img className="category-img" src={category.categoryPic} />
                  </div>
                  <label className="category-name">{category.title}</label>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <SellingPoints />
    </>
  );
}

export default HomePage;

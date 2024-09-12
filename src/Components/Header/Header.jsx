import "./Header.css";
import { Link } from "react-router-dom";
import WebLogo from "../../assets/images/logo.png";
import CartIcon from "../../assets/images/Vector.png";
import { CartPopupContext } from "../../App";
import { useContext, useState } from "react";
import burgerMenu from "../../assets/images/burger-menu2.png";
import { getCartTotalCount } from "../../utils/Cart";

function Header() {
  const cartPopupContext = useContext(CartPopupContext);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openCart = () => {
    cartPopupContext.setCartPopupOpen(true);
  };

  const openBurgerMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="desktop-header section">
        <Link to="/">
          <div className="logo">
            <img className="web-logo" src={WebLogo} />
            <label className="logo-name">Furniro</label>
          </div>
        </Link>
        <nav className="navigation-menu desktop">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category/shop/products">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-end">
          <button className="product-cart" onClick={openCart}>
            <span className="cart-count">{getCartTotalCount()}</span>
            <img className="cart-icon" src={CartIcon} />
          </button>
          <img
            className="burger-menu mobile"
            src={burgerMenu}
            onClick={openBurgerMenu}
          />
        </div>
      </header>

      <div
        className={`burger-menu-list mobile ${isMobileMenuOpen ? "open" : ""}`}
      >
        <div className="menu-heading">
          <Link to="/">
            <div className="logo">
              <img className="web-logo" src={WebLogo} />
              <label className="logo-name">Furniro</label>
            </div>
          </Link>
          <span className="close" onClick={closeBurgerMenu}>
            &times;
          </span>
        </div>
        <div className="mobile-nav" onClick={closeBurgerMenu}>
          <Link to="/">
            <label>Home</label>
          </Link>
          <Link to="/category/shop/products">
            <label>Shop</label>
          </Link>
          <Link to="/contact">
            <label>Contact</label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;

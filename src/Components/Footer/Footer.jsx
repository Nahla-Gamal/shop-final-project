import "./Footer.css";
import { Link } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import { useState } from "react";

function Footer() {
  const snackbarOptions = {
    position: "top-center",
    style: {
      backgroundColor: "#fff",
      color: "#006400",
      border: "1px solid #006400",
      borderRadius: "4px",
    },
  };

  const [openSnackbar] = useSnackbar(snackbarOptions);
  const [email, setEmail] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    if (email) {
      openSnackbar("Thank you for subscribing to our newsletter", 3000);
      setEmail("")
    }
  }

  function onInputChange(event) {
    setEmail(event.target.value);
  }

  return (
    <footer className="section">
      <div className="web-details">
        <div className="webAddress-name">
          <label className="web-name">Furniro.</label>
          <div className="web-address">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <label>FL 33134 USA</label>
          </div>
        </div>
        <div className="footer-links">
          <div className="web-links footer-styling">
            <div className="links-heading">
              <label>Links</label>
            </div>
            <div className="links-content">
              <Link to="/">
                <label>Home</label>
              </Link>
              <Link to="/category/shop/products">
                <label>Shop</label>
              </Link>
              <Link to="/contact">
                <label>Contact</label>
              </Link>
              <label>About</label>
            </div>
          </div>
          <div className="web-politics footer-styling">
            <div className="politics-heading">
              <label>Help</label>
            </div>
            <div className="politics-content">
              <label>Payment Options</label>
              <label>Returns</label>
              <label>Privacy Policies</label>
            </div>
          </div>
        </div>
        <div className="web-contact footer-styling">
          <div className="contact-heading">
            <label>Newsletter</label>
          </div>
          <form onSubmit={onSubmit} className="contact-content">
            <input
              value={email}
              onChange={onInputChange}
              type="email"
              placeholder="Enter Your Email Address"
            ></input>
            <button>SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <hr />
      <label className="copyright">2023 furino. All rights reverved</label>
    </footer>
  );
}
export default Footer;

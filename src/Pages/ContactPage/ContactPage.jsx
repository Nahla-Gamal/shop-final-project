import "./ContactPage.css";
import addressIcon from "../../assets/images/address.png";
import telephoneIcon from "../../assets/images/telephone.png";
import timeIcon from "../../assets/images/time.png";
import Banner from "../../Sections/Banner/Banner";
import webLogo from "../../assets/images/logo.png";
import rightArrow from "../../assets/images/right-arrow.png";
import Cover3 from "../../assets/images/cover3.jpg";
import { useState } from "react";
import * as yup from "yup";
import SellingPoints from "../../Sections/SellingPoints/SellingPoints";
import { useSnackbar } from "react-simple-snackbar";
import GreenTick from "../../assets/images/green-tick.svg";

function ContactPage() {
  const snackbarOptions = {
    position: "top-center",
    style: {
      backgroundColor: "#fff",
      color: "#D40023",
      border: "1px solid #D40023",
      borderRadius: "4px",
    },
  };

  const [openSnackbar] = useSnackbar(snackbarOptions);
  const [isSuccess, setIsSuccess] = useState(false);
  const [FormData, setFormData] = useState({
    yourName: "",
    email: "",
    subject: "",
    message: "",
  });

  const userSchema = yup.object().shape({
    yourName: yup.string().min(3).required(),
    email: yup.string().email("must be valid email").required(),
    subject: yup.string(),
    message: yup.string().required(),
  });

  async function testValidation() {
    try {
      await userSchema.validate(FormData, { abortEarly: false });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      err.inner.forEach((error) => {
        const errorMessage =
          error.message.charAt(0).toUpperCase() + error.message.slice(1);

        openSnackbar(errorMessage, 3000);
      });
    }
  }

  function handleOnSubmit(event) {
    testValidation();
    event.preventDefault();
  }

  function handleOnChange(event) {
    const KeyName = event.target.name;
    var keyValue = event.target.value;

    setFormData({
      ...FormData,
      [KeyName]: keyValue,
    });
  }

  return (
    <>
      <Banner
        bgPic={Cover3}
        webLogo={webLogo}
        title={"Contact"}
        text={"Home"}
        rightArrow={rightArrow}
      ></Banner>
      <div className="main-page">
        <div className="contact-page section">
          <div className="contact-description">
            <label>Get In Touch With Us</label>
            <p>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-details">
                <img src={addressIcon} className="address-img" />
                <div className="more-details">
                  <label className="text1">Address</label>
                  <label className="text2">
                    236 5th SE Avenue, New York NY10000, United States
                  </label>
                </div>
              </div>
              <div className="contact-details">
                <img src={telephoneIcon} className="telephone-img" />
                <div className="more-details">
                  <label className="text1">Phone</label>
                  <label className="text2">Mobile: +(84) 546-6789</label>
                  <label className="text2">Hotline: +(84) 456-6789</label>
                </div>
              </div>
              <div className="contact-details">
                <img src={timeIcon} className="time-img" />
                <div className="more-details">
                  <label className="text1">Working Time</label>
                  <label className="text2">Monday-Friday: 9:00 - 22:00</label>
                  <label className="text2">Saturday-Sunday: 9:00 - 21:00</label>
                </div>
              </div>
            </div>
            <form className="form-info" onSubmit={handleOnSubmit}>
              <div className="form-field">
                <label className="field-name" htmlFor="yourName">
                  Your name
                </label>
                <input
                  className="field"
                  id="yourName"
                  placeholder="Full name"
                  onChange={handleOnChange}
                  name="yourName"
                ></input>
              </div>
              <div className="form-field">
                <label className="field-name" htmlFor="email">
                  Email address
                </label>
                <input
                  className="field"
                  id="email"
                  placeholder="mail@mail.com"
                  onChange={handleOnChange}
                  name="email"
                ></input>
              </div>
              <div className="form-field">
                <label className="field-name" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="field"
                  id="subject"
                  placeholder="Subject is optional"
                  onChange={handleOnChange}
                  name="subject"
                ></input>
              </div>
              <div className="form-field">
                <label className="field-name" htmlFor="message">
                  Message
                </label>
                <input
                  className="field"
                  id="message"
                  placeholder="Hi! I’d like to ask about.."
                  onChange={handleOnChange}
                  name="message"
                ></input>
              </div>
              <button className="form-btn">
                Submit
                <label
                  className="success-label"
                  style={{ opacity: `${isSuccess ? "1" : "0"}` }}
                >
                  <img src={GreenTick} /> Submitted Successfully
                </label>
              </button>
            </form>
          </div>
        </div>
      </div>
      <SellingPoints />
    </>
  );
}
export default ContactPage;

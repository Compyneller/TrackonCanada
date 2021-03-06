import React from "react";
import contact from "../Assets/Contact.jpg";
import style from "./Home.module.scss";
import logo from "../Assets/WhatsApp_Image_2022-05-20_at_10.16.02_PM-removebg-preview.png";
const ContactUs = () => {
  return (
    <div className={style.MainContainer}>
      <div className={style.ImageDashBoard}>
        <img src={contact} alt="" />
        <h1>CONTACT US</h1>
      </div>

      <div className={style.Container}>
        <div className={style.row}>
          <div className={style.Content}>
            <div className={style.contentContainer}>
              <h1>Address: 4440 5 ST NW EDMONTON ALBERTA, T6T 0Z9</h1>
              <h1>Province: ALBERTA</h1>
            </div>
            <div className={style.socialsContainer}>
              <h1>
                Contact Email :{" "}
                <a
                  href="mailto:hello@trackoncanada.com"
                  style={{ textDecoration: "underline", color: "#0288D1" }}
                >
                  hello@trackoncanada.com
                </a>
              </h1>
              <div className={style.socials}>
                <div>
                  <h1>Visit us also at:</h1>
                </div>
                <div>
                  <a target="_blank" href="https://twitter.com/Trackoncanada">
                    <i className="fa-brands fa-twitter"></i>
                  </a>

                  <a target="_blank" href=" https://medium.com/@trackoncanada">
                    <i className="fa-brands fa-medium"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.ImageContainer}>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

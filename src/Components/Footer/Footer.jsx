import React from "react";
import style from "./Footer.module.scss";
import logo from "../../Assets/WhatsApp_Image_2022-05-20_at_10.16.02_PM-removebg-preview.png";

const Footer = () => {
  return (
    <div className={style.FooterContainer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 ">
            <div className={style.Address}>
              <img src={logo} alt="" />
              <p> Address: 4440 5 ST NW EDMONTON ALBERTA, T6T 0Z9</p>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className={style.email}>
              <p>
                Contact Us :{" "}
                <a
                  href="mailto:hello@trackoncanada.com"
                  style={{ textDecoration: "underline", color: "#0288D1" }}
                >
                  hello@trackoncanada.com
                </a>
              </p>
              <div className={style.socials}>
                <a target="_blank" href="https://twitter.com/Trackoncanada ">
                  <i className="fa-brands fa-twitter"></i>
                </a>

                <a target="_blank" href="https://medium.com/@trackoncanada">
                  <i className="fa-brands fa-medium"></i>
                </a>
              </div>
              <p className={style.footerText}>
                {" "}
                © Trackon Canada, all rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

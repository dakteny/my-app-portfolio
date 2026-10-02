
import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="left">

          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#eff7fa", marginRight: "2rem" }}
            />
            <div>
              <p>123 Nyakoruon West</p>
              <p>South Sudan</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#eff7fa", marginRight: "2rem" }}
              />
              +211914417905
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#eff7fa", marginRight: "2rem" }}
              />
              info@gmail.com
            </h4>
          </div>

        </div>

        {/* Right Section */}
        <div className="right">
          <h4>About the company</h4>

          <p>
            A company is a legal entity representing an association of legal
            persons with a shared objective, such as generating profit or
            benefiting society. Depending on the jurisdiction, companies can
            take on various forms, including voluntary associations, nonprofit
            organizations, business entities, financial entities, banks, and
            educational institutions.
          </p>

          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#eff7fa", marginRight: "1rem" }}
            />

            <FaTwitter
              size={20}
              style={{ color: "#eff7fa", marginRight: "2rem" }}
            />

            <FaLinkedin
              size={20}
              style={{ color: "#eff7fa", marginRight: "2rem" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;


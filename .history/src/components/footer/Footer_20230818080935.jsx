import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer ">
      <div>
        <Link to={"/"}>
          <h1>Easy Shop</h1>
        </Link>
      </div>
      <div>
        <ul>
          <Link to={"/favorites"}>
            {" "}
            <li>Favorites</li>
          </Link>

          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <Link to={"/contacs"}>
            <li>Contact us</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link to={"/terms"}>
          <p style={{ padding: "10px", borderRadius: "20px" }}>
              Terms of service
          </p>
        </Link>
      </div>
      <div className="social-media">
        <FacebookIcon />
        <InstagramIcon />
        <WhatsAppIcon />
      </div>
    </footer>
  );
};

export default Footer;

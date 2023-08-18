import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer ">
      <div>
        <h1>My Shop</h1>
      </div>
      <div>
        <ul>
          <li>Избранное</li>
          <li>
            <Link to={'/'}>Корзина</Link>
          </li>
          <Link to={"/contacs"}>
            <li>Контакты</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link to={"/terms"}>
          <p>Условия сервиса</p>
        </Link>

        <div className="dflex">
          <TranslateIcon />
          <button>EN</button>
          <button>RU</button>
        </div>
      </div>
      <div className="social-media dflex">
        <FacebookIcon />
        <InstagramIcon />
        <WhatsAppIcon />
      </div>
    </footer>
  );
};

export default Footer;

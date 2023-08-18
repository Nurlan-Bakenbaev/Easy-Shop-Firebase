import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Padding } from "@mui/icons-material";
const Footer = () => {
  return (
    <footer className="footer ">
      <div>
        <Link to={'/'}><h1>Easy Shop</h1></Link>
      </div>
      <div>
        <ul>
          <Link to={'/favorites'}> <li>Избранное</li></Link>
         
          <li>
            <Link to={'/cart'}>Корзина</Link>
          </li>
          <Link to={"/contacs"}>
            <li>Контакты</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link to={"/terms"}>
          <p style={{border:'1px solid black',adding}}>Условия сервиса</p>
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

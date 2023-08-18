import React from "react";
import "../../App.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';
const Contacs = () => {
  return (
    <div className="contacs-wrapper">
      <div className="contacs">
        <div>Наш офис: Бизнес-центр Avangard Бишкек, ул.Токтогула, 125/1</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.93331260461!2d74.50945972543877!3d42.8768455045181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6LCDQmtGL0YDQs9GL0LfRgdGC0LDQvQ!5e0!3m2!1sru!2sde!4v1690235986628!5m2!1sru!2sde"
          loading="lazy"></iframe>
      </div>
      <div className=" contact-social-media">
        <WhatsAppIcon />
        <InstagramIcon />
        <FacebookIcon />
      </div>
      <div>
        {" "}
        Мобильный тел:
        <h1>
        <LocalPhoneIcon /> +996 999 999 999
        </h1>
        Электронная почта:
        <p style={{display:'flex',alignItems:'center',gap:'5px'}}> <EmailIcon/> contact-me@gmail.com</p>
    График работы:
    <p> ПН-ПТ <br /> с 8:30 до 17:00</p>
      </div>
    </div>
  );
};

export default Contacs;

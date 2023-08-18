import React, { useEffect, useState } from "react";
import AboutCard from "../../AboutCard/AboutCard";
// import { aboutProduct } from "../../data.js";
import "./AboutProduct.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useParams } from "react-router-dom";
import { db } from "../../../config/firebase.js";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../../Loader/Loader";

const AboutProduct = ({ handleAddToCart }) => {
  const [aboutData, setAboutData] = useState(null);
  const { id } = useParams();
  const onAddToCart = ()=>{
    const item = {
      id: aboutData.id,
      title: aboutData.title,
      price: itemData.price,
      img:itemData.img
    }
    handleAddToCart(item)
  }
  useEffect(() => {
    const getAboutData = async () => {
      const aboutItem = doc(db, "headPhones", id);
      const aboutIphonesRef = doc(db, "phones", id);
      const wirelessHeadPhonesRef = doc(db, "wirelessheadphones", id);

      const data = await getDoc(aboutItem);
      const aboutIphonesData = await getDoc(aboutIphonesRef);
      const wirelessHeadPhonesData = await getDoc(wirelessHeadPhonesRef);

      if (data.exists()) {
        setAboutData({
          id: data.id,
          ...data.data(),
        });
      } else if (aboutIphonesData.exists()) {
        setAboutData({
          id: aboutIphonesData.id,
          ...aboutIphonesData.data(),
        });
      } else if (wirelessHeadPhonesData.exists()) {
        setAboutData({
          id: wirelessHeadPhonesData.id,
          ...wirelessHeadPhonesData.data(),
        });
      }
    };
    getAboutData();
  }, [id]);
  if (aboutData === null) {
    return (
      <div className="pre__loading">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <h3 style={{ color: "slategray", marginTop: "40px" }}>
        {aboutData.name}
      </h3>
      <div className="about__card">
        <AboutCard
          aboutImg={
            aboutData.images
              ? aboutData.images.map((image,key) => (
                  <img key={key} src={image} alt="Картинка товара" />
                ))
              : "Нет Картинок"
          }
          aboutName={aboutData.name}
          price={aboutData.price}
          oldPrice={aboutData.oldPrice}
        />
      </div>

      <div className="aboutGrid">
        <div className="item__Informaton">
          <ul>
            <h2>Описание и характеристики</h2>
            {aboutData.description ? (
              aboutData.description.map((item,key) => <li key={key}>{item}</li>)
            ) : (
              <p>НЕТ ДАННЫХ</p>
            )}
          </ul>
        </div>
        <div className="about-btn">
          <button>Купить!</button>
          <button
            onClick={ onAddToCart}
            style={{ display: "flex", gap: "5px", alignItems: "center" }}
          >
            <ShoppingCartCheckoutIcon /> Добавить в корзину
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutProduct;

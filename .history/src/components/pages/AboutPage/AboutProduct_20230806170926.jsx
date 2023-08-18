import React, { useEffect, useState } from "react";
import AboutCard from "../../AboutCard/AboutCard";
// import { aboutProduct } from "../../data.js";
import "./AboutProduct.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useParams } from "react-router-dom";
import { db } from "../../../config/firebase.js";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../../Loader/Loader";
import { light } from "@mui/material/styles/createPalette";

const AboutProduct = () => {
  const [aboutData, setAboutData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getAboutData = async () => {
      const aboutItem = doc(db, "headPhones", id);
      const data = await getDoc(aboutItem);

      if (data.exists()) {
        const el = {
          id: data.id,
          ...data.data(),
        };
        setAboutData(el);
      }
    };
    getAboutData();
  }, [id]);
  console.log(aboutData);
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
          aboutImg={aboutData.images.map((image) => (
            <img key={image.id} src={image} alt="Картинка товара" />
          ))}
          aboutName={aboutData.name}
          price={aboutData.price}
          oldPrice={aboutData.oldPrice}
        />
      </div>

      <div className="aboutGrid">
        <div className="item__Informaton">
          <ul>
            <h1>Описание и характеристики</h1>
            {aboutData.description ? (
              aboutData.description.map((item) => <li key={item.id}>{item}</li>)
            ) : (
              <p>НЕТ ДАННЫХ</p>
            )}
          </ul>
        </div>
        <div className="about-btn">
          <button>Купить!</button>
          <button style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <ShoppingCartCheckoutIcon /> Добавить в корзину
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutProduct;

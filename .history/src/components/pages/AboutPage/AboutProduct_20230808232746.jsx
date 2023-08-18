import React, { useEffect, useState } from "react";
import AboutCard from "../../AboutCard/AboutCard";
// import { aboutProduct } from "../../data.js";
import "./AboutProduct.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useParams } from "react-router-dom";
import { db } from "../../../config/firebase.js";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../../Loader/Loader";

const AboutProduct = () => {
  const [aboutData, setAboutData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getAboutData = async () => {
      const aboutItem = doc(db, "headPhones", id);
      const aboutIphones = doc(db, "phones", id);

      const data = await getDoc(aboutItem);
      const dataIphones = await getDoc(aboutIphones);


      if (data.exists() ||dataIphones.exists()) {
        const el = {
          id: data.id,
          ...data.data(),
        };
        setAboutData(el);
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
         {aboutData.images }
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

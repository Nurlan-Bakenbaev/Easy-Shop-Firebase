import React, { useEffect, useState } from "react";
import AboutCard from "../../AboutCard/AboutCard";
import { aboutProduct } from "../../data.js";
import "./AboutProduct.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Await, useParams } from "react-router-dom";
import { db } from "../../../config/firebase.js";
import { getDoc, doc } from "firebase/firestore";

const AboutProduct = () => {
  const [aboutData, setAboutData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getAboutData = async() => {
      const aboutItem = doc(db, "headPhones");
      const data = await getDoc(item);
    };
    getAboutData();
  }, []);
  return (
    <>
      <h3 style={{ color: "slategray", marginTop: "40px" }}>Автодержатель</h3>
      <div className="about__card">
        {aboutProduct.map((about, key) => {
          return (
            <AboutCard
              key={key}
              aboutImg={about.img}
              aboutName={about.name}
              price={about.price}
              oldPrice={about.oldPrice}
            />
          );
        })}
      </div>{" "}
      <h1>Описание и характеристики</h1>
      <div className="aboutGrid">
        <div className="item__Informaton">
          <ul>
            <li>Вес: 10 гр</li>
            <li>Влагозащита: Нет</li>
            <li>Длина кабеля: 1.2 м</li>
            <li>Комплектация: Наушники</li>
            <li>Материал корпуса: Пластик, резина</li>
            <li>Микрофон: Да</li>
            <li>Назначение: Проводные наушники</li>
            <li>Ответить/закончить разговор: Да</li>
            <li>Разъем наушников: Lightning</li>
            <li>Регулятор громкости: Да</li>
            <li>Тип крепления: Без крепления</li>
            <li>Тип наушников: Вкладыши ("таблетки")</li>
            <li>Тип подключения: Проводное</li>
            <li>Частотный диапазон: 20 Гц - 20000 Гц</li>
            <li>Чувствительность: 109 дБ</li>
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

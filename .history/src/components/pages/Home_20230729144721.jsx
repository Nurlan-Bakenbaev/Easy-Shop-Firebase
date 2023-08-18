import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner.jsx";
import Main from "../main/Main.jsx";
import { headPhones, wirelessHeadPhones } from "../data.js";
import Card from "../Card.jsx";
import "../../App.css";
import { Link } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const Home = ({ handleClick, handleFavorite }) => {

  const [phonesData, setphonesData] = useState([]);
  const phonesItemRef = collection(db, 'phones');
  useEffect(() => {
    const getDataFromFireBase = async () => {
      try {
        const data = await getDocs(phonesItemRef);
        const items = data.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        console.log(items);
      } catch (error) {
        console.log("error");
      }
    };
    getDataFromFireBase();
  }, []);
  return (
    <div>
      <Banner />
      <Main handleClick={handleClick} handleFavorite={handleFavorite} />
      <h3 style={{ color: "slategray", marginTop: "40px" }}>Наушники</h3>
      <div className="headPhones">
        {headPhones.map((item, key) => {
          return (
            <Card
              handleClick={handleClick}
              key={key}
              img={item.img}
              name={item.name}
              newPrice={item.price}
              price={item.oldPrice}
              rating={item.rating}
            />
          );
        })}
      </div>
      <h3 style={{ color: "slategray", marginTop: "40px" }}>
        Беспроводные наушники
      </h3>
      <div className="wireless">
        {wirelessHeadPhones.map((item, key) => {
          return (
            <Card
              handleClick={handleClick}
              key={key}
              img={item.img}
              name={item.name}
              newPrice={item.price}
              price={item.oldPrice}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

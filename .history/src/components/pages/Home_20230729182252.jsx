import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner.jsx";
import Main from "../main/Main.jsx";
import { headPhones, wirelessHeadPhones } from "../data.js";
import Card from "../Card.jsx";
import "../../App.css";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const Home = ({ handleClick, handleFavorite }) => {
  const [phonesData, setPhonesData] = useState([]);
  const[isLoading,set]
  const phonesItemRef = collection(db, "phones");
  useEffect(() => {
    const getDataFromFireBase = async () => {
      try {
        const data = await getDocs(phonesItemRef);
        const items = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPhonesData(items);
      } catch (error) {
        console.log(error);
      }
    };
    getDataFromFireBase();
  }, []);
  return (
    <div>
      <Banner />
      <Main
        handleClick={handleClick}
        handleFavorite={handleFavorite}
        phonesData={phonesData}
      />
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

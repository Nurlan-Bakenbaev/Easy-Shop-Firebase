import React, { useEffect, useState } from "react";
import Banner from "../banner/Banner.jsx";
import Main from "../main/Main.jsx";
import Card from "../Card.jsx";
import "../../App.css";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const Home = ({ handleClick, handleFavorite }) => {
  const [phonesData, setPhonesData] = useState([]);

  const phonesItemRef = collection(db, "phones");
  useEffect(() => {
    const getDataFromFireBase = async () => {
      try {
        const dataPhones = await getDocs(phonesItemRef);
        const items = dataPhones.docs.map((doc) => ({
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

  const [headPhonesData, setHeadPhonesData] = useState([]);

  const headPhonesRef = collection(db, "headPhones");

  useEffect(() => {
    const getHeadPhoneDataFromFireBase = async () => {
      try {
        const data = await getDocs(headPhonesRef);
        const items = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setHeadPhonesData(items);
      } catch (error) {
        console.log(error);
      }
    };
    getHeadPhoneDataFromFireBase();
  }, []);

  const [wirelessHeadPhones, setWirelessHeadPhones] = useState([]);

  const wirelessHeadPhoneDataRef = collection(db, "wirelessheadphones");
  useEffect(() => {
    const getWirelessPhonesDataFromFireBase = async () => {
      try {
        const wirelessData = await getDocs(wirelessHeadPhoneDataRef);
        const wirelessItems = wirelessData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setWirelessHeadPhones(wirelessItems);
      } catch (error) {
        console.log(error);
      }
    };
    getWirelessPhonesDataFromFireBase();
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
        {headPhonesData.map((item) => {
          return (
            <div>
              <Card
                link={item.id}
                handleClick={handleClick}
                key={item.id}
                img={item.img}
                name={item.name}
                newPrice={item.price}
                price={item.oldPrice}
                rating={item.rating}
              />
            </div>
          );
        })}
      </div>
      <h3 style={{ color: "slategray", marginTop: "40px" }}>
        Беспроводные наушники
      </h3>
      <div className="wireless">
        {wirelessHeadPhones.map((item) => {
          return (
            <>
            {wirelessHeadPhones ?  <Card
                link={item.id}
                handleClick={handleClick}
                key={item.id}
                img={item.img}
                name={item.name}
                newPrice={item.price}
                price={item.oldPrice}
                rating={item.rating}
              />: 'pffd'}
             
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

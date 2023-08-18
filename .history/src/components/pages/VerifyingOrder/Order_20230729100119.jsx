import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Order.css";
import EditIcon from "@mui/icons-material/Edit";
const Order = () => {
  return (
    <div>
      <h1>Оформление заказа</h1>
      <div className="order__grid">
        <div className="order-form">
          <h3>Доставка курьером</h3>
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <LocationOnIcon /> Адрес доставки
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.93331260461!2d74.50945972543877!3d42.8768455045181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6LCDQmtGL0YDQs9GL0LfRgdGC0LDQvQ!5e0!3m2!1sru!2sde!4v1690235986628!5m2!1sru!2sde"
            width="350px"
            height="100px"
            loading="lazy"
          ></iframe>
          <form className="form">
            <div className="address">
              <select className="city-select" name="City">
                <option value="">Выбрать Город</option>
                <option value="Bishkek">Бишкек</option>
                <option value="Osh">Ош</option>
                <option value="Tokmok">Токмок</option>
              </select>
              <div className="region__street">
                <input type="text" placeholder="Улица/Район" />
                <EditIcon />
              </div>
            </div>

            <div className="house__number">
              <div>
                <input type="number" placeholder="Дом" />
                <EditIcon />
              </div>
              <div>
                <input type="number" placeholder="Квартира" />
                <EditIcon />
              </div>
            </div>
          </form>
        </div>
        <div className="cost__items">
          <h3>Ваш Заказ</h3>
          <ul>
            <li>
              Наушники Apple BYZ S852I <span>$ 40</span>
            </li>
            <li>
              Доставка <span>$ 40</span>
            </li>
            <li>
              К Оплате <span>$ 40</span>{" "}
            </li>
          </ul>
          <div className="payment__method">
            <select className="payment" name="payment" id="payment">
              <option value="none">Способ оплаты</option>
              <option value="visa">Счет на kaspi.kz</option>
              <option value="visa">Счет на kaspi.kz</option>
              <option value="visa">Счет на kaspi.kz</option>
            </select>
          </div>
          <div>
            <h3>Номер получателя</h3>
            <div className="client__contact">
              <input type="number" placeholder="+996/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Order.css";
import EditIcon from "@mui/icons-material/Edit";
const Order = ({ cartItem }) => {
  const [isSubmitForm, setIsSubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    city: "",
    phoneNumber: "",
    street: "",
    house: "",
    flat: "",
    payment: "",
    orderNumber:'',
  });
  const orderNumm = Math.random(Math.floor()1000000);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitForm(!isSubmitForm);
    console.log(formData);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const OrderForm = (
    <div className="order-wrapper">
      <h1>Оформление заказа</h1>
      <form className="order" onSubmit={handleSubmitForm}>
        <div>
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
              className="order-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.93331260461!2d74.50945972543877!3d42.8768455045181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6LCDQmtGL0YDQs9GL0LfRgdGC0LDQvQ!5e0!3m2!1sru!2sde!4v1690235986628!5m2!1sru!2sde"
            ></iframe>
            <div className="form">
              <div className="address">
                <input
                  type="text"
                  placeholder="Город"
                  value={formData.city}
                  name="city"
                  onChange={handleInputChange}
                />
                <div className="region__street">
                  <input
                    type="text"
                    placeholder="Улица/Район"
                    value={formData.street}
                    name="street"
                    onChange={handleInputChange}
                  />
                  <EditIcon />
                </div>
              </div>

              <div className="house__number">
                <div>
                  <input
                    type="number"
                    placeholder="Дом"
                    value={formData.house}
                    name="house"
                    onChange={handleInputChange}
                  />
                  <EditIcon />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Квартира"
                    value={formData.flat}
                    name="flat"
                    onChange={handleInputChange}
                  />
                  <EditIcon />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="cost__items">
          <h3>Ваш Заказ</h3>
          {cartItem.map((el) => {
            return (
              <ul key={el.id}>
                <li>
                  {el.title}{" "}
                  <span>
                    $ {el.price} x {el.total}
                  </span>
                </li>
                <li>
                  К Оплате <span>{el.price * el.total} </span>
                </li>
                <hr />
              </ul>
            );
          })}
          <h3>Полная стоимость: {}</h3>
          <div className="payment__method">
            <select
              className="payment"
              id="payment"
              value={formData.payment}
              name="payment"
              onChange={handleInputChange}
            >
              <option value="cash">Способ оплаты</option>
              <option value="visa">VISA</option>
              <option value="applepay">ApplePay</option>
              <option value="master">Master Card</option>
            </select>
          </div>
          <div>
            <h3>Номер получателя</h3>
            <div className="client__contact">
              <input
                type="text"
                placeholder="0996 "
                value={formData.phoneNumber}
                name="phoneNumber"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button className="form__submit-btn">Закончить оформление</button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      {isSubmitForm ? (
        <h1>Ваш номер заказа {orderNumm} наш менеджер с вам свяжется </h1>
      ) : (
        OrderForm
      )}
    </>
  );
};

export default Order;

import React, { useState, useEffect } from "react";
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
  });
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const [orderNumber, setOrderNumber] = useState(0);

  function generateNumber() {
    setOrderNumber(Math.round(Math.random() * 1000000));
  }
  useEffect(() => {
    console.log({ OrderNumber: orderNumber });
  }, [orderNumber]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitForm(!isSubmitForm);
    generateNumber();
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
            <h4>
              Адрес доставки
            </h4>
            <div>
              <h3>Город:{formData.city} </h3>
              <p>Улица: {formData.street}</p>
              <p>
                Дом {formData.house} ,кв. {formData.flat}
              </p>
              <h3>Номер тел: {formData.phoneNumber}</h3>
              <p>Доставка курьером</p> <span>(5% от суммы заказа)</span>
            </div>
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
                  К Оплате: ${" "}
                  <span style={{ fontWeight: "bolder" }}>
                    {el.price * el.total}{" "}
                  </span>
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
        <p style={{ margin: "50px", textAlign: "center" }}>
          Ваш номер заказа{" "}
          <span style={{ fontWeight: "bolder" }}> {orderNumber} </span> наш
          менеджер с вами свяжется{" "}
        </p>
      ) : (
        OrderForm
      )}
    </>
  );
};

export default Order;

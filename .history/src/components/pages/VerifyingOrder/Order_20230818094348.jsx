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
  const totalCost = cartItem.reduce(
    (total, item) => total + item.price * item.total,
    0
  );

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
    <div className="order_page">
      <h2>Оформление заказа</h2>
      <form className="order" onSubmit={handleSubmitForm}>
        <div>
          <div className="order-form">
            <h4>Delivery address</h4>
            <div>
              <h3>Cyty:{formData.city} </h3>
              <p>Street: {formData.street}</p>
              <p>
                House {formData.house} ,flat. {formData.flat}
              </p>
              <h3>tel number: {formData.phoneNumber}</h3>
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
          <h3>Your order</h3>
          {cartItem.map((el) => {
            return (
              <ul key={el.id}>
                <li>
                  {el.title}
                  <span>
                    $ {el.price} x {el.total}
                  </span>
                </li>
                <li>
                  Price: ${" "}
                  <span style={{ fontWeight: "bolder" }}>
                    {Math.floor( el.price * el.total)}
                  </span>
                </li>
                <hr />
              </ul>
            );
          })}
          <h3>Total:$ {totalCost}</h3>
          <p>
            {" "}
            Доставка по городу : ${" "}
            {Math.round((totalCost / 100) * 1) <= 10
              ? 10
              : Math.round((totalCost / 100) * 1)}
          </p>
          <div className="payment__method">
            <select
              className="payment"
              id="payment"
              value={formData.payment}
              name="payment"
              onChange={handleInputChange}
            >
              <option value="cash">Payment</option>
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
        <div style={{display:'flex',alignItems:'center',flexDirection:'column-reverse'}}>
          <img style={{maxWidth:'100%',}} src="https://firebasestorage.googleapis.com/v0/b/kleinerladen-6644f.appspot.com/o/readycargo.png?alt=media&token=56693ffa-c0dc-4c78-a672-f04772ec645b" alt='Доставка' />
          <h3 style={{ margin: "30px", textAlign: "center" }}>
            Ваш номер заказа{" "}
            <span style={{ fontWeight: "bolder" }}> {orderNumber} </span>
          </h3>
        </div>
      ) : (
        OrderForm
      )}
    </>
  );
};

export default Order;

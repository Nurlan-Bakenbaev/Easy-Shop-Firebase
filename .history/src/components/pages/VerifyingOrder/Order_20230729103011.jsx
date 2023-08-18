import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Order.css";
import EditIcon from "@mui/icons-material/Edit";
const Order = () => {
  const [isSubmitForm, setIsSubmitForm] = useState(false);
function ShowReadyOrder(){
  setIsSubmitForm(!isSubmitForm)
}
  return (
   {isSubmitForm ? <ReadyOrder/>:()}
  );
};

export default Order;

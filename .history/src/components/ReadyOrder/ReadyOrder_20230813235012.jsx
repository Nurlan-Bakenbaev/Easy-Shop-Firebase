import React from 'react'
import '../pages/VerifyingOrder/Order.css'
const ReadyOrder = ({orderNumm}) => {
  return (
    <div className='readyOrder'>
        Номер вашего заказа <span style={{fontSize:'20px',fontWeight:'bolder'}}>№123123</span>, с Вами свяжется наш менеджер.
    </div>
  )
}

export default ReadyOrder
import React, { useContext } from 'react'
import OrderItem from '../components/OrderItem'
import '../styles/MyOrder.scss'
import arrowBack from '../assets/icons/flechita.svg'
import AppContext from '../context/AppContext'

const MyOrder = () => {
  const { state } = useContext(AppContext)

  const sumTotal = () => {
    return state.car.reduce((acc, cur) => acc + cur.price, 0)
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrowBack} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.car.map(item => (
          <OrderItem product={item} key={`order-item-${item.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  )
}

export default MyOrder
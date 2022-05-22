import React, { useContext, useState } from 'react'
import '../styles/Header.scss'
import icon from '../assets/icons/icon_menu.svg'
import logo from '../assets/logos/logo_yard_sale.svg'
import iconShoppingCart from '../assets/icons/icon_shopping_cart.svg'
import Menu from './Menu'
import AppContext from '../context/AppContext'
import MyOrder from '../containers/MyOrder'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const { state } = useContext(AppContext)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <nav>
      <img src={icon} alt='icon' className="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleClick}>platzi@example.com</li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={iconShoppingCart} alt="shopping cart" />
            {state.car.length > 0 ? <div>{state.car.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  )
}

export default Header
import React from 'react'
import '../css/Header.css'
import logo from '../img/room-service (1).png'
export const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo" />
        <h1>Savory</h1>
    </header>
  )
}

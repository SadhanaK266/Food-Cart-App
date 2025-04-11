import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'
export const Nav = ({cartItem,setCartItem}) => {
  return (
    <nav>
        <Link to='/' style={{textDecoration:'none'}}><h3>Home</h3></Link>
        <Link to='/Cart' style={{textDecoration:'none'}}><h3>Cart <span>{cartItem.length}</span></h3></Link>
        <Link to='/About' style={{textDecoration:'none'}}><h3>About</h3></Link>
        <Link to='/Contact' style={{textDecoration:'none'}}><h3>Contact</h3></Link>
        <Link to='/Review' style={{textDecoration:'none'}}><h3>Review</h3></Link>
    </nav>
  )
}

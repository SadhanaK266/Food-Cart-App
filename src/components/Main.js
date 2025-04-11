import React from 'react'
import '../css/Main.css'
import { Nav } from './Nav'
import { Content } from './Content'
export const Main = ({cartItem,setCartItem}) => {
  return (
    <main>
        <Nav cartItem={cartItem} setCartItem={setCartItem}/>
        <Content cartItem={cartItem} setCartItem={setCartItem}/>
    </main>
  )
}

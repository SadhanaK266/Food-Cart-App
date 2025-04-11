import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  var [cartItem,setCartItem]=useState([])
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main cartItem={cartItem} setCartItem={setCartItem}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { books } from './data'

import Nav from "./components/Nav";
import Footer from "./components/Footer.jsx"

import Home from "./pages/Home.jsx"
import Books from "./pages/Books.jsx"
import BookInfo from "./pages/BookInfo.jsx"
import Cart from "./pages/Cart.jsx"




function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book){
    setCart([...cart, {...book, quantity: +1}]);
  }

function changeQuantity(book, quantity){
  setCart(cart.map((item) => 
    item.id === book.id ? {
      ...item, quantity: +quantity
    } : 
      item
  ))
}

function removeItem(book){
  setCart(cart.filter(item => item.id !== book.id))
}

  useEffect(() => {

  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav cart={cart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books}/>}/>
          <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />}/>
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

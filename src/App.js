import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { CartContext,ProductContext } from "./contexts";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart,item])
  };

  const removeItem=(item)=>{
    setCart(cart.filter(elem=> elem.id!==item.id))
  }

  return (
    <div className="App">
      <CartContext.Provider value={{cart,removeItem}}>
      <Navigation />
      {/* Routelar */}
      <main className="content">
        <ProductContext.Provider value={{products,addItem}}>
        <Route exact path="/">
          <Products/>
        </Route>
        </ProductContext.Provider>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>
      </CartContext.Provider>
    </div>
  );
}

export default App;

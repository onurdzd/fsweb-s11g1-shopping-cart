import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { CartContext,ProductContext } from "./contexts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("sepetItem")) ? JSON.parse(localStorage.getItem("sepetItem")) : []);
  
  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart,item]);
    localeEkle(item);
  };
  
  const localeEkle=(item)=>{
    localStorage.setItem("sepetItem",JSON.stringify([...cart, item]))
  }

  const removeItem=(item)=>{
    localdenSil(item)
  }

  const localdenSil=(item)=>{
    localStorage.setItem("sepetItem",JSON.stringify((cart.filter(elem=> elem.id!==item.id))))
    setCart((cart.filter(elem=> elem.id!==item.id)))
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
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { CartContext,ProductContext } from "./contexts";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [localCart,setLocalCart]=useState(localStorage.getItem("sepetItem") ? localStorage.getItem("sepetItem") : [])
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart,item]);
    localeEkle(item);
  };
  
  const localeEkle=(item)=>{
    localStorage.setItem("sepetItem",JSON.stringify([...localCart, item]))
    setLocalCart([...localCart,item])
  }

  const removeItem=(item)=>{
    localdenSil(item)
  }

  const localdenSil=(item)=>{
    localStorage.setItem("sepetItem",JSON.stringify((cart.filter(elem=> elem.id!==item.id))))
    setLocalCart(cart.filter(elem=> elem.id!==item.id))
  }

  useEffect(()=>{
    setCart(localCart)
  },[localCart])

  console.log(cart)

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

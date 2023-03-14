import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CartContext } from "../contexts";
import { toast } from "react-toastify";

const Item = (props) => {

  const {removeItem} = useContext(CartContext)
  const notify = () => toast("Ürün sepetten silindi!");

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={()=>{removeItem(props);notify()}}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;

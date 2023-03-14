import React, { useContext } from "react";
import { ScProduct } from "./scParts";
import { ProductContext } from "../contexts";
import { toast } from "react-toastify";


const Product = (props) => {

  const notify = () => toast("Ürün sepete eklendi!");

  const {addItem} = useContext(ProductContext)

  return (
    <ScProduct>
      <img src={props.product.image} alt={`${props.product.title} book`} />
      <div className="details">
        <h1 className="title">{props.product.title}</h1>
        <div className="footer">
          <p className="price">${props.product.price}</p>
          <button onClick={() => {addItem(props.product);notify()}}>
            Add to cart
          </button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;

import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { ToastContainer, toast } from "react-toastify";

function Product({ id, title, image, price, rating, count }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
      //dispatch the item into the data later
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          count: 1,
          },
      });   
  
  };

  return (
    <div className="product">
      <div className="product__image">
        <img src={image} alt="" />
        <div className="overlay">
          <button className="buy-btn" onClick={addtoBasket}>
            Add to Basket
          </button>
        </div>
      </div>
      <div className="type">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} style={{ fontSize: 15 }} />
          ))}
        {Array(5 - rating)
          .fill()
          .map((_, i) => (
            <StarBorderIcon key={i} style={{ fontSize: 15 }} />
          ))}
      </div>
      <a href="#" className="price">
        <small>$</small>
        <strong>{price}</strong>
      </a>
      <br></br>
    </div>
  );
}

export default Product;

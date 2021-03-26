import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function CheckoutProduct({ id, image, title, price, rating, count, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
      dispatch({
          type: 'REMOVE_FROM_BASKET',
          id: id,
      })
  };
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
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title"> {title} </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} style={{ fontSize: 20 }} />
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, i) => (
              <StarBorderIcon key={i} style={{ fontSize: 20 }} />
            ))}
        </div>
        <br></br>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong> {price} </strong>
          <small>x</small>
          <strong> {count} </strong>
        </p>
        {!hideButton && (
          <button onClick={addtoBasket} className="checkoutbutton1">
            Add To Basket
          </button>
        )}
        <br></br>
        {!hideButton && (
          <button onClick={removeFromBasket} className="checkoutbutton2">
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;

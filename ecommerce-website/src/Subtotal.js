import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  const getCount = (list) => {
    let nCount = 0;
    list.map((item) => {
      return (nCount = nCount + item.count);
    });
    return nCount;
  };

  const getTotal = (list) => {
    let total = 0;
    list.map((item) => {
      return (total = total + (item.count*item.price));
    });
    return total.toFixed(2);
  };

  const emptyBasket = () => {
    dispatch({
          type: "EMPTY_BASKET",
        });
      }




    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({getCount(basket)} items):{" "}
                <strong>{getTotal(basket)}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                <span className="gift">This order contains a gift</span>
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <button onClick={emptyBasket} className="emptycart">
          {" "}
          Empty Basket
        </button>

        <button onClick={(e) => history.push("/payment")} className="proceed">
          {" "}
          Proceed to Checkout
        </button>
      </div>
    );
}

export default Subtotal

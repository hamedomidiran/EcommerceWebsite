import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { auth } from "./firebase";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const getCount = (list) => {
    let nCount = 0;
    list.map( (item)=> { return nCount = nCount + item.count } );
    return nCount;
  }

  return (
    <div className="checkout">
      <div className="column1">
        <div className="row">
          <Link to="/">
            <img className="sidebar__logo" src="./images/Blockbuster2.png" />
          </Link>

          <Link to="/orders">
            <div className="navbar__option2">
              <span className="navbar__option2LineOne"> Returns & Orders </span>
            </div>
          </Link>

          <Link to="/checkout" className="checkoutLink">
            <div className="navbar_optionBasket">
              <ShoppingCartIcon color="action" />
              <span className="navbar__option3LineTwo navbar__basketCount">
                {/* {basket?.length} */}
                { getCount(basket) }
              </span>
            </div>
          </Link>

          <Link to={!user && "/login"} className="loginLink">
            <div onClick={handleAuthentication} className="navbar__option3">
              <span className="navbar__option1LineOne">
                {" "}
                Hello {!user ? "Guest" : user.email}{" "}
              </span>
              <br></br>
              <span className="navbar__option1LineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="checkoutcolumn2">
        <div className="checkout__left">
          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                count={item.count}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

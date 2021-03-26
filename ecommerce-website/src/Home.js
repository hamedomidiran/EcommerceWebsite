import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import ProductData from "./ProductData";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { ToastContainer, toast } from "react-toastify";

function Home() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
        dispatch({
          type: "EMPTY_BASKET",
        });
      }
    };
    
    const getCount = (list) => {
      let nCount = 0;
      list.map( (item)=> { return nCount = nCount + item.count } );
      return nCount;
    }
    

  return (
    <div className="home">
      <div className="column1">
        <Link to="/">
          <img className="sidebar__logo" src="./images/Blockbuster2.png" />
        </Link>
        <div className="row">
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
      <div className="column2">
        <div className="row">
          <img className="home__MainPic" src="./images/home-image.jpg" />
        </div>
        <div className="promorow">
          <div className="promocol">
            <LocalShippingIcon style={{ fontSize: 45 }} />
            <div className="row promo_Row2">
              <strong>FREE SHIPPING</strong>
              <p>Orders $50 for more</p>
            </div>
          </div>
          <div className="promocol">
            <RotateLeftIcon style={{ fontSize: 45 }} />
            <div className="row promo_Row2">
              <strong>FREE RETURNS</strong>
              <p>Within 30 days</p>
            </div>
          </div>
          <div className="promocol">
            <ErrorOutlineIcon style={{ fontSize: 45 }} />
            <div className="row promo_Row2">
              <strong>GET 20% OFF 1 ITEM</strong>
              <p>When you sign up</p>
            </div>
          </div>
          <div className="promocol">
            <ContactSupportIcon style={{ fontSize: 45 }} />
            <div className="row promo_Row2">
              <strong>WE SUPPORT</strong>
              <p>24/7 amazing services</p>
            </div>
          </div>
        </div>
        <p className="products__Header">BEST SELLING</p>
        <ProductData />
      </div>
    </div>
  );
}

export default Home;

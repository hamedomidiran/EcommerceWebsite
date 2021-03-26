import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Sidebar() {
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
      <div className="Sidebar">
        <Link to="/">
          <img
            className="sidebar__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="navbar__option1">
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

        <div className="navbar__option2">
          <span className="navbar__option2LineOne"> Returns </span>
          <span className="navbar__optionLineTwo"> & Orders </span>
        </div>

        <Link to="/checkout">
          <div className="navbar_optionBasket">
            <ShoppingBasketIcon />
            <span className="navbar__option3LineTwo navbar__basketCount">
              {/* {basket?.length} */}
              { getCount(basket) }
            </span>
          </div>
        </Link>
      </div>
    );
}

export default Sidebar

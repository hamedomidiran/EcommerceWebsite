import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

    return (
      <div className="header">


        <div className="header__search">
          <input className="header__searchInput" type="text" placeholder= "Search for a movie" />
          <SearchIcon className="header__searchIcon" />
        </div>

        
      </div>
    );
}

export default Header

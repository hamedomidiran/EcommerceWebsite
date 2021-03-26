import React from "react";
import "./Header2.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="checkoutheader">
      <div className="checkout__search">
        <Link to="/">
          <img className="checkout__logo" src="./images/Blockbuster1.png" />
        </Link>
      </div>
    </div>
  );
}

export default Header;

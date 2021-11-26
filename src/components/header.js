import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import MailIcon from "@material-ui/icons/Mail";

function Header() {
  return (
    <nav>
      <div className="logo">Rayes.</div>
      <ul>
        <li>Home</li>
        <li>Our products</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <div className="search">
        <SearchIcon className="fa" />
        <ShoppingBasketIcon className="fa" />
      </div>
    </nav>
  );
}

export default Header;

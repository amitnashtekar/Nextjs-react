import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateContext } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateContext();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://images-na.ssl-images-amazon.com/images/G/01/SellerForums/amz/amazon-seller-forums-logo-small-1._CB488193639_.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne"> Hello Guest</span>
          <span className="header__optionLineTwo"> Sign In </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Returns</span>
          <span className="header__optionLineTwo"> & Orders </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLineTwo"> Prime </span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_shoppingBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header_BasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;

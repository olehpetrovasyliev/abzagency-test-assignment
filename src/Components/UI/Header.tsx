import React from "react";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { getTokenThunk } from "../../helpers/redux/auth/authOperations";
import { AppDispatch } from "../../helpers/types/reduxConfigTypes";
import logo from "../../assets/Logo.svg";

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const getToken = () => dispatch(getTokenThunk());

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logoWrapper">
          <img src={logo} alt="Company logo" className="header__logo" />
        </div>
        <div className="header__buttons">
          <a href="#users" className="button button-primary header__btn">
            Users
          </a>
          <Button
            className="button-primary"
            func={getToken}
            text="Sign Up"
            type="button"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

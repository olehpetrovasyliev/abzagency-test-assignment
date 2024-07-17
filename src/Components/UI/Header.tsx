import React from "react";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { getTokenThunk } from "../../helpers/redux/auth/authOperations";
import { AppDispatch } from "../../helpers/types/reduxConfigTypes";

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const getToken = () => dispatch(getTokenThunk());

  return (
    <header>
      <div className="header__container">
        <img src="" alt="" />
        <div className="header__buttons">
          <a href="#users" className="button button-primary">
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

import React, { useEffect } from "react";
import { Button } from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../helpers/types/reduxConfigTypes";
import { getAllUsersThunk } from "../../../helpers/redux/users/usersOperations";
import { UsersListMarkup } from "./UsersList";
import { selectUsers } from "../../../helpers/redux/users/usersSelectors";

export const UsersSection = () => {
  const dispatch: AppDispatch = useDispatch();
  const usersArray = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getAllUsersThunk({ page: 1, count: 10 }));
  }, [dispatch]);

  return (
    <section className="users">
      <div className="users__container">
        <UsersListMarkup arr={usersArray} />
        <Button text="Show more" func={() => console.log(1)} />
      </div>
    </section>
  );
};

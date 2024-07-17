import React, { useEffect, useState } from "react";
import { Button } from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../helpers/types/reduxConfigTypes";
import { getAllUsersThunk } from "../../../helpers/redux/users/usersOperations";
import { UsersListMarkup } from "./UsersList";
import {
  selectNextPageAvailable,
  selectUsers,
} from "../../../helpers/redux/users/usersSelectors";

export const UsersSection = () => {
  const dispatch: AppDispatch = useDispatch();
  const usersArray = useSelector(selectUsers);
  const isNextPageAvailable = useSelector(selectNextPageAvailable);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllUsersThunk({ page, count: 6 }));
  }, [dispatch, page]);

  return (
    <section className="users">
      <div className="users__container">
        <h1 className="users__title">Working with GET request</h1>
        <UsersListMarkup arr={usersArray} />
        <Button
          text="Show more"
          func={() => setPage((prev) => prev + 1)}
          disabled={!isNextPageAvailable}
          className="button-primary"
        />
      </div>
    </section>
  );
};

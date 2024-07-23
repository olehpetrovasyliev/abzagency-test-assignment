import { useEffect, useState } from "react";
import { Button } from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../helpers/types/reduxConfigTypes";
import { getAllUsersThunk } from "../../../helpers/redux/users/usersOperations";
import { UsersListMarkup } from "./UsersList";
import {
  selectLoading,
  selectNextPageAvailable,
  selectUsers,
} from "../../../helpers/redux/users/usersSelectors";
import { Preloader } from "../../UI/Preloader";

export const UsersSection = () => {
  const dispatch: AppDispatch = useDispatch();
  const usersArray = useSelector(selectUsers);
  const isNextPageAvailable = useSelector(selectNextPageAvailable);
  const isLoading = useSelector(selectLoading);

  const [count, setCount] = useState<number>(6);

  useEffect(() => {
    dispatch(getAllUsersThunk({ page: 1, count }));
  }, [dispatch, count]);

  return (
    <section className="users" id="users">
      <div className="users__container">
        <h1 className="title users__title">Working with GET request</h1>
        <UsersListMarkup arr={usersArray} />

        {isLoading ? (
          <Preloader />
        ) : (
          <Button
            text="Show more"
            func={() => setCount((prev) => prev + 6)}
            disabled={!isNextPageAvailable}
            className={`button-primary users__button ${
              isNextPageAvailable ? "" : "button-hidden"
            }`}
            type="button"
          />
        )}
      </div>
    </section>
  );
};

import React, { useEffect } from "react";
import { selectPositions } from "../../../helpers/redux/positions/positionsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getAllPositionsThunk } from "../../../helpers/redux/positions/positionsOperations";
import { Button } from "../../UI/Button";

export const AddUserForm = () => {
  const positions = useSelector(selectPositions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPositionsThunk());
  }, [dispatch]);

  return (
    <form className="addUser__form">
      <div className="addUser__form-field">
        <input type="text" className="addUser__input-text" name="name" />
        <label htmlFor="name">Name</label>
      </div>

      <div className="addUser__form-field">
        <input type="email" className="addUser__input-text" name="email" />
        <label htmlFor="email">Email</label>
      </div>

      <div className="addUser__form-field">
        <input type="text" className="addUser__input-text" name="phone" />
        <label htmlFor="Phone">Phone</label>
      </div>

      {positions?.map((pos) => (
        <div className="addUser__form-field">
          <input type="radio" value={pos.id} name="position_id" />
          <label htmlFor="position_id">{pos.name}</label>
        </div>
      ))}

      <div className="addUser__form-field">
        <input type="file" className="addUser__input-media" name="media" />
        <label htmlFor="media">Choose file</label>
      </div>

      <Button type="submit">Sign up</Button>
    </form>
  );
};

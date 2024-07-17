import React, { useEffect } from "react";
import { selectPositions } from "../../../helpers/redux/positions/positionsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { getAllPositionsThunk } from "../../../helpers/redux/positions/positionsOperations";

const AddUserform = () => {
  const positions = useSelector(selectPositions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPositionsThunk());
  }, [dispatch]);

  return (
    <form className="addUser__form">
      <div className="addUser__form-field">
        <label htmlFor="name">Name</label>
        <input type="text" className="addUser__input-text" name="name" />
      </div>

      <div className="addUser__form-field">
        <label htmlFor="email">Email</label>
        <input type="email" className="addUser__input-text" name="email" />
      </div>

      <div className="addUser__form-field">
        <label htmlFor="Phone">Phone</label>
        <input type="text" className="addUser__input-text" name="phone" />
      </div>

      {positions?.map((pos) => (
        <div className="addUser__form-field">
          <label htmlFor="position_id">{pos.name}</label>
          <input type="radio" value={pos.id} name="position_id" />
        </div>
      ))}

      <div className="addUser__form-field">
        <input type="file" className="addUser__input-media" />
      </div>
    </form>
  );
};

export default AddUserform;

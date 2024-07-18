import { useSelector } from "react-redux";
import { selectIsUSerAdded } from "../../../helpers/redux/users/usersSelectors";
import { AddUserForm } from "./AddUserForm";
import { AddUserSuccess } from "./AddUserSuccess.tsx";

export const AddUserSection = () => {
  const isAdded = useSelector(selectIsUSerAdded);
  return (
    <section className="addUser" id="addUser">
      <div className="addUser__container">
        <h1 className="title addUser__title">
          {!isAdded
            ? "Working with POST request"
            : "User successfully registered"}
        </h1>
        {isAdded ? <AddUserSuccess /> : <AddUserForm />}
      </div>
    </section>
  );
};

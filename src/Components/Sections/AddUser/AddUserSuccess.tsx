import { FC } from "react";
import successImage from "../../../assets/success-image.svg";

export const AddUserSuccess: FC = () => {
  return (
    <div className="addUSer__success-media">
      <img
        src={successImage}
        alt="User added succesfully"
        className="addUser__success-img"
      />
    </div>
  );
};

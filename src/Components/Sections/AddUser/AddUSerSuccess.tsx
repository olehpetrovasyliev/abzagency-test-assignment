import successImage from "../../../assets/success-image.svg";

export const AddUserSuccess = () => {
  return (
    // <div className="addUser__success-message">
    <div className="addUSer__success-media">
      <img
        src={successImage}
        alt="User added succesfully"
        className="addUser__success-img"
      />
    </div>
    // </div>
  );
};

import { FC, useState } from "react";
import { User } from "../../../helpers/types/usersTypes";
import userPlaceholder from "../../../assets/photo-cover.svg";

export const UserCard: FC<User> = ({
  id,
  photo,
  name,
  position,
  email,
  phone,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(photo || userPlaceholder);

  const handleImageError = () => {
    setImgSrc(userPlaceholder);
  };

  return (
    <li className="users__item" key={id}>
      <div className="users__item-media"></div>

      <p className="users__item-name">{name}</p>

      <div className="users__item-info">
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </li>
  );
};

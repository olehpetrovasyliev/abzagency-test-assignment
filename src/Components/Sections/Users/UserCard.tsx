import React, { FC } from "react";
import { User } from "../../../helpers/types/usersTypes";

export const UserCard: FC<User> = ({
  id,
  photo,
  name,
  position,
  email,
  phone,
}) => {
  return (
    <li className="users__item" key={id}>
      <div className="users__item-media">
        <img src={photo} alt={`${name}'s photo}`} className="users__item-img" />
      </div>

      <p className="users__item-name">{name}</p>

      <div className="users__item-info">
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </li>
  );
};

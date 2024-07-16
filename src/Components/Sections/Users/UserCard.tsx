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
      <div className="user__item-media">
        <img src={photo} alt={`${name}'s photo}`} className="users__item-img" />
      </div>

      <p>{name}</p>

      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </li>
  );
};

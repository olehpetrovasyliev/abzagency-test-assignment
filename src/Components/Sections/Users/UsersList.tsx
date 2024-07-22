import { FC } from "react";
import { User, UsersList } from "../../../helpers/types/usersTypes";
import { UserCard } from "./UserCard";

type UsersListComponentProps = { arr: UsersList | [] };

export const UsersListMarkup: FC<UsersListComponentProps> = ({ arr }) => {
  return (
    <>
      <ul className="users__list">
        {arr.map((el: User) => (
          <UserCard {...el} key={el.id} />
        ))}
      </ul>
    </>
  );
};

import { FC } from "react";
import { User, UsersList } from "../../../helpers/types/usersTypes";
import { UserCard } from "./UserCard";
import { selectLoading } from "../../../helpers/redux/users/usersSelectors";
import { useSelector } from "react-redux";
import { Preloader } from "../../UI/Preloader";

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

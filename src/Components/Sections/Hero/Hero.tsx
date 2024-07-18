import { Button } from "../../UI/Button";
import { useDispatch } from "react-redux";
import { getTokenThunk } from "../../../helpers/redux/auth/authOperations";
import { AppDispatch } from "../../../helpers/types/reduxConfigTypes";

export const Hero = () => {
  const dispatch: AppDispatch = useDispatch();

  const getToken = () => dispatch(getTokenThunk());
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="title hero__title">
            Test assignment for front-end developer
          </h1>
          <p className="hero__text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
        </div>
        <Button
          text="Sign up"
          func={getToken}
          className="button-primary"
          type="button"
        />
      </div>
    </section>
  );
};

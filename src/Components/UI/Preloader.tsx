import { TailSpin } from "react-loader-spinner";

export const Preloader = () => {
  return (
    <div className="loaderWrapper">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#00bdd3"
        ariaLabel="Loading, please wait"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

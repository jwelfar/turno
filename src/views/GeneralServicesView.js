import { Navigate } from "react-router-dom";
import { GeneralServices } from "../Components/GeneralServices";

export const GeneralServicesView = ({ info, category }) => {
  return (
    <>
      {info.length <= 0 ? (
        <Navigate to={"/"} />
      ) : (
        <GeneralServices info={info} category={category} />
      )}
      ;
    </>
  );
};

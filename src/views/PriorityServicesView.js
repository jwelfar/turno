import { Navigate } from "react-router-dom";
import { PriorityServices } from "../Components/PriorityServices";

export const PriorityServicesView = ({ info, category }) => {
  return (
    <>
      {info.length <= 0 ? (
        <Navigate to={"/"} />
      ) : (
        <PriorityServices info={info} category={category} />
      )}
    </>
  );
};

// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PriorityServices } from "../Components/PriorityServices";
import { Button, Stack } from "react-bootstrap";

export const PriorityServicesView = ({ info, category }) => {
  return (
    <>
      <Stack>
        <PriorityServices info={info} category={category} />
        <br />
        <Stack direction="horizontal">
          <Button className="border ms-auto">
            <Link
              style={{ textDecoration: "none", color: "#FFF" }}
              to={"/type-of-service"}
            >
              Atrás
            </Link>
          </Button>
          <Button className="mx-auto border ms-auto">
            <Link style={{ textDecoration: "none", color: "#FFF" }} to={"/"}>
              Inicio
            </Link>
          </Button>
        </Stack>
      </Stack>
      {/* {info.length <= 0 ? (
        <Navigate to={"/"} />
      ) : ( */}
      {/* <PriorityServices info={info} category={category} /> */}
      {/* )} */}
    </>
  );
};

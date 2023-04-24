// import { Navigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import { GeneralServices } from "../Components/GeneralServices";
import { Link } from "react-router-dom";

export const GeneralServicesView = ({ info, category }) => {
  return (
    <>
      <Stack>
        <GeneralServices info={info} category={category} />
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
      {/* <GeneralServices info={info} category={category} /> */}
      {/* )} */};
    </>
  );
};

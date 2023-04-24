import { Button, Stack } from "react-bootstrap";
import { TypeOfService } from "../Components/TypeOfService";
import { Link } from "react-router-dom";

export const TypeServiceView = ({ setCategory }) => {
  return (
    <>
      <Stack>
        <TypeOfService setCategory={setCategory} />;
        <br />
        <Button className="mx-auto">
          <Link style={{ textDecoration: "none", color: "#FFF" }} to={"/"}>
            Volver
          </Link>
        </Button>
      </Stack>
    </>
  );
};

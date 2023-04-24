import { Button, Stack } from "react-bootstrap";
import { IdFinder } from "../Components/IdFinder";
import { Link } from "react-router-dom";

export const IdFinderView = ({ setInfo }) => {
  return (
    <>
      <Stack>
        <IdFinder setInfo={setInfo} />
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

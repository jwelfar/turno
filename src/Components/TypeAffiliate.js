import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TypeAffiliate = () => {
  return (
    <>
      <Stack className="col-md-5 mx-auto">
        <Button className="mb-3">
          <Link
            style={{ textDecoration: "none", color: "#FFF" }}
            to={"/idfinder"}
          >
            Afiliado
          </Link>
        </Button>
        <Button className="mb-3">
          <Link
            style={{ textDecoration: "none", color: "#FFF" }}
            to={"/type-of-service"}
          >
            No Afiliado
          </Link>
        </Button>
      </Stack>
    </>
  );
};

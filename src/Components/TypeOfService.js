import axios from "axios";
import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TypeOfService = ({ setCategory }) => {
  const GetGeneralService = (e) => {
    e.preventDefault();

    axios
      .get(`https://jedtickets.azurewebsites.net/api/Tickets/1`)
      .then((res) => {
        if (res.data) {
          setCategory(res.data);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const GetPriorityService = (e) => {
    e.preventDefault();

    axios
      .get(`https://jedtickets.azurewebsites.net/api/Tickets/2`)
      .then((res) => {
        if (res.data) {
          setCategory(res.data);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <>
      <Stack className="col-md-5 mx-auto">
        <Button
          className="mb-3"
          onClick={(e) => {
            GetGeneralService(e);
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#FFF" }}
            to={"/general-service"}
          >
            Servicio General
          </Link>
        </Button>
        <Button
          onClick={(e) => {
            GetPriorityService(e);
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#FFF" }}
            to={"/priority-service"}
          >
            Prioridad
          </Link>
        </Button>
      </Stack>
    </>
  );
};

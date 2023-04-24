import axios from "axios";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import gsBtn from "../assets/img/s-generales.png";
import priorityBtn from "../assets/img/s-prioridad.png";
import "../Styles/Btn.css";

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
        <button
          className="mb-3"
          onClick={(e) => {
            GetGeneralService(e);
          }}
        >
          <Link to={"/general-service"}>
            <img src={gsBtn} alt="Servicio General" />
          </Link>
        </button>
        <button
          onClick={(e) => {
            GetPriorityService(e);
          }}
        >
          <Link to={"/priority-service"}>
            <img src={priorityBtn} alt="Prioridad" />
          </Link>
        </button>
      </Stack>
    </>
  );
};

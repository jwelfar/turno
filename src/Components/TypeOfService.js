import axios from "axios";
import { Spinner, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import gsBtn from "../assets/img/s-generales.png";
import priorityBtn from "../assets/img/s-prioridad.png";
import "../Styles/Btn.css";
import { useEffect, useState } from "react";

export const TypeOfService = ({ setCategory }) => {
  const [loader, setLoader] = useState({
    GS: false,
    PS: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (loader.GS) {
      axios
        .get(`https://jedtickets.azurewebsites.net/api/Tickets/1`)
        .then((res) => {
          if (res.data) {
            setCategory(res.data);
            navigate("/general-service");
          }
        })
        .catch((err) => {
          console.log("Error", err);
          setLoader({ GS: false });
        });
    }
  }, [loader.GS]);

  const GetGeneralService = (e) => {
    e.preventDefault();
    setLoader({ GS: true });
  };

  useEffect(() => {
    if (loader.PS) {
      axios
        .get(`https://jedtickets.azurewebsites.net/api/Tickets/2`)
        .then((res) => {
          if (res.data) {
            setCategory(res.data);
            navigate("/priority-service");
          }
        })
        .catch((err) => {
          console.log("Error", err);
          setLoader({ PS: false });
        });
    }
  }, [loader.PS]);

  const GetPriorityService = (e) => {
    e.preventDefault();
    setLoader({ PS: true });
  };

  return (
    <>
      <Stack className="col-md-5 mx-auto">
        <button
          className="mb-3"
          onClick={
            !loader.GS
              ? (e) => {
                  GetGeneralService(e);
                }
              : null
          }
        >
          {loader.GS ? (
            <Spinner animation="border" />
          ) : (
            <img src={gsBtn} alt="Servicio General" />
          )}
        </button>

        <button
          onClick={
            !loader.PS
              ? (e) => {
                  GetPriorityService(e);
                }
              : null
          }
        >
          {loader.PS ? (
            <Spinner animation="border" />
          ) : (
            <img src={priorityBtn} alt="Prioridad" />
          )}
        </button>
      </Stack>
    </>
  );
};

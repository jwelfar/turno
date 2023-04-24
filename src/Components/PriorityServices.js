import axios from "axios";
import { useState } from "react";
import { Button, Card, Modal, Stack } from "react-bootstrap";
import advisoryBtn from "../assets/img/asesoría.png";
import serviceBtn from "../assets/img/servicios.png";
import "../Styles/Btn.css";

export const PriorityServices = ({ info, category }) => {
  const [show, setShow] = useState(false);
  const [subCategory, setSubCategory] = useState({});
  const [recordConsec, setRecordConsec] = useState({
    typeTurn: "",
    advisory: undefined,
    service: undefined,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const GetPAdvisory = (e) => {
    e.preventDefault();

    axios
      .get(`https://jedtickets.azurewebsites.net/api/TicketSubcategoria/12`)
      .then((res) => {
        if (res.data) {
          setSubCategory(res.data);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const GetPService = (e) => {
    e.preventDefault();

    axios
      .get(`https://jedtickets.azurewebsites.net/api/TicketSubcategoria/11`)
      .then((res) => {
        if (res.data) {
          setSubCategory(res.data);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const GetAdvisoryRecord = (e) => {
    e.preventDefault();
    setRecordConsec((prevState) => {
      return { ...prevState, typeTurn: "advisory" };
    });

    axios
      .get("https://jedtickets.azurewebsites.net/api/TsRegistros/12")
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          const number = res.data.nConsecutivo;
          setRecordConsec((prevState) => {
            return { ...prevState, advisory: number };
          });
          // setAdvisoryRecordConsec(res.data.nConsecutivo + 1);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const GetServiceRecord = (e) => {
    e.preventDefault();
    setRecordConsec((prevState) => {
      return { ...prevState, typeTurn: "service" };
    });
    axios
      .get("https://jedtickets.azurewebsites.net/api/TsRegistros/11")
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          const number = res.data.nConsecutivo;
          setRecordConsec((prevState) => {
            return { ...prevState, service: number };
          });
          // setServiceRecordConsec(res.data.nConsecutivo + 1);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  // console.log("ad", recordConsec.advisory);
  // console.log("serv", recordConsec.service);

  const addRecord = (e) => {
    e.preventDefault();

    axios
      .post("https://jedtickets.azurewebsites.net/api/TsRegistros", {
        idSubservicio: subCategory.id,
        nConsecutivo:
          recordConsec[recordConsec.typeTurn] < 99
            ? recordConsec[recordConsec.typeTurn] + 1
            : 1,
        idUsuario: info.id,
      })
      .then((res) => {
        console.log("DATA POST", res.data);
        if (res.data) {
          setRecordConsec((prevState) => {
            return {
              ...prevState,
              [prevState.typeTurn]: res.data.nConsecutivo,
            };
          });
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
            handleShow();
            GetPAdvisory(e);
            GetAdvisoryRecord(e);
          }}
        >
          <img src={advisoryBtn} alt="Asesoría" />
        </button>
        <button
          className="mb-3"
          onClick={(e) => {
            handleShow();
            GetPService(e);
            GetServiceRecord(e);
          }}
        >
          <img src={serviceBtn} alt="Servicio" />
        </button>

        {!subCategory.codigo ? null : (
          <Card
            className="mx-auto"
            style={{ width: "18rem", textAlign: "center" }}
          >
            <Card.Body>
              <Card.Title>
                {info.identification
                  ? info.identification
                  : "Identificación N/A"}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {info.username ? info.username : "Cliente N/A"}
              </Card.Subtitle>
              <Card.Text>
                <b>Turno</b>
                <br />
                <span style={{ fontSize: "40px" }}>
                  {subCategory.codigo} {recordConsec[recordConsec.typeTurn] + 1}
                </span>
                <br />
                {category.category_name}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </Stack>

      <Modal style={{ textAlign: "center" }} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>
            {info.identification ? info.identification : "Identificación N/A"}
          </b>
          <br />
          {info.username ? info.username : "Cliente N/A"}
          <br />
          <span style={{ fontSize: "40px" }}>
            {subCategory.codigo} {recordConsec[recordConsec.typeTurn] + 1}
          </span>
          <br />
          {category.category_name}
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "center" }}>
          <Button
            variant="primary"
            onClick={(e) => {
              addRecord(e);
            }}
          >
            Agregar turno
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

import axios from "axios";
import { useState } from "react";
import { Button, Card, Modal, Stack } from "react-bootstrap";

export const GeneralServices = ({ info, category }) => {
  const [show, setShow] = useState(false);
  const [subCategory, setSubCategory] = useState({});
  const [recordConsec, setRecordConsec] = useState({
    typeTurn: "",
    advisory: undefined,
    service: undefined,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const GetGSAdvisory = (e) => {
    e.preventDefault();

    axios
      .get(`https://jedtickets.azurewebsites.net/api/TicketSubcategoria/2`)
      .then((res) => {
        if (res.data) {
          setSubCategory(res.data);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const GetGSService = (e) => {
    e.preventDefault();

    axios
      .get(`https://jedtickets.azurewebsites.net/api/TicketSubcategoria/1`)
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
      .get("https://jedtickets.azurewebsites.net/api/TsRegistros/2")
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
    axios
      .get("https://jedtickets.azurewebsites.net/api/TsRegistros/1")
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
        <Button
          className="mb-3"
          onClick={(e) => {
            handleShow();
            GetGSAdvisory(e);
            GetAdvisoryRecord(e);
          }}
        >
          Asesoría
        </Button>
        <Button
          className="mb-3"
          onClick={(e) => {
            handleShow();
            GetGSService(e);
            GetServiceRecord(e);
          }}
        >
          Servicio
        </Button>

        {!subCategory.codigo ? null : (
          <Card
            className="mx-auto"
            style={{ width: "18rem", textAlign: "center" }}
          >
            <Card.Body>
              <Card.Title>{info.identification}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {info.username}
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
          <b>{info.identification}</b>
          <br />
          {info.username}
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

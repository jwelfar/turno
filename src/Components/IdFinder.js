import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Spinner, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const IdFinder = ({ setInfo }) => {
  const [identification, setIdentification] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loader) {
      axios
        .get(
          `https://jedtickets.azurewebsites.net/api/Usuarios/${identification}`
        )
        .then((res) => {
          setLoader(false);
          if (res.data) {
            setInfo(res.data);
            navigate("/type-of-service");
          }
        })
        .catch((err) => {
          console.log("Error", err);
          setLoader(false);
        });
    }
  }, [loader]);

  const handleChange = (e) => {
    setIdentification(e.target.value);
  };

  const GetUserInfo = (e) => {
    e.preventDefault();
    setLoader(true);
  };

  return (
    <>
      <Stack className="col-md-5 mx-auto">
        <Form>
          <Form.Group className="mb-3" controlId="formId">
            <Form.Label>Identificación</Form.Label>
            <Form.Control
              className="me-auto"
              placeholder="Ingresa tu identificación"
              value={identification}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button
            onClick={
              !loader
                ? (e) => {
                    GetUserInfo(e);
                  }
                : null
            }
            disabled={loader || identification === ""}
          >
            {loader ? <Spinner animation="border" /> : "Buscar"}
          </Button>
        </Form>
      </Stack>
    </>
  );
};

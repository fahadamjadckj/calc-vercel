import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegForm = ({ setData, setStatus, status, setError, data }) => {
  const [regNumber, setRegNumber] = useState("");

  const getData = async () => {
    const result = await axios.get(`/api/${regNumber}`);
    setData(result.data.text);
    setStatus(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setStatus("oh look magic, abra cadabara...");
    getData().catch((err) => {
      setError("Error fetching data, trying again.");
      setData(null);

      // on error rerun the query
      setStatus("oh refetching");
      setError(null);
      getData().then(() => console.log("refetched"));
    });
  };

  return (
    <div
      className="container"
      style={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="agForm">
        <Form
          style={{
            padding: "10px",
            border: "2px solid white",
            borderRadius: "5px",
          }}
          onSubmit={submitHandler}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Registration Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ag number"
              value={regNumber}
              required={true}
              onChange={(e) => setRegNumber(e.target.value)}
            />
            <Form.Text className="text-muted">
              We will never share your ag number with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I give consent for scraping my data of lms"
              required={true}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegForm;

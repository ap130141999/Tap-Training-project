import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";


const FormButtons = (props) => {
  const { buttonClick } = props;
  const [alert, setAlert] = useEffect(false)
  return (
    <Form className="d-flex justify-content-center">
      <Button
        onClick={buttonClick}
        type="submit"
        color="primary"
        className="text-center"
        style={{
          width: "20%",
          background: "#4CAF50",

          color: "white",
          padding: "14px 8px",
          marginleft: "20px",
          margin: "8px 0",

          border: "none",
          border: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default FormButtons;

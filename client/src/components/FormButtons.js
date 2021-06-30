import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import Snackbar from '@material-ui/core/Snackbar';
// import Alert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';

const FormButtons = (props) => {
  const { buttonClick } = props;
  const [alert, setAlert] = useEffect(false)
  // const [open, setOpen] = React.useState(false);

  // const buttonClick = () => {
  //   setOpen(true);
  // };
  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };
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
      {/* <Snackbar open={buttonClick} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Alert severity="success">This is a success message!</Alert> */}
    </Form>
  );
};

export default FormButtons;

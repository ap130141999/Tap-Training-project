import React from "react";
import "../App.css";
import axios from "axios";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { useState } from "react";
import { DropdownSelect } from "../components/DropDownItems";
import { isEmpty } from "lodash";
import InputFields from "../components/InputFields.js";
import FormButtons from "../components/FormButtons.js";
import Header from "../components/Header.js";

const FormPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [loan, setLoan] = useState("");
  const [gender, setGender] = useState("");
  const [account, setAccount] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [employment, setEmployment] = useState("");
  const [education, setEducation] = useState("");
  const [marital, setMarital] = useState("");
  const [loanType, setLoanType] = useState("");
  const [error, setError] = useState(false);

  const [alert, setAlert] = useState(false);
  const submitData = async () => {
    const isValid = validateData();
    console.log(isValid);
    if (isValid) {
      setAlert(true);
      setError(false);
      let bodyPayload = {
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        phone: phone,
        country: country,
        loan: loan,
        gender: gender,
        employment: employment,
        education: education,
        marital: marital,
        loanType: loanType,
        aadhar: aadhar,
        account: account,
      };
      console.log(bodyPayload);
      const response = await axios.post(
        `http://localhost:3001/enum/addDetails`,
        bodyPayload
      );
    } else {
      setError(true);
      console.log("fill all inputs");
    }
  };

  const toggle = () => setAlert(!alert);

  const validateData = () => {
    let valid = true;
    return(
    valid = !isEmpty(firstName),
    valid = !isEmpty(lastName),
    // valid = !isEmpty(middleName),
    valid = !isEmpty(phone),
    valid = !isEmpty(country),
    valid = !isEmpty(loan),
    valid = !isEmpty(gender),
    valid = !isEmpty(employment),
    valid = !isEmpty(education),
    valid = !isEmpty(marital),
    valid = !isEmpty(loanType),
    valid = !isEmpty(aadhar),
    valid = !isEmpty(account)
    // return valid
    )}
  const getFirstName = (value) => {
    console.log(value);
    setFirstName(value);
  };
  const getMiddleName = (value) => {
    console.log(value);
    setMiddleName(value);
  };
  const getLastName = (value) => {
    console.log(value);
    setLastName(value);
  };
  const getPhone = (value) => {
    console.log(value);
    setPhone(value);
  };
  const getCountry = (value) => {
    console.log(value);
    setCountry(value);
  };
  const getLoan = (value) => {
    console.log(value);
    setLoan(value);
  };

  const getGender = (label) => {
    console.log(label);
    setGender(label);
  };

  const getEmployment = (label) => {
    setEmployment(label);
  };

  const getEducation = (label) => {
    setEducation(label);
  };

  const getMarital = (label) => {
    setMarital(label);
  };

  const getLoanType = (label) => {
    setLoanType(label);
  };

  const getAccount = (label) => {
    setAccount(label);
  };

  const getAadhar = (label) => {
    setAadhar(label);
  };
  return (
    <main>
      <Header />
      <Container className="mb-4">
        <Card
          className="text-center "
          style={{
            boxShadow: "5px 5px 5px grey",
            backgroundColor: "#9d4edd",
            color: "white",
            padding: "10px",
          }}
        >
          <h5
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            {" "}
            LOAN APPLICATION FORM{" "}
          </h5>
        </Card>
      </Container>
      <Container>
        <Card
          style={{
            backgroundColor: "#ECECEC",
            padding: "40px",
            boxShadow: "5px 5px 5px 5px lightgrey",
          }}
        >
          {error && <Alert color="danger">Fill All The Inputs</Alert>}
          <br></br>
          <InputFields
            sendFirstName={getFirstName}
            sendMiddleName={getMiddleName}
            sendLastName={getLastName}
            sendPhone={getPhone}
            sendCountry={getCountry}
            sendLoan={getLoan}
            sendAadhar={getAadhar}
            sendAccount={getAccount}
          />

          <DropdownSelect
            optionGender={getGender}
            optionEmployment={getEmployment}
            optionLoanType={getLoanType}
            optionMarital={getMarital}
            optionEducation={getEducation}
          />

          <Row>
            <Col md="12">
              <div className="d-flex justify-content-end">
                <Button
                  style={{ width: "20%" }}
                  color="success"
                  onClick={submitData}
                >
                  submit
                </Button>
              </div>
            </Col>
          </Row>
          {alert && <Modal isOpen={alert} toggle={toggle} style={{
            backgroundColor: "#ECECEC",
                  boxShadow: "0 4px 8px 0 grey"
          }} >
            <ModalBody >
              <h5 className="d-flex justify-content-center mb-3" style={{color: "#9d4edd"}}><b>Data added successfully</b></h5>
              <div className="d-flex justify-content-center"><Button style={{backgroundColor: "#9d4edd", color:"white"}} onClick={() => { toggle(); window.location.reload(); }} >Close</Button></div>
            </ModalBody>
          </Modal>}
        </Card>
      </Container>
    </main>
  );
};

export default FormPage;

// <Modal isOpen={alert}>
//             Data added Succes</Modal>

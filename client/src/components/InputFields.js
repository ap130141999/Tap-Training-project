import { Col, Form, Input, Label, FormGroup, FormText } from "reactstrap";
import React from "react";

const InputFields = (props) => {
  const {
    sendFirstName,
    sendMiddleName,
    sendLastName,
    sendLoan,
    sendPhone,
    sendCountry,
    sendAccount,
    sendAadhar,
  } = props;

  return (
    <Form>
      <div>
        <FormGroup row>
          <Label for="FirstName" md={2}>
            <h5 className="required"> First Name </h5>
          </Label>
          <Col md={4}>
            <Input
              style={{ backgroundColor: "white" }}
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="Enter your first name"
              onChange={(event) => sendFirstName(event.target.value)}
            />
          </Col>
          {/* </FormGroup> */}
          <br></br>
          {/* <FormGroup row> */}
          <Label for="MiddleName" md={2}>
            <h5> Middle Name</h5>
          </Label>
          <Col md={4}>
            <Input
              style={{ backgroundColor: "white" }}
              type="text"
              name="MiddleName"
              required=""
              id="MiddleName"
              placeholder="Enter your Middle name"
              onChange={(event) => sendMiddleName(event.target.value)}
            />
          </Col>
        </FormGroup>
      </div>
      <br></br>
      <FormGroup row>
        <Label for="Last Name" md={2}>
          <h5 className="required"> Last Name</h5>
        </Label>
        <Col md={4} className="mb-4">
          <Input
            style={{ backgroundColor: "white" }}
            type="text"
            name="LastName"
            required
            id="LastName"
            placeholder="Enter your last name"
            onChange={(event) => sendLastName(event.target.value)}
          />
        </Col>

        <br></br>
        <Label for="PhoneNo" md={2}>
          <h5 className="required"> Phone No</h5>
        </Label>
        <Col md={4}>
          <Input
            style={{ backgroundColor: "white" }}
            type="number"
            name="MobileNumber"
            id="PhoneNo"
            required
            placeholder="Enter phone number"
            onChange={(event) => sendPhone(event.target.value)}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="Country" md={2}>
          <h5 className="required"> Country</h5>
        </Label>
        <Col md={4}>
          <Input
            style={{ backgroundColor: "white" }}
            type="text"
            name="Country"
            id="Country"
            required
            placeholder="Enter your country"
            onChange={(event) => sendCountry(event.target.value)}
          />
        </Col>
        {/* </FormGroup> */}
        <br></br>
        <Label for=" Date" md={2}>
          <h5 className="required"> Account</h5>
        </Label>
        <Col md={4}>
          <Input
            style={{ backgroundColor: "white" }}
            type="number"
            name="account"
            id="account"
            required="required"
            placeholder="Enter account number"
            onChange={(event) => sendAccount(event.target.value)}
          />
        </Col>
      </FormGroup>
      <br></br>
      <FormGroup row>
        <Label for="Aadhar number" md={2}>
          <h5 className="required"> Aadhar Number</h5>
        </Label>
        <Col md={4}>
          <Input
            style={{ backgroundColor: "white" }}
            type="number"
            name="aadhar"
            id="aadhar"
            placeholder="Enter your Aadhar number"
            onChange={(event) => sendAadhar(event.target.value)}
          />
        </Col>
        {/* <FormGroup row> */}
        <Label for="Loan Amount" md={2}>
          <h5 className="required"> Loan Amount</h5>
        </Label>
        <Col md={4}>
          <Input
            style={{ backgroundColor: "white" }}
            type="text"
            name="LoanAmount"
            id="Loan Amount"
            placeholder="Enter the loan amount"
            onChange={(event) => sendLoan(event.target.value)}
          />
        </Col>
      </FormGroup>
      <br></br>
    </Form>
  );
};
export default InputFields;

import Select from "react-select";
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import { get, filter, find } from "lodash";
export const DropdownSelect = ({
  optionGender,
  optionEmployment,
  optionLoanType,
  optionEducation,
  optionMarital,
}) => {
  const [currentGender, setCurrentGender] = useState();
  const [currentemployment, setCurrentEmployment] = useState([]);
  const [currentloanType, setCurrentLoanType] = useState([]);
  const [currenteducation, setCurrentEducation] = useState([]);
  const [currentmarital, setCurrentMarital] = useState([]);
  const [gender, setGender] = useState([]);
  const [employment, setEmployment] = useState([]);
  const [loanType, setLoanType] = useState([]);
  const [education, setEducation] = useState([]);
  const [marital, setMarital] = useState([]);
  useEffect(() => {
    getEnum();
  }, []);
  const getEnum = async () => {
    const response = await axios.get(`http://localhost:3001/enum/get`);
    response.data.map((el) => {
      if (el.enumId === "gender") {
        console.log(el);
        setGender(el.optionValues);
      } else if (el.enumId === "employment") {
        console.log(el);
        setEmployment(el.optionValues);
      } else if (el.enumId === "loan_type") {
        console.log(el);
        setLoanType(el.optionValues);
      } else if (el.enumId === "education") {
        console.log(el);
        setEducation(el.optionValues);
      } else if (el.enumId === "marital_status") {
        console.log(el);
        setMarital(el.optionValues);
      }
    });
  };
  const changeGender = (event) => {
    setCurrentGender(event.value);
    setCurrentGender(event.label);
    console.log(event.label);
    optionGender(event.label);
  };
  const changeEmployment = (event) => {
    setCurrentEmployment(event.value);
    setCurrentEmployment(event.label);
    optionEmployment(event.label);
  };
  // added change loantype
  const changeLoanType = (event) => {
    setCurrentLoanType(event.value);
    setCurrentLoanType(event.label);
    optionLoanType(event.label);
  };
  const changeEducation = (event) => {
    setCurrentEducation(event.value);
    setCurrentEducation(event.label);
    optionEducation(event.label);
  };
  const changeMarital = (event) => {
    setCurrentMarital(event.value);
    setCurrentMarital(event.label);
    optionMarital(event.label);
  };
  return (
    <>
      <Row className="mb-4">
        <Col md={2}>
          <h5>Gender</h5>
        </Col>
        <Col md={4}>
          <Select onChange={changeGender} options={gender}></Select>
        </Col>

        <Col md={2}>
          <h5>Employment</h5>
        </Col>
        <Col md={4}>
          <Select onChange={changeEmployment} options={employment}></Select>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={2}>
          <h5>Loan Type</h5>
        </Col>
        <Col md={4}>
          <Select onChange={changeLoanType} options={loanType}></Select>
        </Col>
        <Col md={2}>
          <h5>Education</h5>
        </Col>
        <Col md={4}>
          <Select onChange={changeEducation} options={education}></Select>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={2}>
          <h5>Martial Status</h5>
        </Col>
        <Col md={4}>
          <Select onChange={changeMarital} options={marital}></Select>
        </Col>
      </Row>
    </>
  );
};
export default {
  DropdownSelect,
};

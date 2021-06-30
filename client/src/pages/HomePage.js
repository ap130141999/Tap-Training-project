import React from "react";
import { Link } from "react-router-dom";

import { Card, CardBody, Container, CardHeader, Col, Row } from "reactstrap";
import Header from "../components/Header.js";
import image from "../image/byjus-logo.png";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <linearGradient colors={["#4c66ef", "#3b5998", "#192f6a"]}> */}
        <Container>
          <Row>
            <Col md="3"></Col>
            <Col md="3" style={{ textAlign: "center" }}>
              <Card
                className="historyCard"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                }}
              >
                <CardHeader tag="h6">
                  <h6 style={{ color: "black" }}>
                    <b>BYJUS FORM</b>
                  </h6>
                </CardHeader>
                <CardBody className="">
                  <img
                    src={image}
                    style={{ width: "80px", height: "80px" }}
                  ></img>
                  <div color="white">
                    <inline>
                      <Link
                        to="/Form"
                        className="btn btn-primary"
                        style={{ margin: "20px" }}
                      >
                        Pay
                      </Link>

                      <Link to="/HistoryPage" className="btn btn-success">
                        History
                      </Link>
                    </inline>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md="3" style={{ textAlign: "center" }}>
              <Card
                className="historyCard"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                }}
              >
                <CardHeader>
                  <h6 style={{ color: "black" }}>
                    <b>ENUM CONFIG</b>
                  </h6>
                </CardHeader>
                <CardBody className="">
                  <img
                    src="https://img.icons8.com/material-outlined/96/000000/macbook-settings.png"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <div color="white">
                    <Link
                      to="/table"
                      className="btn btn-primary"
                      style={{ margin: "20px" }}
                    >
                      Enum Config{" "}
                    </Link>
                    {/* <Button color="primary">History</Button> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="3"></Col>
          </Row>
        </Container>
      {/* </linearGradient> */}
    </div>
  );
};
export default HomePage;

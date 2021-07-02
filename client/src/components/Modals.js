import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Input,
  Col,
  Row,
  Form,
} from "reactstrap";
import { startCase } from "lodash";
import "../index.css";
const EnumModal = (props) => {
  let { showModal, enumId, oV } = props;
  const [input, setInput] = useState("");
  const [value, setvalue] = useState("");
  const [label, setLabel] = useState("");
  const [show, setShow] = useState(false);
  const updateValues = (Id, val) => {
    console.log("ID", Id, "Value", val);
    const edit = async () =>
      await axios.put(`http://localhost:3001/enum/update`, {
        enumId: Id,
        optionValues: [{ value: value, label: label }],
      });
    edit();
  };
  const toggle = () => (showModal = !showModal);
  const dropChange = (event, label) => {};
  return (
    <div style={{ backgroundColor: "#F6C6EA" }}>
      <Modal
        isOpen={showModal}
        toggle={toggle}
        style={{
          boxShadow: "5px 5px 5px #C77DFF",
          backgroundColor: "#C77DFF",
          padding: "0",
        }}
      >
        <ModalBody>
          <Table
            style={{
              background: "#FFFFFF",
              borderSpacing: "0",
            }}
          >
            <thead style={{ backgroundColor: "#5A189A", color: "white" }}>
              <tr style={{ backgroundColor: "#5A189A", color: "white" }}>
                <th>EnumID</th>
                <th>Available Label</th>
                <th>Available Value</th>
              </tr>
            </thead>
            <tbody>
              <td>{enumId}</td>
              <td>
                {oV.map((ele) => (
                  <Row>
                    <Col md={10}>
                      <Input
                        key={ele.label}
                        onclick={(e) => {
                          dropChange(e, ele.label);
                        }}
                        defaultValue={ele.label}
                        disabled
                      />
                    </Col>
        
                  </Row>
                ))}
              </td>
              <td>
                {oV.map((ele) => (
                  <Row>
                    <Col md={10}>
                      <Input
                        key={ele.label}
                        onclick={(e) => {
                          dropChange(e, ele.value);
                        }}
                        defaultValue={ele.value}
                        disabled
                      />
                    </Col>
        
                  </Row>
                ))}
              </td>
            </tbody>
          </Table>
          {show ? (
            <Col style={{ backgroundColor: "#5A189A", color: "white", marginBottom:"10px"}}>
              <h6>Add Value</h6>
              <Input
                value={value}
                onChange={(event) => setvalue(event.target.value)}
              />
            </Col>
          ) : (
            <Button onclick={setShow(!show)}>+</Button>
          )}
          {show ? (
            <Col style={{ backgroundColor: "#5A189A", color: "white" }}>
              <h6>Add Label</h6>
              <Input
                value={label}
                onChange={(event) => setLabel(startCase(event.target.value))}
              />
            </Col>
          ) : (
            <Button onclick={setShow(!show)}>+</Button>
          )}
        </ModalBody>
        <ModalFooter>
          <Form>
            <Button
              type="submit"
              style={{ marginRight: "10px" }}
              color="success"
              onClick={() => {
                updateValues(enumId, input);
              }}
            >
              Add
            </Button>
            <Button
              color="danger"
              onClick={() => props.modelHandle(!showModal)}
            >
              Close
            </Button>
          </Form>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default EnumModal;
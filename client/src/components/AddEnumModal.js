import { useEffect } from "react";
import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  FormGroup,
  Col,
  Label,
  Table,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEdit,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const AddEnum = ({ showModal, modelHandle }) => {
  const toggle = () => (showModal = !showModal);
  const [enumId, setEnumId] = useState("");
  const [label, setlabel] = useState("");
  const [value, setValue] = useState("");
  const [object, setObject] = useState({});

  const [item, setItem] = useState([]);

  useEffect(() => {}, [value, label]);

  const addEnumHandler = () => {
    const addNewEnum = async () => {
      const response = await axios.post(`http://localhost:3001/enum/create`, {
        enumId: enumId,
        optionValues: [
          {
            label: label,
            value: value,
          },
        ],
      });
    };
    console.log(enumId, label, value);
    addNewEnum();
    modelHandle(!showModal);
  };

  const cont = item.map((_, i) => {
    return (
      <tr key={i}>
        <td>
          <Input value={label} onChange={(e) => setlabel(e.target.value)} />
        </td>
        <td>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader>
          Add New Enum{" "}
          <Button onClick={() => setItem((i) => [...Array(i.length + 1)])}>
            <FontAwesomeIcon
              // onClick={() => setItem((i) => [...Array(i.length + 1)])}
              icon={faPlus}
              color="#5A189A"
            />
          </Button>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="enumId" md={2}>
                <h5> enumId </h5>
              </Label>
              <Col md={4}>
                <Input
                  style={{ backgroundColor: "white" }}
                  type="text"
                  name="EnumId"
                  id="EnumId"
                  placeholder="Enter new EnumId"
                  value={enumId}
                  onChange={(e) => {
                    setEnumId(e.target.value);
                  }}
                />
              </Col>
              <Table>
                <thead>
                  <tr>
                    <th>Label</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>{cont}</tbody>
              </Table>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {addEnumHandler() ; window.location.reload()}}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={() => modelHandle(!showModal)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

//   useEffect(() => {
//     const addNewEnum = async () => {
//       const response = await axios.post(`http://localhost:3001/enum/create`);
//     };
//     addNewEnum();
//   }, []);

//   return;
// };

export default AddEnum;
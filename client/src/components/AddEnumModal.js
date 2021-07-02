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
import { startCase } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const AddEnum = ({ showModal, modelHandle }) => {
    const toggle = () => (showModal = !showModal);
    const [enumId, setEnumId] = useState("");
    const [label, setlabel] = useState("");
    const [value, setValue] = useState("");
    const [object, setObject] = useState({});
    const [item, setItem] = useState([]);
    useEffect(() => { }, [value, label]);
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
    // const onChangeValue = () => {
    // }
    return (
        <div>
            <Modal isOpen={showModal} toggle={toggle}>
                <ModalHeader style={{backgroundColor: "#5A189A"}}>
                    <span style={{ color: "white" }}><b>Add New Enum</b></span>

                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="enumId" md={3}>
                                <h5> EnumId </h5>
                            </Label>
                            <Col md={9}>
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
                                        <th>Add Label</th>
                                        <th>Add Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td>
                                        <Input
                                            value={label}
                                            onChange={(e) => setlabel(startCase(e.target.value))}
                                        />
                                    </td>
                                    <td>
                                        <Input
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                        />
                                    </td>
                                </tbody>
                            </Table>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Form>
                        <Button type="submit" color="success" onClick={addEnumHandler}   style={{ marginRight: "10px" }}>
                            Add
                        </Button>
                        <Button
                            type="submit"
                            color="danger"
                            onClick={() => modelHandle(!showModal)}
                        >
                            Cancel
                        </Button>
                    </Form>
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
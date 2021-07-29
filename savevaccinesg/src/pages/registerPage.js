import axios from 'axios';
import React, { useState } from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'

//CONFIG
import config from "../config";
const BASE_URL = config.BASE_URL

export default function RegisterPage() {

    const [clinicname, setClinicname] = useState("");
    const [address, setAddress] = useState("");
    const [area, setArea] = useState("North");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneno, setPhoneno] = useState("");

    async function submitdata(event) {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            "clinicname": clinicname,
            "address": address,
            "phoneno": phoneno,
            "area": area,
            "username": username,
            "password": password

        });
        // var requestOptions = {
        //     method: 'POST',
        //     redirect: 'follow',
        //     headers: myHeaders,
        //     body: raw,
        //     mode: 'no-cors',
        // };


        // fetch(BASE_URL + "/userses", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

        await axios.post(BASE_URL + "/userses", 
        {
            "clinicname": clinicname,
            "address": address,
            "phoneno": phoneno,
            "area": area,
            "username": username,
            "password": password
        } )

    }
    return (
        <div>
            <div className="logReg-main">
                <Row>
                    <Col className=""></Col>
                    <Col>
                        <div className="register-cluster">
                            <div className="register-cluster-inner">
                                <div className="logReg-title">
                                    <p>Register</p>
                                </div>
                                <Form onSubmit={submitdata}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Clinic Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Enter Clinic Name"
                                            value={clinicname}
                                            onChange={(e) => setClinicname(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            required
                                            type="textarea"
                                            placeholder="Enter Address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Select onChange={(e) => setArea(e.target.value)} value={area}>
                                        <option value="North">North</option>
                                        <option value="East">East</option>
                                        <option value="Central">Central</option>
                                        <option value="West">West</option>
                                    </Form.Select>

                                    <Form.Group className="mt-3">
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Enter Contact Number"
                                            value={phoneno}
                                            onChange={(e) => setPhoneno(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mt-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Enter Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button variant="outline-info" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                                <div className="login-register-cluster">
                                    <p>Already have an Account?</p>
                                    <Link to="/">
                                        <p>Log in here!</p>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
            <MainFooter />
        </div>
    )
}

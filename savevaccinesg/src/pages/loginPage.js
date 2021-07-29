import React, { useState } from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from "axios";


//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'

//CONFIG
import config from "../config";
const BASE_URL = config.BASE_URL

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submitdata(event) {
        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.preventDefault();
        } else {
            event.preventDefault();

            // const response = await axios.post(BASE_URL + "/login", 
            // {
            //     'username': username,
            //     'password': password
            // })
            // if(response.ok){
            //     window.location.assign("/dashboard/" + username)
            // }else{
            //     window.location.assign("/")
            // }  
            localStorage.setItem("params", username)
            window.location.assign("/dashboard/" + username)
            
        }
    }

    return (
        <div>
            <div className="logReg-main">
                <Container>
                    <Row>
                        <Col className=""></Col>
                        <Col>
                            <div className="login-cluster">
                                <div className="login-cluster-inner">
                                    <div className="logReg-title">
                                        <p>Login</p>
                                    </div>
                                    <div>
                                        <Form onSubmit={submitdata} validataed>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control type="text"
                                                    placeholder="Enter Username"
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required
                                                />
                                                <Link to={`\${username}`}></Link>
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>

                                            <Button variant="outline-info" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </div>
                                    <div className="login-register-cluster">
                                        <p>Want to be part of the SaveVaccine Force?</p>
                                        <Link to="/register">
                                            <p>Register your Clinic here!</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <MainFooter />
        </div>
    )
}

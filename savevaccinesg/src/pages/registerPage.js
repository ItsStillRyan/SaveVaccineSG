import React from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'

export default function RegisterPage() {
    return (
        <div>
            <div className="logReg-main">
                <Row>
                    <Col className=""></Col>
                    <Col>
                        <div className="login-cluster">
                            <div className="login-cluster-inner">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Clinic Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Clinic Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="textarea" placeholder="Enter Address" />
                                    </Form.Group>

                                    <Form.Select aria-label="Default select example">
                                        <option>- Select your Area -</option>
                                        <option value="1">North</option>
                                        <option value="2">East</option>
                                        <option value="3">Central</option>
                                        <option value="4">West</option>
                                    </Form.Select>

                                    <Form.Group className="mt-3">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
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

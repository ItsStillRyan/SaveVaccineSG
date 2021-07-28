import React from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'

export default function LoginPage() {
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
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
            <MainFooter />
        </div>
    )
}

import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'
export default function SubmitPage() {
    return (
        <div>
            <Row>
                <Col xs={1}><MainNavbar /></Col>
                <Col>
                    <div className="submit-mainface">
                        <Row>
                            <Col xs={2} ></Col>

                            <Col>
                                {/* TITLE */}
                                <div className="request-title">
                                    <p>Submit Doses</p>
                                </div>
                                {/* CLINIC DETAILS */}
                                <Container>
                                    <div className="submit-body">
                                        <div className="submit-body-confirm-title">
                                            <p>Confirm Details</p>
                                        </div>
                                        <Form>
                                            <Form.Group as={Row} className="mb-5">
                                                <Form.Label column sm={2}>Clinic Name: </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" disabled />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-5">
                                                <Form.Label column sm={2}>Clinic Address: </Form.Label>
                                                <Col>
                                                    <Form.Control type="text" disabled />
                                                </Col>
                                            </Form.Group>
                                            <Row>
                                                <Col>
                                                    <Form.Group as={Row} className="mb-5">
                                                        <Form.Label column sm={2}>Clinic ID: </Form.Label>
                                                        <Col>
                                                            <Form.Control type="text" disabled />
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group as={Row} className="mb-5">
                                                        <Form.Label column sm={2}>Contact: </Form.Label>
                                                        <Col>
                                                            <Form.Control type="text" disabled />
                                                        </Col>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                    <div className="submit-submit">
                                        <div>
                                            <p>Amount to Submit</p>
                                        </div>
                                        <div>
                                            <Row>
                                                <Col></Col>
                                                <Col xs={2}>
                                                    <Form>
                                                        <Form.Group className="mb-3">
                                                            <Form.Control type="text" placeholder="Enter Amount" size="lg" />
                                                        </Form.Group>
                                                    </Form>
                                                </Col>
                                                <Col></Col>
                                            </Row>
                                        </div>
                                        <div>
                                            <Button>Submit</Button>
                                        </div>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>


            <MainFooter />
        </div >
    )
}

import React from 'react'
import { Row, Col, Container, Form, Button, Card } from 'react-bootstrap'

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
                                <div className="submit-body">
                                    {/* CLINIC DETAILS */}
                                    <Row>
                                        <Col md={9}>
                                            <Card className="CardShadow submit-card">
                                                <div className="submit-body-confirm-title">
                                                    <p>Confirm Details</p>
                                                </div>
                                                <div className="submit-form">
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
                                            </Card>
                                        </Col>

                                        <Col>
                                            <Card className="submit-submit-card CardShadow">
                                                <div className="submit-submit">
                                                    <div className="submit-body-confirm-title">
                                                        <p>Amount to Submit</p>
                                                    </div>
                                                    <div className="submit-submit-form">
                                                        <Row>
                                                            <Col></Col>
                                                            <Col xs={6}>
                                                                <div className="submit-submit-form-amount">
                                                                    <Form>
                                                                        <Form.Group className="mb-3">
                                                                            <Form.Control type="number" placeholder="Enter Amount" size="lg" />
                                                                        </Form.Group>
                                                                        <Form.Select>
                                                                            <option>- Select Vaccine Type -</option>
                                                                            <option value="1">Pfizer/Comirnaty</option>
                                                                            <option value="2">Moderna</option>
                                                                        </Form.Select>
                                                                    </Form>
                                                                </div>
                                                                <div>
                                                                    <Button className="submit-submit-button">Submit</Button>
                                                                </div>
                                                            </Col>
                                                            <Col></Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>


            <MainFooter />
        </div >
    )
}

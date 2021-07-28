import React from 'react'
import { Row, Col, Accordion, Container, Table, Button, Form } from 'react-bootstrap';

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

export default function RequestPage() {



    return (
        <div>
            <MainNavbar />
            <div className="request-mainface">
                <Row>
                    <Col xs={2}></Col>
                    <Col>
                        {/* TITLE */}
                        <div className="request-title">
                            <p>Request Doses</p>
                        </div>
                        {/* CLINIC LIST */}

                        <div className="request-body">
                            <Container>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Central</Accordion.Header>
                                        <Accordion.Body>
                                            <Table striped bordered hover >
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Address</th>
                                                        <th>Vaccine Type</th>
                                                        <th>Doses Available</th>
                                                        <th>Selected</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>this cc</td>
                                                        <td>this cc</td>
                                                        <td>moderna</td>
                                                        <td>8</td>
                                                        <td>
                                                            <Row>
                                                                <Col><Button> Add </Button></Col>
                                                            </Row>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>North</Accordion.Header>
                                        <Accordion.Body>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>West</Accordion.Header>
                                        <Accordion.Body>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>East</Accordion.Header>
                                        <Accordion.Body>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Container>
                        </div>

                        {/* TOTAL FINAL */}
                        <div className="request-submit">
                            <Container>
                                <Row>
                                    {/* EMPTY COL */}
                                    <Col></Col>
                                    {/* TOTAL SELECTED COL */}
                                    <Col xs={2}>
                                        <Form>
                                            <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Total Dose Selected</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    {/* SUBMIT BUTTON */}
                                    <Col xs={2}>
                                        <Button>Submit Request</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </div>
            <MainFooter />
        </div >
    )
}

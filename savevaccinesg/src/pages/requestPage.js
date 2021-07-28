import React from 'react'
import { Row, Col, Accordion, Container, Table, Button, Form, Card } from 'react-bootstrap';
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from "cdbreact";

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

export default function RequestPage() {

    function testClickEvent(param) {
        alert("Row Click Event");
    }

    const data = () => {
        return ({
            columns: [
                {
                    label: "Name",
                    field: "name",
                    width: 150,
                    attributes: {
                        "aria-controls": "DataTable",
                        "aria-label": "Name",
                    },
                },
                {
                    label: "Address",
                    field: "address",
                    width: 300,
                },
                {
                    label: "Vaccine Type",
                    field: "vaccineType",
                    width: 50,
                },
                {
                    label: "Doses Available",
                    field: "doses",
                    sort: "asc",
                    width: 20,
                },
                {
                    label: "Area",
                    field: "area",
                    sort: "asc",
                    width: 30,
                }
            ],
            rows: [
                {
                    name: "this family clinic",
                    address: "this place at this place street 51 singapore 123456",
                    vaccineType: "Modena",
                    doses: "61",
                    area: "North",
                    clickEvent: () => testClickEvent(1)
                }
            ],
        });
    };

    return (
        <div>
            <Row>
                <Col xs={1}><MainNavbar /></Col>
                <Col>
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
                                    <Card className="CardShadow request-list-Card">
                                        <Card.Body>
                                            <CDBContainer>
                                                <CDBCard>
                                                    <CDBCardBody>
                                                        <CDBDataTable
                                                            striped
                                                            bordered
                                                            hover
                                                            checkbox
                                                            data={data()}
                                                            materialSearch
                                                        />
                                                    </CDBCardBody>
                                                </CDBCard>
                                            </CDBContainer>
                                        </Card.Body>
                                    </Card>
                                </div>



                                {/* TOTAL FINAL */}
                                <div className="request-submit">
                                    <Container>
                                        <Row>
                                            {/* EMPTY COL */}
                                            <Col></Col>
                                            {/* TOTAL SELECTED COL */}
                                            <Col md={3}>
                                                <div>
                                                    <Form>
                                                        <Form.Group >
                                                            <Form.Label>Total Dose Selected</Form.Label>
                                                            <Form.Control disabled size="lg" />
                                                        </Form.Group>
                                                    </Form>
                                                </div>
                                                <div className="request-submit-button">
                                                    <Button>Submit Request</Button>
                                                </div>

                                            </Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                    </Container>
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

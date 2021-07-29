import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap';

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

//IMPORT IMAGES
import FakeChart from '../images/fakeChart.jpg'

export default function Dashboard() {
    return (
        <div>
            <Row className="dashboard-mainface">
                <Col xs={1}>
                    <MainNavbar />
                </Col>
                <Col >
                    <div>
                        <Row>
                            <Col xs={2} ></Col>
                            <Col>
                                <div className="dashboard-body">
                                    <div className="dashboard-row1">
                                        <Row>
                                            <Col xs={8}>
                                                <Card className="dashboard-map-Card CardShadow">
                                                    <Card.Body>
                                                        <Card.Title>Surplus Vaccination Centers Map</Card.Title>
                                                        <hr class="solid"></hr>
                                                        <div className="dashboard-map">
                                                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1C74Fpkrw0fqFvQP5DhsDnUvcr7sm6uNI" width="100%" height="650px"></iframe>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xs={4}>
                                                <Card className="dashboard-numbercluster-Card CardShadow">
                                                    <Card.Body>
                                                        <Card.Title>Dosage Count</Card.Title>
                                                        <hr class="solid"></hr>
                                                        <p>North</p>
                                                        <div className="dashboard-numbercluster">
                                                            <h1>000</h1>
                                                        </div>
                                                        <p>East</p>
                                                        <div className="dashboard-numbercluster">
                                                            <h1>000</h1>
                                                        </div>
                                                        <p>Central</p>
                                                        <div className="dashboard-numbercluster">
                                                            <h1>000</h1>
                                                        </div>
                                                        <p>West</p>
                                                        <div className="dashboard-numbercluster">
                                                            <h1>000</h1>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="dashboard-row2">
                                        <Row>
                                            <Col xs={2}>
                                                <Card className="CardShadow">
                                                    <Card.Body>
                                                    <Card.Title>Submit/Request Doses</Card.Title>
                                                        <hr class="solid"></hr>
                                                        <div>
                                                            <Button className="dashboard-buttons" variant="outline-secondary"> Request Doses </Button>
                                                        </div>
                                                        <div>
                                                            <Button className="dashboard-buttons" variant="outline-secondary"> Submit Doses </Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xs={7}>
                                                <Card className="CardShadow">
                                                    <Card.Body>
                                                        <Card.Title>Covid Cases Chart for 06 days</Card.Title>
                                                        <hr class="solid"></hr>
                                                        <img src={FakeChart} className="dashboard-fakeChart" />
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="CardShadow">
                                                    <Card.Body>
                                                        <Card.Title>Covid News for Today</Card.Title>
                                                        <hr class="solid"></hr>
                                                        <div>
                                                            <p><b>Mandatory COVID-19 tests for all students, staff at Punggol Primary School after cases detected</b></p>
                                                            <p>an hour ago</p>
                                                        </div>
                                                        <hr class="solid"></hr>
                                                        <div>
                                                            <p><b>130 new locally transmitted COVID-19 cases in Singapore; 5 new clusters</b></p>
                                                            <p>8 hours ago</p>
                                                        </div>
                                                        <hr class="solid"></hr>
                                                        <div>
                                                            <p><b>Hospital beds could fill up in a week if a COVID-19 cluster grows 'uncontrollably': Ong Ye Kung</b></p>
                                                            <p>15 hours ago</p>
                                                        </div>


                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
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

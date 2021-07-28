import React from 'react'
import { Row, Col, Container, Button, Card } from 'react-bootstrap';

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

//IMPORT IMAGES
import MapImage from '../images/map.jpg'
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
                                                        <img src={FakeChart} className="dashboard-fakeChart" />
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="CardShadow">
                                                    <Card.Body>

                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>


                                    {/* <div className="dashboard-map text-center">
                                <img src={MapImage} />
                            </div>
                            <div>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="dashboard-numbercluster">
                                                <p>000</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="dashboard-numbercluster">
                                                <p>000</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="dashboard-numbercluster">
                                                <p>000</p>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="dashboard-numbercluster">
                                                <p>000</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className="dashboard-buttonCluster">
                                <Row>
                                    <Col className="text-center">
                                        <Button className="dashboard-button">
                                            <p>Submit Doses</p>
                                        </Button>
                                    </Col>
                                    <Col className="text-center">
                                        <Button className="dashboard-button">
                                            <p>Request Doses</p>
                                        </Button>
                                    </Col>
                                </Row>
                            </div> */}
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
{/* <div className="dashboard-map">
                                <img src={MapImage}/>
                            </div> */}
import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'




export default function Dashboard() {

    const [doses1, setDoses1] = useState()
    const [doses2, setDoses2] = useState()
    const [doses3, setDoses3] = useState()
    const [doses4, setDoses4] = useState()

    const UN = localStorage.getItem("params")

    const data = [
        {
            name: '1 July', Cases: 319, pv: 100, amt: 100
        },
        {
            name: '2 July', Cases: 313, pv: 100, amt: 100
        },
        {
            name: '3 July', Cases: 305, pv: 100, amt: 100
        },
        {
            name: '4 July', Cases: 295, pv: 100, amt: 100
        },
        {
            name: '5 July', Cases: 295, pv: 100, amt: 100
        },
        {
            name: '6 July', Cases: 291, pv: 100, amt: 100
        },
        {
            name: '7 July', Cases: 275, pv: 100, amt: 100
        },
        {
            name: '8 July', Cases: 269, pv: 100, amt: 100
        },
        {
            name: '9 July', Cases: 268, pv: 100, amt: 100
        },
        {
            name: '10 July', Cases: 251, pv: 100, amt: 100
        },
        {
            name: '11 July', Cases: 242, pv: 100, amt: 100
        },
        {
            name: '12 July', Cases: 250, pv: 100, amt: 100
        },
        {
            name: '13 July', Cases: 255, pv: 100, amt: 100
        },
        {
            name: '14 July', Cases: 301, pv: 100, amt: 100
        },
        {
            name: '15 July', Cases: 335, pv: 100, amt: 100
        },
        {
            name: '16 July', Cases: 379, pv: 100, amt: 100
        },
        {
            name: '17 July', Cases: 433, pv: 100, amt: 100
        },
        {
            name: '18 July', Cases: 511, pv: 100, amt: 100
        },
        {
            name: '19 July', Cases: 683, pv: 100, amt: 100
        },
        {
            name: '20 July', Cases: 861, pv: 100, amt: 100
        },
        {
            name: '21 July', Cases: 1025, pv: 100, amt: 100
        },
        {
            name: '22 July', Cases: 1179, pv: 100, amt: 100
        },
        {
            name: '23 July', Cases: 1301, pv: 100, amt: 100
        },
        {
            name: '24 July', Cases: 1422, pv: 100, amt: 100
        },
        {
            name: '25 July', Cases: 1547, pv: 100, amt: 100
        },
        {
            name: '26 July', Cases: 1672, pv: 100, amt: 100
        },
        {
            name: '27 July', Cases: 1779, pv: 100, amt: 100
        },
        {
            name: '28 July', Cases: 1889, pv: 100, amt: 100
        },
        {
            name: '29 July', Cases: 2006, pv: 100, amt: 100
        },
        {
            name: '30 July', Cases: 2006, pv: 100, amt: 100
        },
    ];


    useEffect(() => {
        const random1 = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        const random2 = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        const random3 = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        const random4 = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        setDoses1(random1)
        setDoses2(random2)
        setDoses3(random3)
        setDoses4(random4)
    }, [])


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
                                                            <h1>{doses1}</h1>
                                                        </div>
                                                        <p>East</p>
                                                        <div className="dashboard-numbercluster">
                                                            <h1>{doses2}</h1>
                                                        </div>
                                                        <p>Central</p>
                                                        <div className="dashboard-numbercluster">
                                                            <h1>{doses3}</h1>
                                                        </div>
                                                        <p>West</p>
                                                        <div className="dashboard-numbercluster">
                                                            <h1>{doses4}</h1>
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
                                                            <Link to={"/request/" + UN}>
                                                                <Button className="dashboard-buttons" variant="outline-secondary"> Request Doses </Button>
                                                            </Link>

                                                        </div>
                                                        <div>
                                                            <Link to={"/submit/" + UN}>
                                                                <Button className="dashboard-buttons" variant="outline-secondary"> Submit Doses </Button>
                                                            </Link>

                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xs={7}>
                                                <Card className="CardShadow">
                                                    <Card.Body>
                                                        <Card.Title>Covid Cases Chart for this Month</Card.Title>
                                                        <hr class="solid"></hr>
                                                        <LineChart width={1000} height={440} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                                            <Line type="monotone" dataKey="Cases" stroke="#8884d8" />
                                                            <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
                                                            <XAxis dataKey="name" />
                                                            <YAxis />
                                                            <Tooltip />
                                                        </LineChart>
                                                        {/* <img src={FakeChart} className="dashboard-fakeChart" /> */}
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="CardShadow dashboard-newsCard">
                                                    <Card.Body>
                                                        <Card.Title>Covid News for Today</Card.Title>
                                                        <hr class="solid"></hr>

                                                        <div>
                                                            <p><b>European Union pulls ahead of US in Covid-19 vaccinations</b></p>
                                                            <p>34 min ago</p>
                                                        </div>
                                                        <hr class="solid"></hr>
                                                        <div>
                                                            <p><b>Sydney under strict new Covid-19 lockdown rules as cases soar</b></p>
                                                            <p>58 min ago</p>
                                                        </div>
                                                        <hr class="solid"></hr>
                                                        <div>
                                                            <p><b>Japan proposes adding four regions to Covid-19 state of emergency</b></p>
                                                            <p>1 hour ago</p>
                                                        </div>
                                                        <hr class="solid"></hr>
                                                        <div>
                                                            <p><b>Mexico Covid-19 deaths 35% more than reported: Statistics agency</b></p>
                                                            <p>1 hour ago</p>
                                                        </div>
                                                        <hr class="solid"></hr>
                                                        <div>
                                                            <p><b>Vaccinated Americans are getting angry at Covid-19 vaccine holdouts</b></p>
                                                            <p>2 hours ago</p>
                                                        </div>
                                                        <hr class="solid"></hr>

                                                        <div>
                                                            <p><b>Thai streets empty as India traffic jams return, Apple data show</b></p>
                                                            <p>3 hours ago</p>
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

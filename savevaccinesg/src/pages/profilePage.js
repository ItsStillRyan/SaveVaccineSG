import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Button, Form, Toast, ToastContainer  } from 'react-bootstrap';
import axios from 'axios';
//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'
//CONFIG
import config from "../config";
const BASE_URL = config.BASE_URL

export default function ProfilePage() {

    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [area, setArea] = useState()
    const [contact, setContact] = useState()
    const [username, setUsername] = useState()

    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    const un = localStorage.getItem("params")

    useEffect(() => {
        const fetchData1 = async () => {
            const response = await axios.get(BASE_URL + "/userses/search/getUserByUsername", {
                params: {
                    username: un
                }
            })
            setName(response.data.clinicname)
            setAddress(response.data.address)
            setContact(response.data.phoneno)
            setArea(response.data.area)
            setUsername(response.data.username)
        }
        fetchData1()
    }, [])



    return (
        <div>
            <ToastContainer position="top-center" className="p-4">
                <Toast show={showA} onClose={toggleShowA} clasname="global-toast">
                    <Toast.Header>
                        <strong className="me-auto">Successfully Logged in!</strong>
                    </Toast.Header>
                    <Toast.Body>Welcome back, {name}</Toast.Body>
                </Toast>
            </ToastContainer>
            <Row>
                <Col xs={1}><MainNavbar /></Col>
                <Col>
                
                    <div className="submit-mainface">
                        <Row>
                            <Col xs={2} ></Col>
                            <Col>
                                <Card className="profile-mainface CardShadow">
                                    <div>
                                        <Card.Body>
                                            <Row>
                                                <Col md={4} className="text-center">
                                                    <div className="profile-pfImage">
                                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="300px" />
                                                        <Form>
                                                            <Form.Group controlId="formFile" className="mt-4">
                                                                <Form.Control type="file" />
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="profile-detailsCluster">
                                                        <Form>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Clinic Name</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Clinic Name" value={name} />
                                                            </Form.Group>

                                                            <Form.Group className="mb-2">
                                                                <Form.Label>Address</Form.Label>
                                                                <Form.Control type="textarea" placeholder="Enter Address" value={address} />
                                                            </Form.Group>

                                                            <Form.Select aria-label="Default select example" value={area}>
                                                                <option value="North">North</option>
                                                                <option value="East">East</option>
                                                                <option value="Central">Central</option>
                                                                <option value="West">West</option>
                                                            </Form.Select>

                                                            <Form.Group className="mt-3">
                                                                <Form.Label>Contact</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Clinic Name" value={contact} />
                                                            </Form.Group>

                                                            <hr class="solid" />

                                                            <Form.Group className="mt-3">
                                                                <Form.Label>Username</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Username" value={username} />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" />
                                                            </Form.Group>
                                                        </Form>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <hr class="solid" />
                                            <div className="profile-buttonCluster">
                                                <Row>
                                                    <div>
                                                        <Col>
                                                            <Row className="text-center">
                                                                <Col>
                                                                    <Button className="profile-buttons" variant="outline-secondary">- Macro Button -</Button>
                                                                </Col>
                                                                <Col>
                                                                    <Button className="profile-buttons" variant="outline-secondary">- Macro Button -</Button>
                                                                </Col>
                                                                <Col>
                                                                    <Button className="profile-buttons" variant="outline-secondary">- Macro Button -</Button>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </div>
                                                    <div>
                                                        <Col>
                                                            <Row className="text-center">
                                                                <Col>
                                                                    <Button className="profile-buttons" variant="outline-secondary">- Macro Button -</Button>
                                                                </Col>
                                                                <Col>
                                                                    <Button className="profile-buttons" variant="outline-secondary">- Macro Button -</Button>
                                                                </Col>
                                                                <Col>
                                                                    <Button className="profile-buttons" variant="outline-secondary">- Macro Button -</Button>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </div>
                                                </Row>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>


            <MainFooter />
        </div >
    )
}

import React from 'react'
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

export default function ProfilePage() {
    return (
        <div>
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
                                                                <Form.Label>Contact</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Clinic Name" />
                                                            </Form.Group>

                                                            <hr class="solid" />

                                                            <Form.Group className="mt-3">
                                                                <Form.Label>Username</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter Username" />
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

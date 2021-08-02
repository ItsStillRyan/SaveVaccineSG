import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Table, Button, Form, Card, ToastContainer, Toast } from 'react-bootstrap';
import axios from "axios";

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

export default function RequestPage() {

    const [posts, setPosts] = useState([])
    const [count, setCount] = useState(0)

    //states for TOAST
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    // KUMA's attempt at this
    useEffect(() => {
        axios.get('http://178.128.120.182:8080/clinics?page=0&size=300')
            .then(res => {
                setPosts(res.data._embedded.clinics)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // COUNTER +/-
    function addonClick(addcount) {
        setCount(count + addcount)
    }
    function removeonClick(removeCount) {
        setCount(count - removeCount)
    }

    // SUBMIT TRIGGER
    function submitHandle(e) {
        e.preventDefault();
        setShowA(true)
        setTimeout(function () {
            setShowA(false)
            window.location.reload();
        }, 3000)
    }

    return (
        <div>
            <Row>
                {/* EMPTY COL TO PUSH PAGE TO THE RIGHT */}
                <Col xs={1}><MainNavbar /></Col>
                {/* START OF MAIN REQUEST PAGE */}
                <Col>
                    <div className="request-mainface">
                        <Row>
                            {/* EMPTY COL TO CENTER PAGE */}
                            <Col xs={2}></Col>
                            <Col>
                                {/* TITLE */}
                                <div className="request-title">
                                    <p>Request Doses</p>
                                </div>
                                {/* START OF REQUEST BODY */}
                                <div className="request-body">
                                    {/* TOAST */}
                                    <ToastContainer position="top-center" className="p-4">
                                        <Toast show={showA} onClose={toggleShowA} clasname="global-toast">
                                            <Toast.Header>
                                                <strong className="me-auto">Successfully Requested!</strong>
                                            </Toast.Header>
                                            <Toast.Body>Your request will be handled shortly!</Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    {/* MAIN TABLE LIST */}
                                    <Card className="CardShadow request-list-Card">
                                        <Card.Body>
                                            <div className="request-table">
                                                <Table striped bordered hover size="sm">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Address</th>
                                                            <th>Vaccine Type</th>
                                                            <th>Area</th>
                                                            <th>Doses Available</th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    {/* Display via .map iteration */}
                                                    <tbody>
                                                        {posts.map(post => (
                                                            <tr key={post.id}>
                                                                <td>{post.name}</td>
                                                                <td>{post.address}</td>
                                                                <td>{post.type}</td>
                                                                <td>{post.region}</td>
                                                                <td>{post.dosecount}</td>
                                                                <td>
                                                                    <Button onClick={() => addonClick(post.dosecount)} variant="success">+</Button>
                                                                </td>
                                                                <td>
                                                                    <Button onClick={() => removeonClick(post.dosecount)} variant="danger">-</Button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>

                                {/* SUBMIT CLUSTER */}
                                <div className="request-submit">
                                    <Container>
                                        <Row>
                                            {/* EMPTY COL TO CENTER CLUSTER */}
                                            <Col></Col>
                                            {/* CLUSTER COL */}
                                            <Col md={3}>
                                                <div>
                                                    <Form onSubmit={submitHandle}>
                                                        <Form.Group >
                                                            <Form.Label>Total Dose Selected</Form.Label>
                                                            <Form.Control disabled size="lg" value={count} />
                                                        </Form.Group>
                                                        <div className="request-submit-button">
                                                            <Button type="submit">Submit Request</Button>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </Col>
                                            {/* EMPTY COL TO CENTER CLUSTER */}
                                            <Col></Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <MainFooter />
        </div>
    )
}
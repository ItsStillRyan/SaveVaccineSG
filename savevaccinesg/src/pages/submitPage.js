import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Card, Toast, ToastContainer } from 'react-bootstrap'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

//CONFIG
import config from "../config";
const BASE_URL = config.BASE_URL

export default function SubmitPage() {

    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [contact, setContact] = useState()
    const [area, setArea] = useState()
    const [doseType, setdoseType] = useState("Pfizer")
    const [doseSubmit, setDoseSubmit] = useState(0)
    const [id, setId] = useState()

    //states for TOAST
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    //using this to pull data via RESTFUL
    const username = localStorage.getItem("params")

    useEffect(() => {
        const fetchData1 = async () => {
            const response = await axios.get(BASE_URL + "/userses/search/getUserByUsername", {
                params: {
                    username: username
                }
            })
            setName(response.data.clinicname)
            setAddress(response.data.address)
            setContact(response.data.phoneno)
            setArea(response.data.area)
        }
        fetchData1()
        // RANDOM NUMBER GEN for ID placeholder
        const random = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        setId(random)
    }, [])

    //SUBMIT TRIGGER + VALIDATION
    const submitDose = async (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
        } else {
            event.preventDefault()

            const e = new Date();
            await axios.post(BASE_URL + "/clinics", {
                "name": name,
                "address": address,
                "phno": contact,
                "dosecount": doseSubmit,
                "type": doseType,
                "region": area
            })
        }

        // TOAST timeout after 3 seconds
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
                {/* START OF MAIN PAGE SUBMIT */}
                <Col>
                    <div className="submit-mainface">
                        <Row>
                            {/* EMPTY COL TO CENTER PAGE */}
                            <Col xs={2}></Col>
                            <Col>
                                {/* TITLE */}
                                <div className="request-title">
                                    <p>Submit Doses</p>
                                </div>
                                {/* START OF SUBMIT BODY */}
                                <div className="submit-body">
                                    {/* TOAST */}
                                    <ToastContainer position="top-center" className="p-4">
                                        <Toast show={showA} onClose={toggleShowA} clasname="global-toast">
                                            <Toast.Header>
                                                <strong className="me-auto">Doses Submitted</strong>
                                            </Toast.Header>
                                            <Toast.Body>Thank you for submitting!</Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    {/* MAIN CARDS */}
                                    <Row>
                                        {/* CONFIRM DETAILS CARD */}
                                        <Col md={9}>
                                            <Card className="CardShadow submit-card">
                                                <div className="submit-body-confirm-title">
                                                    <p>Confirm Details</p>
                                                </div>
                                                <div className="submit-form">
                                                    {/* DETAILS SHOWN IN DISABLED FORMS */}
                                                    <Form>
                                                        <Form.Group as={Row} className="mb-5">
                                                            <Form.Label column sm={2}>Clinic Name: </Form.Label>
                                                            <Col>
                                                                <Form.Control
                                                                    type="text" disabled
                                                                    value={name}
                                                                />
                                                            </Col>
                                                        </Form.Group>

                                                        <Form.Group as={Row} className="mb-5">
                                                            <Form.Label column sm={2}>Clinic Address: </Form.Label>
                                                            <Col>
                                                                <Form.Control
                                                                    type="text" disabled
                                                                    value={address}
                                                                />
                                                            </Col>
                                                        </Form.Group>
                                                        {/* LAST ROW OF FORM */}
                                                        <Row>
                                                            <Col>
                                                                <Form.Group as={Row} className="mb-5">
                                                                    <Form.Label column sm={2}>Clinic ID: </Form.Label>
                                                                    <Col>
                                                                        <Form.Control
                                                                            type="text" disabled
                                                                            value={id}
                                                                        />
                                                                    </Col>
                                                                </Form.Group>
                                                            </Col>

                                                            <Col>
                                                                <Form.Group as={Row} className="mb-5">
                                                                    <Form.Label column sm={2}>Contact: </Form.Label>
                                                                    <Col>
                                                                        <Form.Control
                                                                            type="text" disabled
                                                                            value={contact}
                                                                        />
                                                                    </Col>
                                                                </Form.Group>
                                                            </Col>

                                                        </Row>
                                                    </Form>
                                                </div>
                                            </Card>
                                        </Col>
                                        {/* SUBMIT CLUSTER */}
                                        <Col>
                                            <Card className="submit-submit-card CardShadow">
                                                <div className="submit-submit">
                                                    <div className="submit-body-confirm-title">
                                                        <p>Amount to Submit</p>
                                                    </div>
                                                    <div className="submit-submit-form">
                                                        <Row>
                                                            {/* EMPTY COL TO CENTER CLUSTER */}
                                                            <Col></Col>
                                                            {/* CLUSTER COL */}
                                                            <Col xs={6}>
                                                                <div className="submit-submit-form-amount">
                                                                    <Form onSubmit={submitDose}>
                                                                        <Form.Group className="mb-3">
                                                                            <Form.Control
                                                                                required
                                                                                type="number"
                                                                                placeholder="Enter Amount"
                                                                                size="lg"
                                                                                onChange={(e) => setDoseSubmit(e.target.value)}
                                                                                value={doseSubmit}
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Select onChange={(e) => setdoseType(e.target.value)} value={doseType}>
                                                                            <option>- Select Vaccine Type -</option>
                                                                            <option value="Pfizer">Pfizer/Comirnaty</option>
                                                                            <option value="Moderna">Moderna</option>
                                                                        </Form.Select>
                                                                        <div>
                                                                            <Button className="submit-submit-button" type="submit">Submit</Button>
                                                                        </div>
                                                                    </Form>
                                                                </div>
                                                            </Col>
                                                            {/* EMPTY COL TO CENTER CLUSTER */}
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

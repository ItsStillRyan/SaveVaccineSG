import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'
//CONFIG
import config from "../config";
const BASE_URL = config.BASE_URL


export default function SubmitPage() {

    //Direct calls data, from the form and the account user
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [contact, setContact] = useState()
    const [area, setArea] = useState()
    const [doseType, setdoseType] = useState("Pfizer")
    const [doseSubmit, setDoseSubmit] = useState(0)
    const [id, setId] = useState()

    //Detour calls, from the Clinics database
    const [clinicName, setClinicName] = useState()
    const [clinicAddress, setClinicAddress] = useState()
    const [clinicContact, setClinicContact] = useState()
    const [clinicArea, setClinicArea] = useState("North")

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

        const random = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        setId(random)

        if (clinicArea === "North") {
            setClinicName("Woodlands Community Center")
            setClinicAddress("Woodlands")
            setClinicContact(12345678)
        } else if (clinicArea === "East") {
            setClinicName("Tampines Community Center")
            setClinicAddress("Tampines")
            setClinicContact(12345678)
        } else if (clinicArea === "Central") {
            setClinicName("Orchard Community Center")
            setClinicAddress("Orchard")
            setClinicContact(12345678)
        } else if (clinicArea === "West") {
            setClinicName("Jurong Community Center")
            setClinicAddress("Jurong")
            setClinicContact(12345678)
        }
    }, [])


    const submitDose = async (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
        } else {
            event.preventDefault()

            const e = new Date();
            await axios.post(BASE_URL + "/requests", {
                "sendername": name,
                "senderaddress": address,
                "senderphno": contact,
                "receivername": clinicName,
                "receiveraddress": clinicAddress,
                "receiverphno": clinicContact,
                "dosecount": doseSubmit,
                "requestdate": e.toISOString(),
                "type": doseType,
                "region": area
            })
        }
    }
    const locationChange = (e) => {

        setClinicArea(e.target.value)

        
    }



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
                                                                        <div className="submit-submit-area">
                                                                            <Form.Select onChange={(e)=>locationChange(e)} value={clinicArea}>
                                                                                <option value="North">North</option>
                                                                                <option value="East">East</option>
                                                                                <option value="Central">Central</option>
                                                                                <option value="West">West</option>
                                                                            </Form.Select>
                                                                        </div>
                                                                        <div>
                                                                            <Button className="submit-submit-button" type="submit">Submit</Button>
                                                                        </div>
                                                                    </Form>
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

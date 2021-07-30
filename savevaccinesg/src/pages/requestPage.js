import React, { useState, useEffect } from 'react'
import { Row, Col, Accordion, Container, Table, Button, Form, Card } from 'react-bootstrap';
import axios from "axios";

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

//CONFIG
import config from "../config";
const BASE_URL = config.BASE_URL


// export default function RequestPage() {

//     const [data1, setdata1] = useState()
//     const [data, setData] = useState([])
//     const [count, setCount] = useState(0)
//     const [addremove, setAddRemove] = useState(true)


//     useEffect(() => {
//         // async function fetchData() {
//         //     const response = await axios.get(BASE_URL + "/clinics")
//         //     setData(response.data._embedded.clinics)
//         // }fetchData()

//         const fetchData = async () => {
//             const response = await await axios.get(BASE_URL + "/clinics")
//             setData(response.data._embedded.clinics)
//         }
//         fetchData()
//     }, [])


//     function addonClick(addcount){
//         setCount(count + addcount)

//     }

//     return (
//         <div>
//             <Row>
//                 <Col xs={1}><MainNavbar /></Col>
//                 <Col>
//                     <div className="request-mainface">
//                         <Row>
//                             <Col xs={2}></Col>
//                             <Col>
//                                 {/* TITLE */}
//                                 <div className="request-title">
//                                     <p>Request Doses</p>
//                                 </div>
//                                 {/* CLINIC LIST */}
//                                 <div className="request-body">
//                                     <Card className="CardShadow request-list-Card">
//                                         <Card.Body>
//                                             <div className="request-table">
//                                                 <Table striped bordered hover size="sm">
//                                                     <thead>
//                                                         <tr>
//                                                             <th>Name</th>
//                                                             <th>Address</th>
//                                                             <th>Vaccine Type</th>
//                                                             <th>Area</th>
//                                                             <th>Doses Available</th>
//                                                             <th></th>
//                                                         </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         {/* {data.map(p => (
//                                                             <tr>
//                                                                 <td>{p.name}</td>
//                                                                 <td>{p.address}</td>
//                                                                 <td>{p.type}</td>
//                                                                 <td>{p.region}</td>
//                                                                 <td>{p.dosecount}</td>
//                                                                 <td>
//                                                                     <Row>
//                                                                         <Col>
//                                                                             <Button onClick={addonClick(p.dosecount)}>Add</Button>
//                                                                             <Button >Remove</Button>
//                                                                         </Col>
//                                                                     </Row>
//                                                                 </td>
//                                                             </tr>
//                                                         ))} */}
//                                                     </tbody>
//                                                 </Table>
//                                             </div>
//                                         </Card.Body>
//                                     </Card>
//                                 </div>



//                                 {/* TOTAL FINAL */}
//                                 <div className="request-submit">
//                                     <Container>
//                                         <Row>
//                                             {/* EMPTY COL */}
//                                             <Col></Col>
//                                             {/* TOTAL SELECTED COL */}
//                                             <Col md={3}>
//                                                 <div>
//                                                     <Form>
//                                                         <Form.Group >
//                                                             <Form.Label>Total Dose Selected</Form.Label>
//                                                             <Form.Control disabled size="lg" value={count}/>
//                                                         </Form.Group>
//                                                     </Form>
//                                                 </div>
//                                                 <div className="request-submit-button">
//                                                     <Button>Submit Request</Button>
//                                                 </div>

//                                             </Col>
//                                             <Col>
//                                             </Col>
//                                         </Row>
//                                     </Container>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Col>
//             </Row>


//             <MainFooter />
//         </div >
//     )
// }


export default function RequestPage() {

    const [posts, setPosts] = useState([])
    // const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [addremove, setAddRemove] = useState(true)


    // useEffect(() => {
    //     // async function fetchData() {
    //     //     const response = await axios.get(BASE_URL + "/clinics")
    //     //     setData(response.data._embedded.clinics)
    //     // }fetchData()

    //     const fetchData = async () => {
    //         const response = await await axios.get(BASE_URL + "/clinics")
    //         setData(response.data._embedded.clinics)
    //     }
    //     fetchData()
    // }, [])


    function addonClick(addcount) {
        setCount(count + addcount)
    }
    function removeonClick(removeCount) {
        setCount(count - removeCount)
    }


    useEffect(() => {
        axios.get('http://178.128.120.182:8080/clinics?page=0&size=300')
            .then(res => {
                //console.log(res.data._embedded)
                //console.log(res.data)
                setPosts(res.data._embedded.clinics)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
                                                            <Form.Control disabled size="lg" value={count} />
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
        </div>
    )
}
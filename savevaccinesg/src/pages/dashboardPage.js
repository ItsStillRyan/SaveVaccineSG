import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

//IMPORT NAVBAR AND FOOTER
import MainFooter from '../commons/footer'
import MainNavbar from '../commons/navbar'

//IMPORT IMAGES
import MapImage from '../images/map.jpg'

export default function Dashboard() {
    return (


        <div>
            <MainNavbar />
            <div className="dashboard-mainface">
                <Row>
                    <Col xs={1} ></Col>
                    <Col>
                        <div className="dashboard-body">
                            <div className="dashboard-map">
                                <img src={MapImage}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <MainFooter />
        </div >

    )
}

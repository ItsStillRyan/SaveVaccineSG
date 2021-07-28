import React from 'react'
import { Col, Row, Container} from 'react-bootstrap'

//IMPORT IMAGES
import logo from '../images/SVlogo.png'
import gitLogo from '../images/gitLogo.png'

export default function MainFooter() {
    return (
        <div>
            <div class="container-fluid">
                <footer>
                    <div>
                        <Container>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <img src={logo} className="footer-image" />
                                </Col>

                                <Col>
                                    <p className="bold-text" >
                                        A Collaberative effort from Web Group A
                                    </p>
                                    <ul className="footer-namelist">
                                        <li>Ryan</li>
                                        <li>Thendral</li>
                                        <li>Kumarason</li>
                                    </ul>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>

                    </div>
                </footer>
            </div>
        </div>
    )
}

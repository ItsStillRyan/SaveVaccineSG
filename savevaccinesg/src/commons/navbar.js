import React from 'react'
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//IMPORT IMAGES
import mainlogo from '../images/SVlogo.png'

export default function MainNavbar() {
    return (
        <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="#12115a" backgroundColor="#97d3d3">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <img src={mainlogo} width="150px" />
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem>
                                <span className="navbar-links">
                                    <i class="fas fa-columns"></i> Dashboard
                                </span>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/submit" activeClassName="activeClicked">
                            <CDBSidebarMenuItem >
                                <span className="navbar-links">
                                    <i class="fas fa-hand-holding-medical"></i> Submit Doses
                                </span>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/request" activeClassName="activeClicked">
                            <CDBSidebarMenuItem >
                                <span className="navbar-links">
                                    <i class="fas fa-dolly"></i> Request Doses
                                </span>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem >
                                <span className="navbar-links">
                                    <i class="fas fa-sign-out-alt"></i> logout
                                </span>
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <Row style={{ padding: '20px 5px', }}>
                        <Col>
                            <div >
                                -Clinic name-
                            </div>
                        </Col>
                        <Col>
                            <span className="navbar-links">
                                <i class="fas fa-cog"></i>
                            </span>
                        </Col>
                    </Row>

                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

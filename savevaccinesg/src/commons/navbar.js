import React from 'react'
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';

import { NavLink } from 'react-router-dom';

//IMPORT IMAGES
import mainlogo from '../images/SVlogo.png'

export default function MainNavbar() {
    return (
        <div className="navbar-main">
          
        <CDBSidebar textColor="#ffffff" backgroundColor="#7cbbb6">
          <CDBSidebarHeader>
            <img src={mainlogo} width="100%" margin="auto"></img>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/dashboard" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/request" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="hand-holding-medical">Request Doses</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/submit" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="dolly">Send Doses</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="sign-in-alt">Log out</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
        
    )
}

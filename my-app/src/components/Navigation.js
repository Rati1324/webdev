import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

function Navigation() {
  return (
    <Navbar db="dark" expand="lg"> 
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>

                <NavLink className="d-inline p-2 bg-dark text-white" to="/department">
                    Department
                </NavLink>

                <NavLink className="d-inline p-2 bg-dark text-white" to="/employee">
                    Employees
                </NavLink>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
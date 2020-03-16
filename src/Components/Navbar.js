import React from 'react';
import $ from 'jquery'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = (props) => {
  
  return (
    <div>
      <Navbar className='navbar' dark expand="md" fixed="top">
        <NavbarBrand className="brand" href="/">Siddhant Bohra</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#aboutme" >About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://drive.google.com/file/d/13C5GKCWIMiVCE6HLz7_UqneqD_ukvZhO/preview" target="_blank">Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/SiddhantBohra" target="_blank">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

import React  from 'react';
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
      <Navbar className = 'navbar' dark expand="md">
      <NavbarBrand className = "brand" href="/"><i class="fa fa-code" id="facolor" aria-hidden="true">SiddhantBohra</i></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <span><NavLink href="#aboutme" >About Me</NavLink></span>
            </NavItem>
            <NavItem>
            <span><NavLink href="/contact">Contact Me</NavLink></span>
            </NavItem>
            <NavItem>
              <span><NavLink href="https://drive.google.com/file/d/13C5GKCWIMiVCE6HLz7_UqneqD_ukvZhO/preview" target = "_blank">Resume</NavLink></span>
            </NavItem>
            <NavItem>
              <span><NavLink href="https://github.com/SiddhantBohra" target = "_blank">GitHub</NavLink></span>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

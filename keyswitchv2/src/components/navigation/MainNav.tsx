import React from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import AllKeyboards from "../pages/AllKeyboards";

export const MainNav = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">keyswitch</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/keyboards/">Keyboards</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">
                Shopping Cart
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                My Account
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>View Account</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Log Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>For keyboard enthusiasts</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNav;

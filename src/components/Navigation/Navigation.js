import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import { useOpen } from "../../hooks";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const { isOpen, toggle } = useOpen();
  return (
    <div className={classes.NavigationWrapper}>
      <Container>
        <Navbar light expand="md" className={classes.Navbar}>
          <NavbarBrand tag={RRNavLink} to="/" className={classes.NavbarBrand}>
            <div className={classes.Logo} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className={classes.Toggler} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem className={classes.NavItem}>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/"
                  activeClassName={classes.Active}
                  className={classes.NavLink}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem className={classes.NavItem}>
                <NavLink
                  tag={RRNavLink}
                  exact
                  to="/skicams"
                  activeClassName={classes.Active}
                  className={classes.NavLink}
                >
                  Skicams
                </NavLink>
              </NavItem>
              <NavItem className={classes.NavItem}>
                <NavLink
                  tag={RRNavLink}
                  className={classes.NavLink}
                  exact
                  to="/contact"
                  activeClassName={classes.Active}
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navigation;

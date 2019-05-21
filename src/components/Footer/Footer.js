import React from "react";
import { Container, Col, Row } from "reactstrap";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <Container>
        <Row>
          <Col lg="12">
            <div className={classes.Copyright}>Powered by PGS</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import AboutListItem from "./AboutListItem";

const AboutList = props => {
  let aboutCards = props.data.map(item => {
    return (
      <Col key={item.id} sm="4">
        {<AboutListItem item={item} />}
      </Col>
    );
  });
  return (
    <Container>
      <Row>{aboutCards}</Row>
    </Container>
  );
};

export default AboutList;

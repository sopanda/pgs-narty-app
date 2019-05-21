import React from "react";
import { Container, Row, Col } from "reactstrap";
import AboutListItem from "./AboutListItem";
import classes from "./AboutList.module.css";

const AboutList = props => {
  let aboutCards = props.data.map(item => {
    return (
      <Col key={item.id} sm="4">
        {<AboutListItem item={item} />}
      </Col>
    );
  });
  return (
    <div className={classes.AboutListWrapper}>
      <Container>
        <Row>{aboutCards}</Row>
      </Container>
    </div>
  );
};

export default AboutList;

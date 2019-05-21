import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import classes from "./AboutListItem.module.css";

const AboutListItem = ({ item }) => {
  return (
    <Card className={classes.Card}>
      <CardImg top width="100%" src={item.image} alt={`${item.title} image`} />
      <CardBody>
        <CardTitle tag="h4" className={classes.CardTitle}>
          {item.title}
        </CardTitle>
        <CardText className={classes.CardText}>{item.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default AboutListItem;

import React, { memo } from "react";
import { Card, CardBody, CardHeader, CardImg } from "reactstrap";
import classes from "./SkicamCard.module.css";

const SkicamCard = ({ data }) => {
  let cameras = [];
  Object.entries(data.cams).forEach(([key, value]) => {
    cameras.push({ name: value.name, url: value.url });
  });

  return (
    <Card className={classes.Card}>
      <CardHeader className={classes.Header}>
        <h3 className={classes.Title}>{data.name}</h3>
        <span className={classes.Date}>
          {new Date()
            .toJSON()
            .slice(0, 10)
            .split("-")
            .reverse()
            .join("-")}
        </span>
      </CardHeader>
      <CardBody>
        {cameras.map((camera, i) => (
          <CardImg
            key={i + camera.name}
            top
            width="100%"
            src={camera.url}
            alt={`${camera.name} image`}
          />
        ))}
      </CardBody>
    </Card>
  );
};

export default memo(SkicamCard);

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SkicamCard from "../../components/SkicamCard";
import Loader from "../../components/Loader";
import classes from "./Skicams.module.css";

const Skicams = () => {
  const [loadedData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://makevoid-skicams.p.mashape.com/cams.json";
    const options = {
      method: "GET",
      headers: {
        "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"
      }
    };
    setIsLoading(true);
    fetch(proxyUrl + url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not fetch cameras!");
        }
        return response.json();
      })
      .then(data => {
        let filteredData = [];
        Object.entries(data).forEach(([key, value]) => {
          if (value.name === "Andalo" || value.name === "Monte Bondone") {
            filteredData.push(value);
          }
        });
        setIsLoading(false);
        setData(filteredData);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !isLoading ? (
    <Container>
      <Row>
        {loadedData.map((camera, i) => (
          <Col key={i + camera.name} md="6" className={classes.Column}>
            <SkicamCard data={camera} />
          </Col>
        ))}
      </Row>
    </Container>
  ) : (
    <Loader />
  );
};

export default Skicams;

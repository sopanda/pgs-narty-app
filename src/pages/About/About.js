import React from "react";
import AboutList from "../../components/AboutList";
import { useSelector } from "react-redux";

const About = () => {
  const data = useSelector(state => state.aboutData);
  return <AboutList data={data} />;
};

export default About;

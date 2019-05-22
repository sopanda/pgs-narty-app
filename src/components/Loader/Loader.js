import React from "react";
import { default as Load } from "react-loader-spinner";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.Load}>
      <Load type="Grid" color="#ff7626" height={80} width={80} />
    </div>
  );
};

export default Loader;

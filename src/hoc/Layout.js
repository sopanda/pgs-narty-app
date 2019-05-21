import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import classes from "./Layout.module.css";

export const Layout = props => (
  <div className={classes.Wrapper}>
    <Navigation />
    <main className={classes.Main}>{props.children}</main>
    <Footer />
  </div>
);

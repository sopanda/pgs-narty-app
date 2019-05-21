import React, { Fragment } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const Layout = props => (
  <Fragment>
    <Navigation />
    <main>
      <div>{props.children}</div>
    </main>
    <Footer />
  </Fragment>
);

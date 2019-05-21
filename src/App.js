import React, { Fragment } from "react";
import { Layout } from "./hoc/index";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Skicams from "./pages/Skicams";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/skicams" component={Skicams} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </Fragment>
  );
};

export default App;

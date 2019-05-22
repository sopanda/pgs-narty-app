import React, { Fragment, Suspense, lazy } from "react";
import { Layout } from "./hoc/index";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Loader from "./components/Loader";

const Skicams = lazy(() => import("./pages/Skicams"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/skicams" component={Skicams} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </Layout>
    </Fragment>
  );
};

export default App;

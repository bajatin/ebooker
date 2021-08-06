import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";

import { Switch, Route } from "react-router-dom";

import HomePage from "./Homepage/homepage";

import SearchPage from "./searchpage/browse";

import Footer from "./components/footer";

import Ereader from "./components/reader/ereader";

import Mybooks from "./mybooks/mybooks";

import Abar from "./components/Appbar/appbar";

const App = () => {
  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Abar />
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} />} />
          <Route exact path="/browse" render={(props) => <SearchPage />} />
          <Route
            exact
            path="/read"
            render={(props) => <Ereader {...props} />}
          />
          <Route exact path="/mybooks" render={(props) => <Mybooks />} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import LandingPage from "./pages/LandingPage";
import TestingPage from "./pages/TestingPage";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "pages/Checkout";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exact path="/checkout/" component={Checkout} />
        <Route path="/example" component={TestingPage} />
      </Router>
    </div>
  );
}

export default App;

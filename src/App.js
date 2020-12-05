import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import ScrollToTop from "./ScrollToTop";
import NavigationBar from "./Components/NavigationBar";
import Thread from "./Components/Thread";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import About from "./Components/About";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="wrapper">
        <NavigationBar />
        <div className="App">
          <Switch>
            <Route
              path="/post/:postId"
              component={(id) => <Thread postId={id} />}
            />
            <Route path="/about" component={() => <About />} />
            <Route path="/" component={() => <Body />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

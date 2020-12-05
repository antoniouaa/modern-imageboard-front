import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import ScrollToTop from "./ScrollToTop";
import NavigationBar from "./Components/NavigationBar";
import Thread from "./Components/Thread";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import TOS from "./Components/TOS";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="wrapper">
        <NavigationBar />
        <div className="App">
          <Switch>
            <Route path="/post/:postId" component={() => <Thread />} />
            <Route path="/terms" component={() => <TOS />} />
            <Route path="/contact" component={() => <Contact />} />
            <Route path="/about" component={() => <About />} />
            <Route path="/" component={() => <Body />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

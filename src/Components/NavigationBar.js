import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function NavigationBar(props) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="sticky">
          <Toolbar className="Navbar-Toolbar">
            <Typography variant="h4" className="Navbar-Title">
              Modern-Imageboard
            </Typography>
            <div className="Navbar-Button-Container">
              <Link to="/home">
                <Button className="Navbar-Button">Home</Button>
              </Link>
              <Link to="/about">
                <Button className="Navbar-Button">About</Button>
              </Link>
              <Link to="/contact">
                <Button className="Navbar-Button">Contact Us</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}

import React from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <AppBar position="sticky">
      <Toolbar className="Footer-Toolbar">
        <Typography variant="p" className="Navbar-Title">
          Modern Imageboard®2020
        </Typography>
        <Link className="Footer-Link" component={RouterLink} to="/home">
          Home
        </Link>
        <Link className="Footer-Link" component={RouterLink} to="/about">
          About
        </Link>
        <Link className="Footer-Link" component={RouterLink} to="/terms">
          Terms of Service
        </Link>
        <Link className="Footer-Link" component={RouterLink} to="/license">
          License
        </Link>
        <Link className="Footer-Link" component={RouterLink} to="/faq">
          FAQ
        </Link>
        <Link className="Footer-Link" component={RouterLink} to="/privacy">
          Privacy Policy
        </Link>
      </Toolbar>
    </AppBar>
  );
}

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import { NavbarGeneralProps } from "../index";
import { MenuItem } from "@material-ui/core";

const MobileNavbar = (props: NavbarGeneralProps) => {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 5 }}>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "white",
          fontFamily: "Roboto",
          ...props.style
        }}
      >
        <Toolbar
          variant="regular"
          style={{
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
        >
          <MenuItem
            color="inherit"
            aria-label="Menu"
            onClick={props.logo.onClick}
          >
            <img src={props.logo.src} style={{ width: 100, height: "auto" }} />
          </MenuItem>
          <div style={{ flexGrow: 1 }} />

          {props.children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MobileNavbar;

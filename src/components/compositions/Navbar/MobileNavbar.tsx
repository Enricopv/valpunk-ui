import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from "react";
import { NavbarGeneralProps } from "./index";
import { MenuItem } from "@material-ui/core";

const MobileNavbar = (props: NavbarGeneralProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          fontFamily: "Roboto",
          ...props.style
        }}
      >
        <Toolbar>
          <MenuItem
            color="inherit"
            aria-label="Menu"
            onClick={props.logo.onClick}
          >
            <img src={props.logo.src} style={{ width: 80, height: "auto" }} />
          </MenuItem>
          <div style={{ flexGrow: 1 }} />
          <div>
            <IconButton
              color="inherit"
              onClick={handleMenu}
              aria-label="Menu"
              style={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              onClose={handleClose}
            >
              {props.children}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MobileNavbar;

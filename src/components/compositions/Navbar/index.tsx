import { withWidth } from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";
import * as React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileTopBar from "./MobileNavbar";

export interface NavButtonProps {
  text?: string;
  link?: string;
}

export interface NavbarGeneralProps {
  children?: React.ReactNode;
  logo?: { src?: string; onClick?: () => void };
  style?: React.CSSProperties;
}

export interface NavbarProps extends WithWidth {
  logo?: { src?: string; onClick?: () => void };
  navbarStyle?: React.CSSProperties;
  children?: React.ReactNode;
}

const Navbar = ({ width, logo, navbarStyle, children }: NavbarProps) => {
  const NavComponent: (props: NavbarGeneralProps) => JSX.Element =
    width === "xs" || width === "sm" ? MobileTopBar : DesktopNavbar;

  return (
    <NavComponent logo={logo} style={navbarStyle}>
      {children}
    </NavComponent>
  );
};

export default withWidth()(Navbar);

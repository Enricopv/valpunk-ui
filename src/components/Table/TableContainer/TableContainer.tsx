import * as React from "react";

export default class TableContainer extends React.PureComponent {
  public render() {
    return <div>{this.props.children}</div>;
  }
}

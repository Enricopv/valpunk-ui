import * as React from "react"

export default class Button extends React.PureComponent {
  public render() {
    return(
      <button>{this.props.children}</button>
    )
  }
}
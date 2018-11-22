import * as React from "react"

interface TableRowProps {
  id?: string
  name?: string
  profession?: string
}

export default class TableRow extends React.PureComponent<TableRowProps> {
  public render() {
    return (
      <div>
        row
      </div>
    )
  }
}
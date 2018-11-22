import * as React from "react";
import styled from "styled-components";
import { TableContainer } from "../../src/components/Table";
const data = [
  { id: "1", name: "Enrico", profession: "programmer" },
  { id: "2", name: "Jon", profession: "singer" },
  { id: "3", name: "Jake", profession: "knower of things" }
];

interface IRowData {
  [key: string]: string | number;
}

const headerData = [
  { id: "0", name: "id" },
  { id: "1", name: "name" },
  { id: "2", name: "profession" }
];

export default class TableExample extends React.PureComponent<
  {},
  { data: IRowData[] }
> {
  public render() {
    return (
      <TableContainer data={data}>
        {(props) => (
          <>
            <StyledTableHeader>
              {headerData.map(header => (
                <StyledHeaderCell
                  onClick={props.sort(header.name, "desc")}
                  numRows={headerData.length}
                  key={header.id}
                >
                  {header.name}
                </StyledHeaderCell>
              ))}
            </StyledTableHeader>
            {props.data.map((person) => {
              let rowData = [];
              for (let key in person) {
                rowData.push(
                  <StyledTableCell key={key} numRows={headerData.length}>
                    {person[key.toString()]}
                  </StyledTableCell>
                );
              }
              return <StyledTableRow>{rowData}</StyledTableRow>;
            })}
          </>
        )}
      </TableContainer>
    );
  }
}

// const StyledTableContainer = styled.div`
//   display: flex;
//   flex: 1;
// `;

const StyledTableHeader = styled.div`
  display: flex;
  flex: 1;
`;

const StyledHeaderCell = styled.div<{ numRows: number }>`
  display: flex;
  flex: ${props => props.numRows};
`;

const StyledTableRow = styled.div`
  display: flex;
  flex: 1;
`;

const StyledTableCell = styled.div<{ numRows: number }>`
  display: flex;
  flex: ${props => props.numRows};
`;

{
  /*
  <TableContainer>
    <TableHeader/>
      {data.map(person => <TableRow key={person.id} name={person.name} profession={person.profession} />)}
    <TableFooter/>
  </TableContainer> */
}

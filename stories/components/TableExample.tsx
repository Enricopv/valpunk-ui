import * as React from "react";
import styled from "styled-components";
// import { TableContainer, TableHeader, TableFooter, TableRow } from '../../src/components/Table';

const data = [
  { id: "1", name: "Enrico", profession: "programmer" },
  { id: "2", name: "Jon", profession: "singer" },

  { id: "3", name: "Jake", profession: "knower of things" }
];

const headerData = [
  { id: "0", name: "ID" },
  { id: "1", name: "Name" },
  { id: "2", name: "Profession" }
];

export default class TableExample extends React.PureComponent {
  public render() {
    return (
      <StyledTableContainer style={{ flexDirection: "column" }}>
        <StyledTableHeader>
          {headerData.map(header => (
            <StyledHeaderCell numRows={headerData.length} key={header.id}>
              {header.name}
            </StyledHeaderCell>
          ))}
        </StyledTableHeader>
        {data.map((person: { [key: string]: string | number }) => {
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
      </StyledTableContainer>
    );
  }
}

const StyledTableContainer = styled.div`
  display: flex;
  flex: 1;
`;

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

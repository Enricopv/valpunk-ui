import * as React from "react";
import produce from "immer";
import styled from "styled-components";

interface IRowData {
  [key: string]: string | number;
}

interface TableContainerProps {
  data: IRowData[];
  children: (
    props?: {
      sort: (
        category: string,
        direction: string
      ) => (_event: React.MouseEvent<HTMLDivElement>) => void;
      data: IRowData[];
      withSorting: (array: any[], order: string, orderBy: string) => any[];
    }
  ) => React.ReactNode;
}

interface State {
  data?: IRowData[];
  orderCategory?: string;
}

function desc(a: any[], b: any[], orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export default class TableContainer extends React.PureComponent<
  TableContainerProps,
  State
> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.sort.bind(this);
  }

  public addData = () => {
    let { data } = this.state;
    const nextState = produce(data, draftState => {
      draftState.push({ id: "4", name: "Jimmy", profession: "Disc man" });
    });
    this.setState({
      data: nextState
    });
  };

  public remove = () => {};

  public sort = (category: string, direction: string) => (
    _event: React.MouseEvent<HTMLDivElement>
  ) => {
    console.log("hi");
    console.log("category,", category);
    // let { data } = this.state;
    const nextState = this.withSorting(this.state.data, "asc", "name");

    console.log(nextState);
    this.setState({
      data: nextState
    });
  };

  public getSorting(order: string, orderBy: string) {
    return order === "desc"
      ? (a: any[], b: any[]) => desc(a, b, orderBy)
      : (a: any[], b: any[]) => desc(a, b, orderBy);
  }

  public withSorting(array: any[], order: string, orderBy: string) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a: any[], b: any[]) => {
      let newOrder;
      if (order === "desc") {
        newOrder = desc(a[0], b[0], orderBy);
      } else {
        newOrder = -desc(a[0], b[0], orderBy);
      }
      if (newOrder !== 0) {
        return newOrder;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  public render() {
    return (
      <StyledTableContainer>
        {this.props.children({
          sort: this.sort,
          data: this.state.data,
          withSorting: this.withSorting
        })}
      </StyledTableContainer>
    );
  }
}

const StyledTableContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

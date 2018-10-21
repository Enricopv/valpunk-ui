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
      ) => (_event: React.MouseEvent<HTMLDivElement>) => void,
      data: IRowData[]
    }
  ) => React.ReactNode
}

interface State {
  data?: IRowData[];
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
    const nextState = this.stableSort(
      this.state.data,
      this.getSorting(direction, category)
    );

    console.log(nextState);
    this.setState({
      data: nextState
    });
  };

  public getSorting(order: string, orderBy: string) {
    return order === "desc"
      ? (a: any[], b: any[]) => this.desc(a, b, orderBy)
      : (a: any[], b: any[]) => -this.desc(a, b, orderBy);
  }

  public stableSort(array: any[], cmp: (a: any[], b: any[]) => number) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a: any[], b: any[]) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  public desc(a: any[], b: any[], orderBy: string) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  public render() {
    return (
      <StyledTableContainer>
        {this.props.children({
          sort: this.sort,
          data: this.state.data
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

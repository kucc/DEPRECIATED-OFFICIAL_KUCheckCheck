import styled from "styled-components";

export const StyledTableContainer = styled.div`
  margin-top: 45px;
  margin-left: 10%;
  margin-right: 10%;
  .table-drag-select td {
    line-height: 2rem;
    border: 7px solid rgba(0, 0, 0, 0);
  }

  .table-drag-select td.cell-selected {
    background-color: ${(props) => props.selectedColor || "#A9A9A9"};
  }
  .table-drag-select td.cell-being-selected {
    background-color: #3f83d5 !important;
  }
`;
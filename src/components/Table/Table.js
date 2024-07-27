import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

// Main component
const Table = () => {
  // Sample data for table and graph
  const tableData = [
    { title1: "data 1", title2: "sugarcup", title3: "200" },
    { title1: "data 1", title2: "sugarcup", title3: "150" },
    { title1: "data 1", title2: "sugarcup", title3: "300" },
    { title1: "data 1", title2: "sugarcup", title3: "250" },
  ];

  // Table columns
  const columns = React.useMemo(
    () => [
      {
        Header: "Title 1",
        accessor: "title1",
      },
      {
        Header: "Title 2",
        accessor: "title2",
      },
      {
        Header: "Title 3",
        accessor: "title3",
      },
    ],
    []
  );

  const data = React.useMemo(() => tableData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;

    th,
    td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }
  `;
  return (
    <>
      <TableContainer {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
    </>
  );
};

export default Table;

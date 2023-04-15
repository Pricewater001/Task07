import React from "react";
import dataRandom from "./MOCK_DATAlight.json";
import { useTable } from "react-table";
import style from "../style/table.module.css";

const Table = () => {
  const data = React.useMemo(() => dataRandom, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Ip",
        accessor: "ip_address",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className={style["container-table"]}>
      <table className={style["table"]} {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th>#</th>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row, idx) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  <td>{idx + 1}</td>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell, index) => {
                      // Apply the cell props
                      console.log( cell)
                      if(cell.column.id === "id"){
                        return (
                            <td>
                              { cell.value.split("-")[0]}
                            </td>
                        )
                      }
                    
                      return (
                        <td onClick={()=>alert(cell.value)} {...cell.getCellProps()}
                        style={{
                            color: cell.value.includes("i") ? "red"  :  "white"
                        }}
                        >
                         
                          {
                            // Render the cell contents
                          
                            cell.render("Cell")
                            
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;

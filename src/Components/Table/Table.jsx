import React from "react";
import styles from "./Table.module.css";

export const Table = React.memo((props) => {
  const { headers, data, columns } = props;
  const TableHeader = () => (
    <tr>
      {headers.map((header, index) => (
        <th key={index}>{header}</th>
      ))}
    </tr>
  );
  const TableData = () =>
    data.map((item) => (
      <tr key={item.id}>
        {columns.map((value, index) => (
          <td key={index}>{item[value]}</td>
        ))}
      </tr>
    ));

  return (
    <div>
      <table id={styles.orders}>
        <tbody>
          <TableHeader />
          <TableData />
        </tbody>
      </table>
    </div>
  );
});

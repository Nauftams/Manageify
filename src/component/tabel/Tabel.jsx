import React from "react";
import { Table } from "react-bootstrap";

const Tabel = () => {
  return (
    <Table striped bordered hover variant="dark" className="mt-3">
      <thead>
        <tr>
          <th>No</th>
          <th>Task</th>
          <th>Target</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Doing Homework</td>
          <td>Done at 11.00 PM</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Tabel;

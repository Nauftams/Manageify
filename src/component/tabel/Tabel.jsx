import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ total, editData, deleteData }) => {
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
        {total.map((totals, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{totals.task}</td>
              <td>{totals.target}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => editData(totals.no)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => deleteData(totals.no)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;

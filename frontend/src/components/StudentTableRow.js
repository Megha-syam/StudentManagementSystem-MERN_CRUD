import React from "react";
import { Link } from "react-router-dom";

const StudentTableRow = ({ student, onDelete }) => {
  return (
    <tr>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>
        <Link to={`/edit/${student._id}`}>
          <button>Edit</button>
        </Link>
      </td>
      <td>
        <button onClick={() => onDelete(student._id)}>Delete</button>
      </td>
    </tr>
  );
};

export default StudentTableRow;

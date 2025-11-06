import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentTableRow from "./StudentTableRow";
import { Link } from 'react-router-dom';

const StudentList = () => {
  // 1️⃣ State to hold student list
  const [students, setStudents] = useState([]);

  // 2️⃣ Fetch data when component mounts
  useEffect(() => {
    fetchStudents();
  }, []);

  // 3️⃣ Function to get students from API
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data);
    } catch (err) {
      console.error("Failed to fetch students", err);
    }
  };

  // 4️⃣ Function to delete a student
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/student/${id}`);
        alert("Student deleted successfully");
        fetchStudents(); // Refresh list
      } catch (err) {
        console.error("Failed to delete student", err);
      }
    }
  };



  // 5️⃣ Render student table
  return (
    
    <div>
          <Link to="/" style={{ marginBottom: '10px', display: 'inline-block' }}>🏠 Back to Dashboard</Link>
      <h2>Student List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentTableRow
              key={student._id}
              student={student}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditStudent = () => {
  const [student, setStudent] = useState({ id: "", name: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/student/${id}`);
        setStudent(res.data);
      } catch (err) {
        console.error("Failed to fetch student", err);
      }
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/student/${id}`, student);
      alert("Student updated successfully!");
      navigate("/list");
    } catch (err) {
      console.error("Failed to update student", err);
    }
  };

  return (
    <div>
      <Link to="/">🏠 Back to Dashboard</Link>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" value={student.id} onChange={handleChange} placeholder="ID" required />
        <br />
        <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
        <br />
        <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" required />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;

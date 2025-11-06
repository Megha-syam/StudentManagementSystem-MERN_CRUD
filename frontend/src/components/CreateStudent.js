import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const CreateStudent = () => {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedStudent = { ...student, [name]: value };
    setStudent(updatedStudent);
    console.log("Updated student:", updatedStudent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting student:", student);

    try {
      const response = await axios.post("http://localhost:5000/api/createstudent", student);
      console.log("API Response:", response.data);
      alert("Student added successfully!");
      navigate("/list");
    } catch (err) {
      console.error("Failed to add student:", err.response ? err.response.data : err.message);
      alert("Error adding student. See console for details.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
      <Link to="/" style={{ display: "block", marginBottom: "1rem" }}>🏠 Back to Dashboard</Link>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={student.id}
          onChange={handleChange}
          placeholder="ID"
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>Submit</button>
      </form>
    </div>
  );
};

export default CreateStudent;

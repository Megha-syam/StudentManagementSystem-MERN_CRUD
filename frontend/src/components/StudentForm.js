import React from "react";

const StudentForm = ({ formTitle, formData, onChange, onSubmit }) => {
  return (
    <div>
      <h2>{formTitle}</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;

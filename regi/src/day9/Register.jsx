import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    matches: [],
    password: "",
    confirmPassword: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      matches: checked
        ? [...prevState.matches, value]
        : prevState.matches.filter((match) => match !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cricketer Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            minLength="8"
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleInputChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleInputChange}
          />
          Female
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Matches: </label>
          {["ODI", "Test", "T20", "Domestic"].map((match) => (
            <label key={match}>
              <input
                type="checkbox"
                value={match}
                checked={formData.matches.includes(match)}
                onChange={handleCheckboxChange}
              />
              {match}
            </label>
          ))}
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">Save</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Matches</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.name}</td>
                <td>{submittedData.gender}</td>
                <td>{submittedData.email}</td>
                <td>{submittedData.matches.join(", ")}</td>
                <td>{submittedData.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Register;

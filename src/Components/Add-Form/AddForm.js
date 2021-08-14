import React from "react";
import "./AddForm.css";
import { Link } from "react-router-dom";

const AddForm = () => {
  return (
    <div className="app-container">
      <div className="btn-2">
        <Link to="/">
          <button className="btn-link">Back</button>
        </Link>
        <Link to="/">
          <button className="btn">Close</button>
        </Link>
      </div>
      <div className="form-container">
        <label className="label">Expenses:</label>
        <input
          className="inp-box"
          type="text"
          placeholder="Enter your expense"
        />
      </div>
      <div className="form-container">
        <label className="label">Amount in Rs:</label>
        <input className="inp-box" type="number" placeholder="Enter amount" />
      </div>
      <div className="sub">
        <button>Add expense</button>
      </div>
    </div>
  );
};

export default AddForm;

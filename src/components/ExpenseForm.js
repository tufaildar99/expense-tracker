import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ handleFormData }) {
  const [formdata, setFormdata] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormdata((values) => ({
      ...values,
      id: uuidv4(),
      [name]: value,
    }));
  }
  return (
    <div className="expense-form">
      <h3>Add Expense</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormData(formdata);
          setFormdata({});
        }}
      >
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formdata.description || ""}
          onChange={handleChange}
          required
        />
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          onChange={handleChange}
          value={formdata.amount || ""}
          required
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={formdata.date || ""}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

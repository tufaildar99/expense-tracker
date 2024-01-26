import React from "react";
import { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [formdataArray, setformdataArray] = useState([]);

  function handleFormData(formdata) {
    setformdataArray([...formdataArray, formdata]);
  }
  function handleDelete(id) {
    const newFormDataArray = formdataArray.filter((item) => id !== item.id);
    setformdataArray(newFormDataArray); // Assuming setFormDataArray is the function to update the state
  }

  return (
    <div className="app">
      <Header />
      <ExpenseForm handleFormData={handleFormData} />
      <ExpenseList formdataArray={formdataArray} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <h3>Expense Tracker App</h3>
    </div>
  );
}

function ExpenseForm({ handleFormData }) {
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

function ExpenseList({ formdataArray, handleDelete }) {
  let total = 0;
  for (let i = 0; i < formdataArray.length; i++) {
    total += parseInt(formdataArray[i].amount);
  }

  return (
    <div className="expense-list">
      <div className="expense-list-info">
        <h4>Total Amount Spent : ${total}</h4>
      </div>
      <div className="expense-list-container">
        {formdataArray.map((item) => (
          <ExpenseItem
            id={item.id}
            description={item.description}
            amount={item.amount}
            date={item.date}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

function ExpenseItem({ id, description, amount, date, handleDelete }) {
  return (
    <div className="expense-item">
      <div className="expense-item__info">
        <h4>{description}</h4>
        <p>Amount: ${amount}</p>
        <p>Date: {date}</p>
      </div>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className="expense-item__delete"
      >
        Delete
      </button>
    </div>
  );
}
function Footer() {
  return (
    <footer
      style={{ textAlign: "center", padding: "20px", background: "#f8f9fa" }}
    >
      Crafted with ❤️ by Tufail Dar
    </footer>
  );
}

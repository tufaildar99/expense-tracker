import React from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <ExpenseForm />
      <ExpenseList />
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

function ExpenseForm() {
  const [formdata, setFormdata] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormdata((values) => ({
      ...values,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(formdata));
  }

  console.log(formdata);
  return (
    <div className="expense-form">
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formdata.description}
          onChange={handleChange}
          required
        />
        <label>Amount</label>
        <input
          type="text"
          name="amount"
          onChange={handleChange}
          value={formdata.amount}
          required
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={formdata.date}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function ExpenseList() {
  return (
    <div className="expense-list">
      <div className="expense-list-info">
        <h4>Total Amount Spent : $XXX</h4>
      </div>
      <div className="expense-list-container">
        <ExpenseItem />
      </div>
    </div>
  );
}

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__info">
        <h4>Groceries</h4>
        <p>Amount: $200</p>
        <p>Date: 2022-01-01</p>
      </div>
      <button className="expense-item__delete">Delete</button>
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

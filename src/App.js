import React from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  const [formdataArray, setformdataArray] = useState([]);

  function handleFormData(formdata) {
    setformdataArray([...formdataArray, formdata]);
    console.log(formdataArray);
  }
  return (
    <div className="app">
      <Header />
      <ExpenseForm handleFormData={handleFormData} />
      <ExpenseList formdataArray={formdataArray} />
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
        }}
      >
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

function ExpenseList({ formdataArray }) {
  return (
    <div className="expense-list">
      <div className="expense-list-info">
        <h4>Total Amount Spent : $XXX</h4>
      </div>
      <div className="expense-list-container">
        {formdataArray.map((item) => (
          <ExpenseItem
            description={item.description}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

function ExpenseItem({ description, amount, date }) {
  return (
    <div className="expense-item">
      <div className="expense-item__info">
        <h4>{description}</h4>
        <p>Amount: {amount}</p>
        <p>Date: {date}</p>
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

import Raect from "react";
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
  return (
    <div className="expense-form">
      <h3>Add Expense</h3>
      <form>
        <label>Description</label>
        <input type="text" required />
        <label>Amount</label>
        <input type="text" required />
        <label>Date</label>
        <input type="date" required />
        <button>Submit</button>
      </form>
    </div>
  );
}

function ExpenseList() {
  return (
    <div className="expense-list">
      <div className="expense-list-info">
        <h2>Expense List</h2>
        <h4>Total Amount Spent : $XXX</h4>
      </div>
      <div className="expense-list-container">
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
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

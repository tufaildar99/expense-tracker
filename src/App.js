import Raect from "react";
import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Header />
      <ExpenseForm />
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

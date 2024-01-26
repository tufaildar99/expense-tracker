import React from "react";
import { useState } from "react";
import "./index.css";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";
import Header from "./components/Header";

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

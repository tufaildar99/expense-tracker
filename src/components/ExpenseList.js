import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList({ formdataArray, handleDelete }) {
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

import "./ExpenseItem.css";

export default function ExpenseItem({
  id,
  description,
  amount,
  date,
  handleDelete,
}) {
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

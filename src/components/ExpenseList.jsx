import Expense from "./Expense";

const ExpenseList = ({ expenses, setExpenseToEdit, deleteExpense }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Gastos" : "No hay gastos"}</h2>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          setExpenseToEdit={setExpenseToEdit}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;

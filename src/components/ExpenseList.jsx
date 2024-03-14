import Expense from "./Expense";

const ExpenseList = ({ expenses, setExpenseToEdit, deleteExpense, filter, filteredExpenses }) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>{filteredExpenses.length ? "Expenses" : "There are no expenses"}</h2>

          {filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Expenses" : "There are no expenses"}</h2>

          {expenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;

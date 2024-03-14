import { useState, useEffect } from "react";

import { generateId } from "./utils";

import NewBudgetIcon from "./img/nuevo-gasto.svg";

import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";

function App() {
  const [budget, setBudget] = useState(Number(localStorage.getItem("budget")) ?? 0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : []
  );
  const [expenseToEdit, setExpenseToEdit] = useState({});

  const [filter, setFilter] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    if (Object.keys(expenseToEdit).length > 0) {
      setModal(true);
      setTimeout(setAnimateModal, 500, true);
    }
  }, [expenseToEdit]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    if (filter) {
      const filteredExpenses = expenses.filter((expense) => expense.category === filter);
      setFilteredExpenses(filteredExpenses);
    }
  }, [filter]);

  useEffect(() => {
    const budgetFromLocalStorage = Number(localStorage.getItem("budget") ?? 0);

    if (budgetFromLocalStorage > 0) setIsValidBudget(true);
  }, []);

  const handleNewExpense = () => {
    setModal(true);
    setExpenseToEdit({});

    setTimeout(setAnimateModal, 500, true);
  };

  const upsertExpense = (expense) => {
    if (expense.id) {
      const updatedExpenses = expenses.map((expenseFromState) =>
        expenseFromState.id === expense.id ? expense : expenseFromState
      );
      setExpenses(updatedExpenses);
      setExpenseToEdit({});
    } else {
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }

    setAnimateModal(false);
    setTimeout(setModal, 500, false);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
        setExpenses={setExpenses}
      />
      {isValidBudget && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <ExpenseList
              expenses={expenses}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              filteredExpenses={filteredExpenses}
            />
          </main>
          <div className="nuevo-gasto">
            <img src={NewBudgetIcon} alt="nuevo gasto" onClick={handleNewExpense} />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          upsertExpense={upsertExpense}
          expenseToEdit={expenseToEdit}
          setExpenseToEdit={setExpenseToEdit}
        />
      )}
    </div>
  );
}

export default App;

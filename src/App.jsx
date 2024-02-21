import { useState } from "react";

import { generateId } from "./utils";

import NewBudgetIcon from "./img/nuevo-gasto.svg";

import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(setAnimateModal, 500, true);
  };

  const saveExpense = (expense) => {
    expense.id = generateId();
    setExpenses([...expenses, expense]);
    setAnimateModal(false);
    setTimeout(setModal, 500, false);
  };
  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <div className="nuevo-gasto">
          <img src={NewBudgetIcon} alt="nuevo gasto" onClick={handleNewExpense} />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
        />
      )}
    </>
  );
}

export default App;
import { useState, useEffect } from "react";

import CloseButton from "../img/cerrar.svg";

import Message from "./Message";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  upsertExpense,
  expenseToEdit,
  setExpenseToEdit,
}) => {
  const [message, setMessage] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(expenseToEdit).length > 0) {
      setExpenseName(expenseToEdit.expenseName);
      setQuantity(expenseToEdit.quantity);
      setCategory(expenseToEdit.category);
      setDate(expenseToEdit.date);
      setId(expenseToEdit.id);
    }
  }, []);

  const hideModal = () => {
    setAnimateModal(false);
    setExpenseToEdit({});
    setTimeout(setModal, 500, false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([expenseName, quantity, category].includes("")) {
      setMessage("Todos los campos son obligatorios");
      setTimeout(setMessage, 3000, "");
      return;
    }

    upsertExpense({ expenseName, quantity, category, date, id });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseButton} alt="close button" onClick={hideModal} />
      </div>
      <form onSubmit={handleSubmit} className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <fieldset>
          <legend>{expenseToEdit.id ? "EDIT EXPENSE" : "ADD EXPENSE"}</legend>
          {message && <Message type="error">{message}</Message>}
          <div className="campo">
            <label htmlFor="nombre">Expense description</label>
            <input
              id="name"
              type="text"
              placeholder="Add expense description"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Amount</label>
            <input
              id="quantity"
              type="number"
              placeholder="Add the amount of the expense"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Category</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">-- SELECT A CATEGORY --</option>
              <option value="saving">Saving</option>
              <option value="food">Food</option>
              <option value="home">Home</option>
              <option value="expenses">Expenses</option>
              <option value="leisure">Leisure</option>
              <option value="health">Health</option>
              <option value="subscriptions">Subscriptions</option>
            </select>
            <input type="submit" value={expenseToEdit.id ? "Save changes" : "Add expense"} />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Modal;

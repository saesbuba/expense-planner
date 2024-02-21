import { useState } from "react";

import CloseButton from "../img/cerrar.svg";

import Message from "./Message";

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense }) => {
  const [message, setMessage] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const hideModal = () => {
    setAnimateModal(false);
    setTimeout(setModal, 500, false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([expenseName, quantity, category].includes("")) {
      setMessage("Todos los campos son obligatorios");
      setTimeout(setMessage, 3000, "");
      return;
    }

    saveExpense({ expenseName, quantity, category });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseButton} alt="boton cerrar" onClick={hideModal} />
      </div>
      <form onSubmit={handleSubmit} className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <fieldset>
          <legend>{"Nuevo gasto".toUpperCase()}</legend>
          {message && <Message type="error">{message}</Message>}
          <div className="campo">
            <label htmlFor="nombre">Nombre gasto</label>
            <input
              id="name"
              type="text"
              placeholder="Añade el nombre del gasto"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input
              id="quantity"
              type="number"
              placeholder="Añade la cantidad del gasto"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Categoria</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">-- SELECCIONE --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
            <input type="submit" value="Añadir gasto" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Modal;

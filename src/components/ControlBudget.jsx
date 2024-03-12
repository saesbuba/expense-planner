import { useEffect, useState } from "react";

const ControlBudget = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0);
    setSpent(totalSpent);
  }, [expenses]);

  const formatAmount = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatAmount(budget)}
        </p>
        <p>
          <span>Disponible:</span> {formatAmount(available)}
        </p>
        <p>
          <span>Gastado:</span> {formatAmount(spent)}
        </p>
      </div>
    </div>
  );
};

export default ControlBudget;

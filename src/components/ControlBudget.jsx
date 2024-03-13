import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlBudget = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState((0).toFixed(2));

  useEffect(() => {
    const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0);
    const totalAvailable = budget - totalSpent;
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);

    setSpent(totalSpent);
    setAvailable(totalAvailable);
    setTimeout(setPercentage, 1000, newPercentage);
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
        <CircularProgressbar
          styles={buildStyles({
            pathColor: "#3b82f6",
            trailColor: "#f5f5f5",
            textColor: "#3b82f6",
          })}
          value={percentage}
          text={`${percentage}% spent`}
        />
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

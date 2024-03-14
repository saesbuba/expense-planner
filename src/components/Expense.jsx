import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../utils";

import SavingIcon from "../img/icono_ahorro.svg";
import HomeIcon from "../img/icono_casa.svg";
import FoodIcon from "../img/icono_comida.svg";
import ExpenseIcon from "../img/icono_gastos.svg";
import LeisureIcon from "../img/icono_ocio.svg";
import HealthIcon from "../img/icono_salud.svg";
import SubscriptionIcon from "../img/icono_suscripciones.svg";

const iconDictionary = {
  saving: { icon: SavingIcon, alt: "saving icon" },
  food: { icon: FoodIcon, alt: "food icon" },
  home: { icon: HomeIcon, alt: "home icon" },
  expenses: { icon: ExpenseIcon, alt: "expense icon" },
  leisure: { icon: LeisureIcon, alt: "leisure icon" },
  health: { icon: HealthIcon, alt: "health icon" },
  subscriptions: { icon: SubscriptionIcon, alt: "subscription icon" },
};

const Expense = ({ expense, setExpenseToEdit, deleteExpense }) => {
  const { expenseName, quantity, category, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenseToEdit(expense)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={iconDictionary[category]["icon"]} alt={iconDictionary[category]["alt"]} />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{expenseName}</p>
              <p className="fecha-gasto">
                Added: <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${quantity}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;

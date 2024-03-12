import { formatDate } from "../utils";

import SavingIcon from "../img/icono_ahorro.svg";
import HouseIcon from "../img/icono_casa.svg";
import FoodIcon from "../img/icono_comida.svg";
import ExpenseIcon from "../img/icono_gastos.svg";
import LeisureIcon from "../img/icono_ocio.svg";
import HealthIcon from "../img/icono_salud.svg";
import SubscriptionIcon from "../img/icono_suscripciones.svg";

const iconDictionary = {
  ahorro: { icon: SavingIcon, alt: "Icono de ahorro" },
  comida: { icon: FoodIcon, alt: "Icono de comida" },
  casa: { icon: HouseIcon, alt: "Icono de casa" },
  gastos: { icon: ExpenseIcon, alt: "Icono de gastos" },
  ocio: { icon: LeisureIcon, alt: "Icono de ocio" },
  salud: { icon: HealthIcon, alt: "Icono de salud" },
  suscripciones: { icon: SubscriptionIcon, alt: "Icono de suscripciones" },
};

const Expense = ({ expense }) => {
  const { expenseName, quantity, category, id, date } = expense;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        {/*TODO - Add image*/}
        <img src={iconDictionary[category]["icon"]} alt={iconDictionary[category]["alt"]} />
        <div className="descripcion-gasto">
          <p className="categoria">{category}</p>
          <p className="nombre-gasto">{expenseName}</p>
          <p className="fecha-gasto">
            Agregado el: <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${quantity}</p>
    </div>
  );
};

export default Expense;

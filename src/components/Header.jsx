import ControlBudget from "./ControlBudget";
import NewBudget from "./NewBudget";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expenses, setExpenses }) => {
  return (
    <header>
      <h1>Expense planner</h1>
      {isValidBudget ? (
        <ControlBudget
          budget={budget}
          setBudget={setBudget}
          expenses={expenses}
          setExpenses={setExpenses}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget budget={budget} setBudget={setBudget} setIsValidBudget={setIsValidBudget} />
      )}
    </header>
  );
};

export default Header;

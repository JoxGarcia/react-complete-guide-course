import React, {useState} from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY = [
  { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) , id:'e1'},
  { title: "Car Insurance", amount: 30.67, date: new Date(2021, 2, 27), id:'e2' }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY);
  

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

import Expense from "./components/Expense";
import './components/expenses.css';
import NewExpense from "./components/NewExpense";
import React,{useState} from "react";

const App =() => {
  /*
  const para = document.createElement('p');
  para.textContent = "This is also visible";
  document.getElementById('root').append(para);
  */
  //Diatas merupakan imperative untuk js, susah buat UI yang kompleks

  /* latihan memindahkan elemen dibawah kedalam file baru
  <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}>
      </ExpenseItem>

      */

  const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2021, 4, 28) },
    { id: 'e2', title: 'Car Insurance', amount: 294, date: new Date(2022, 0, 28) },
    { id: 'e3', title: 'TV', amount: 230, date: new Date(2020, 3, 12) },
    { id: 'e4', title: 'desk', amount: 30, date: new Date(2020, 3, 21) },
    { id: 'e5', title: 'Shirt', amount: 40, date: new Date(2020,4,12)}, 
    { id: 'e6', title: 'Sunglasses', amount: 20, date: new Date(2020,9,10)},
    { id: 'e7', title: 'Shampoo', amount: 12, date: new Date(2020,3,20)},
    { id: 'e8', title: 'Jeans', amount: 82.49, date: new Date(2020,7,8)},
    { id: 'e9', title: 'Charger', amount: 28.89, date: new Date(2020,4,19)},
    { id: 'e10', title: 'Laptop', amount: 128.54, date: new Date(2022,12,23)}
    
  ];

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };
  return (
    <div>
      
      <NewExpense onAddExpense = {addExpenseHandler} />
        
      <Expense expenses = {expenses}></Expense>
        
    </div>
  );
};

export default App;
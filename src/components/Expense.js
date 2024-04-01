import Card from './Card'
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expense(props) {
    const [filterYear, setFilterYear] = useState('2020');
    
    const selectedYearFilter = (selectedYear) => {
        setFilterYear (selectedYear);
    };

    const filteredExpenses = props.expenses.filter (expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });


    return (
        <Card className='expenses'>
            <ExpenseFilter onSelectedFilter = {selectedYearFilter} selected = {filterYear}></ExpenseFilter>
            <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
            <ExpensesList expenses = {filteredExpenses}></ExpensesList>    
        </Card>
    );
}
/*
 {filteredExpenses.length === 0 ? (<p>No Expenses found.</p>) : (
                filteredExpenses.map(expense => (
                    <ExpenseItem 
                        key={expense.id}
                        title = {expense.title} 
                        amount = {expense.amount} 
                        date = {expense.date}>
                    </ExpenseItem>)))}
itu merupakan fungsi untuk melakukan conditional di dalam JSX code {condition ? (then) : (else)} ini merupakan ternary condition

self condition
Bisa juga diganti dengan
{condition1 && then}
{condition2 && then}

Bisa juga pake if else biasa, tp if else gabisa jadi JSX
*/


/*
Menggunakan mapping agar tidak hardcode sesuai jumlah awal. Hardcode seperti ini :
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}>
            </ExpenseItem>

dapat diganti dengan fungsi map array.map(x => return somth?) pada web ini contohnya
{props.expenses.map(expense => <ExpenseItem title = {expense.title} amount = {expense.amount} date = {expense.date}></ExpenseItem>)}
jangan lupa curly braces nya.
*/
export default Expense;
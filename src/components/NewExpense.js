import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const submitExpenseDataHandler = (NewExpenseData) => {
        const expenseData = {
            ...NewExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpenseData = {submitExpenseDataHandler}></ExpenseForm>
        </div>
    )
};

export default NewExpense;

//onSubmitExpenseData merupakan nama yang digunakan untuk memindahkan data dari child ke parent (namanya bebas) gabisa props soalnya props dari parent ke child
//Buat transfer data ada di lecture 58
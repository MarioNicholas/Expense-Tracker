import React, { useState } from "react";
import "./ExpenseForm.css";
//event emg udh ada dari javascriptnya, bisa langsung dipake, buat ambil valuenya pake event.target.value

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isAdding, setIsAdding] = useState(false)

    /* merged state syntax dipake buat state yang mirip2
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        //setUserInput ({...userInput, enteredTitle: event.target.value}); ->bisa buat digunakan di merged state

        //menggunakan latest state (saver way than above one), dipake kalo state depends ke state sebelumnya
        //setUserInput ((prevState) => {return {...prevState, enteredTitle}});
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //setUserInput ({...userInput, enteredAmount: event.target.value});
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //setUserInput ({...userInput, enteredDate: event.target.value});
    };

    const submitHandler = (event) => {
        //<form> pada HTML punya atribut khusus untuk submit, jgn lupa kasih type = 'submit' di buttonnya
        event.preventDefault(); //untuk mencegah page reload yg merupakan behavior onSubmit

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSubmitExpenseData(expenseData);
        //kosongkan input
        finishedAddingHandler();

    };

    const addingHandler = () => {
        setIsAdding(true);
    }

    const finishedAddingHandler = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setIsAdding(false);
    }

    //atribut value pada input berfungsi sebagai 2 way binding biar form ngehapus pas klik button
    return (
        <div>
            {!isAdding && <button onClick ={addingHandler} className="add-expense">Add New Expense</button>}
            {isAdding &&
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>

                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} ></input>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min='2019-01-01' max='2025-05-31' onChange={dateChangeHandler} value={enteredDate}></input>
                    </div>
                </div>
                <div className=" new-Expenses__action">
                    <button onClick = {finishedAddingHandler}>Cancel</button>
                    <button type="submit">Add Expenses</button>
                </div>
            </form>}
        </div>
    )
};

export default ExpenseForm;





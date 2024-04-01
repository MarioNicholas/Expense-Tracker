import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
//props menjadi parameter untuk mengassign data ke fungsi (seperti parameter)
function ExpenseItem(props) {

    //nama props.{} sesuai dengan nama yang digunakan di app.js

    /*
    Perintah untuk date dipindah ke file lain (splitting component)
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const year = props.date.getFullYear();
        <div className='expense-item'>
            <div className = 'expense-date'>
                <div>{month}</div>
                <div>{day}</div>
                <idiv>{year}</idiv>
            </div>
    */

    //Fungsi useState mereturn 2 hal (value yang diubah, dan nama fungsi, kita dapat mengeset nama masing-masing elemen dengan cara destructuring)
    //title adalah judulnya, setTitle adalah fungsi untuk ngubah

    //untuk click handler. (mengubah title ketika klik button change title)
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
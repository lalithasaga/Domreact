import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('updated!');
    console.log(title);
  };

  const changeExpenseAmount = () => {
    setAmount(100);
  };

  const deleteExpenseHandler = () => {
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.remove();
  };

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        <h2>{title}</h2>
        <div className='expense-item_price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeExpenseAmount}>Change Amount</button>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </div>
  );
};

export default ExpenseItem;

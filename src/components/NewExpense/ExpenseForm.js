import React, { useState, useEffect } from "react";

import "./ExpenseForm.css";

const currenyCaller = async () => {};

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    var key = "9569fda64ec6c325f26d8c88be919946";
    var base_url = "http://data.fixer.io/api/symbols";
    var alter =
      "https://v6.exchangerate-api.com/v6/fd87eb5d09b8d0795b90bc40/latest/USD";
    const currenyCaller = async () => {
      // let res = await fetch(`${base_url}+ "?access_key=" + ${key}`);
      let res = await fetch(alter);
      let ans = await res.json();
      let keys = Object.keys(ans.conversion_rates);
      // console.log(keys);
      setOptions([...keys]);
    };

    currenyCaller();
  }, []);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

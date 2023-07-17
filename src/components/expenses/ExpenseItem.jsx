import React from "react";
import Card from "../UI/card/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Button from "../UI/button/Button";
import { styled } from "styled-components";

const ExpenseItem = ({ date, title, amount, onDeleteExpense, id }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseItemDescription className="expense-item__description">
        <HeadTwoInExpenseItemDescription>{title}</HeadTwoInExpenseItemDescription>
        <ExpenseItemPrice className="expense-item__price">${amount}</ExpenseItemPrice>{" "}
      </ExpenseItemDescription>
      <Button
        style={{ marginLeft: "1rem" }}
        onClick={() => {
          onDeleteExpense(id);
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

const ExpenseItemDescription = styled.div`
  	display: flex;
	gap: 1rem;
	align-items: flex-end;
	justify-content: flex-start;
	flex: 1;
`;

const HeadTwoInExpenseItemDescription = styled.h2`
	color: #3a3a3a;
	font-size: 1rem;
	flex: 1;
	margin: 0 1rem;
	color: white;
`

const ExpenseItemPrice = styled.div`
	font-size: 1rem;
	font-weight: bold;
	color: white;
	background-color: #40005d;
	border: 1px solid white;
	padding: 0.5rem;
	border-radius: 12px;
`

export default ExpenseItem;

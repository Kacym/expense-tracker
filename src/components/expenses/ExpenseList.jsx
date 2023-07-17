import React from 'react'
import ExpenseItem from './ExpenseItem'
import { styled } from 'styled-components'

const ExpenseList = ({ expenses = [], onDeleteExpense }) => {
	// const content =
	// 	expenses.length === 0 ? (
	// 		<h1 className='expenses-list__fallback'>No Expenses</h1>
	// 	) : (
	// <ul className='expenses-list'>
	// 	{expenses.map((expense) => {
	// 		return (
	// 			<ExpenseItem
	// 				onDeleteExpense={onDeleteExpense}
	// 				date={expense.date}
	// 				title={expense.title}
	// 				id={expense.id}
	// 				amount={expense.amount}
	// 			/>
	// 		)
	// 	})}
	// </ul>
	// 	)
	// return content

	return (
		<div>
			{expenses.length === 0 && (
				<ExpenseListFallBack>No Expenses</ExpenseListFallBack>
			)}
			{expenses.length > 0 && (
				<StyledExpenseList className='expenses-list'>
					{expenses.map((expense) => {
						return (
							<ExpenseItem
								key={expense.id}
								onDeleteExpense={onDeleteExpense}
								date={expense.date}
								title={expense.title}
								id={expense.id}
								amount={expense.amount}
							/>
						)
					})}
				</StyledExpenseList>
			)}
		</div>
	)
}

const StyledExpenseList = styled.ul`
	list-style: none;
	padding: 0;
`

const ExpenseListFallBack = styled.h1`
	color: white;
	text-align: center;
`

export default ExpenseList

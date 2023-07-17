import React from 'react'
import { styled } from 'styled-components'

const ExpenseDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'long' })
	const day = props.date.toLocaleString('en-US', { day: '2-digit' })
	const year = props.date.getFullYear()
	return (
		<StyledExpenseDate>
			<ExpenseDateMonth>{month}</ExpenseDateMonth>
			<ExpenseDateYear>{year}</ExpenseDateYear>
			<ExpenseDateDay>{day}</ExpenseDateDay>
		</StyledExpenseDate>
	)
}

const StyledExpenseDate = styled.div`
	display: flex;
	flex-direction: column;
	width: 5.5rem;
	height: 5.5rem;
	border: 1px solid #ececec;
	background-color: #2a2a2a;
	color: white;
	border-radius: 12px;
	align-items: center;
	justify-content: center;
`

const ExpenseDateMonth = styled.div`
	font-size: 0.75rem;
	font-weight: bold;
`

const ExpenseDateYear = styled.div`
	font-size: 0.75rem;
`

const ExpenseDateDay = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`
export default ExpenseDate

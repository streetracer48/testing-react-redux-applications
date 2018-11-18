import React from 'react'
import ExpensesList from '../ExpenseList/'
import ExpenseListFilter from '../ExpenseListFilters/'
const ExpenseDashboard = () => {
  return (
    <div>
        <h1>ExpenseDashboard</h1>
        <ExpenseListFilter/>
        <ExpensesList/>
      
    </div>
  )
}
export default ExpenseDashboard

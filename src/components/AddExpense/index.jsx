import React from 'react'
import InputForm from '../InputForm'
import {connect} from 'react-redux'
import {addExpense} from '../../actions/expenses/'


const AddExpense = (props) => {
  return (
    <div>
      <h1>AddExpense</h1>
      <InputForm onSubmit={expense => {
        props.dispatch(addExpense(expense))
        console.log('expense data',expense);
           props.history.push('/');
      }
      }/>


    </div>
  )
}

export default connect() (AddExpense)

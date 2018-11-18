import React from 'react'
//import {removeExpense} from '../../../actions/expenses'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ExpenseListItem =({dispatch,description,amount, id, createdAt}) => (

    <div>
        <Link to={`edit/${id}`}><h3>{description}</h3></Link>
        <h3>{amount} - {createdAt}</h3>
      {/* /  <button onClick={()=>dispatch(removeExpense({id})) }>Remove</button> */}

    </div>
) 

export default connect() (ExpenseListItem)
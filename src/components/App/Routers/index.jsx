import React, { Component } from 'react'
import {Route, Switch ,Link} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import ExpenseDashboard from '../../ExpenseDashboard'
import AddExpense from '../../AddExpense'
import ExpenseEdit from '../../ExpenseEdit'
import Help from '../../Help'
import NotFound from '../../NotFound'
import Navbar from '../../Navbar'
import PlayGround from '../../playGround/Redux-ex'
 class AppRoutes extends Component {
    render() {
        return (
            <div>              
                <Navbar/>
                <Container className="main">
                <Switch>
                <Route exact path='/' component={ExpenseDashboard} exact={true} />
                <Route path='/create' component={AddExpense} />
                <Route path='/edit/:id' component={ExpenseEdit} />
                <Route path='/help' component={Help} />
                <Route path='/playground/redux' component={PlayGround} />
                 <Route  component={NotFound} />
                </Switch>  
                </Container>
            </div>
      
          );
    }
}

export default AppRoutes

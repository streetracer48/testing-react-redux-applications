import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import ConfigStore from '../src/store/configStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filter'
import getVisibleExpense from './selector/index'
import App from './components/App/';
import * as serviceWorker from './serviceWorker';


const store = ConfigStore();

//testing all actions working

store.dispatch(addExpense({description:'water Bill', amount :'4000'}))
store.dispatch(addExpense({description:'Gas Bill',createdAt:1000}))
store.dispatch(addExpense({description:'Rent Bill',amount:1005485}))
// store.dispatch(setTextFilter('water bill'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

const state = store.getState();

const visibleExpenses = getVisibleExpense(state.expenses, state.filters)


console.log(visibleExpenses)

const jsx = (
    <BrowserRouter> 
    <Provider store={store}>
     <App/>
    </Provider>
    </BrowserRouter>
   
);


ReactDOM.render(
jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react'
import {createStore} from  'redux'
const store = createStore((state = {count:45}, action) => {

    switch(action.type) {
       case 'INCREMENT':
       const incrementBy= typeof action.incrementBy === 'number'? action.incrementBy:1;
       return {
           count: state.count +1 
       };
       case 'DECREMENT':
       return {
           count: state.count -1
       };
       case 'RESET':
       return {
           count:45
       };
       default:
       return state;
    } 
});

const person = {
    name:'miraz',
    age:26,
    location:{
        city:'dhaka bangladesh',
        temp:92
    }
};

const {name, age} = person;
console.log('person', name)
console.log(`it's${person.location.temp}`);

//actions - than an object that gets sent to the store

//increment, decrement, reset
//walk, stop_walking, sit, work, stop_working
//I'd like to increment the count

const unsubscribess = store.subscribe(() => {
    // console.log(store.getState());
})

store.dispatch({
    type:'INCREMENT',
    incrementBy:5

})

unsubscribess();

store.dispatch({
    type:'DECREMENT'
})

store.dispatch({
    type:'RESET'
})
//I'd like reset the count to zero


const Reduxtest = () => (
  

    <h1>hello this is redux test</h1>    
    
  )

export default Reduxtest





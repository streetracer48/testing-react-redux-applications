import expensesReducer from '../expense'
import expenses from './expensedummy'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });


  test('should add an expense', () => {
    const expense = {
        id:'12',
        description:'dsafs',
        note :'sadfds',
        amount : 45,
        createdAt : 34534
    };
    const action = {
      type: 'ADD_EXPENSE',
      expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
  })
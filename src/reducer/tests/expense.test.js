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


  test('should be edit', () => {

    const amount = 4545

    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(amount)

  } 
  );

  
test('should not edit an expense if id not found', () => {
    const amount = 122000;
    const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: {
        amount
      }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });


  
test('should not remove expenses if id not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
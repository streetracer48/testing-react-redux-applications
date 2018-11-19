import { addExpense, editExpense, removeExpense } from '../expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});


test('Should be updated expense action object', () => {
   const action =editExpense('12345t',{note:'hello'});
   expect(action).toEqual({
     type:'EDIT_EXPENSE',
     id:'12345t',
     updates:{
       note:'hello'
     }
   });
});


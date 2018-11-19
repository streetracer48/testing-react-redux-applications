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

test('should setup  add expense actions object with provide value', () => {

  const expensesData = {
    description :'Rent',
    note : 'this is last month rent',
    amount: 23432,
    createdAt: 234324
  };
   const action = addExpense(expensesData);

   expect(action).toEqual({
     type:'ADD_EXPENSE',
     expense:{
      ...expensesData,
      id:expect.any(String)
     }
   })
})

test('should setup  add expense actions object with default value', () => {

  const expensesData = {
    description :'',
    note : '',
    amount:'',
    createdAt:'' 
  };
   const action = addExpense(expensesData);

   expect(action).toEqual({
     type:'ADD_EXPENSE',
     expense:{
      ...expensesData,
      id:expect.any(String)
     }
   })
})


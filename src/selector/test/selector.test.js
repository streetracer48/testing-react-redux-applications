import moment from 'moment'
import selectorExpense from '../index'
import expensesList from './expenseDummy'


test('should filter by text value', () => {
    
    const filters = {
         text:'c',
         sortBy:'date',
         startDate:undefined,
         endDate:undefined

    }

     const result = selectorExpense(expensesList, filters);
     expect(result).toEqual([expensesList[2], expensesList[0]])
});

test('should filter by start date ', () => {
    const filters = {
         text:'',
         sortBy:'',
         startDate:moment(0),
         endDate:undefined
    }

    const result = selectorExpense(expensesList, filters);

    expect(result).toEqual([expensesList[0], expensesList[2] ])
})


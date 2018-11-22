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
})
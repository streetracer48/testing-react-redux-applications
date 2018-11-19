import moment from 'moment'
import  filterReducer from '../filter/'

test('should setup default filter values', () => {
    
    const state = filterReducer(undefined, {type:'@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate:moment().startOf('month'),
        endDate: moment().endOf('month')
    })

})


test('should set sort by amount', () => {
     const state = filterReducer(undefined, {type:'SORT_BY_AMOUNT'});
     expect(state.sortBy).toBe('amount')
})


test('should set sort by date', () => {
    const state = filterReducer(undefined, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
})


test ('should set sort by text filter', () => {

    const  text = 'this is my filter'
    const action = {
         type:'SET_TEXT_FILTER',
         text
    }
 
    const state = filterReducer(undefined, action)

    expect(state.text).toBe(text)

})



test ('should set sort by start Date filter', () => {

    const   startDate = moment()
    const action = {
         type:'SET_START_DATE',
         startDate
    }
 
    const state = filterReducer(undefined, action)

    expect(state.startDate).toBe(startDate)

})


test ('should set sort by End Date filter', () => {

    const   endDate = moment()
    const action = {
         type:'SET_END_DATE',
         endDate
    }
 
    const state = filterReducer(undefined, action)

    expect(state.endDate).toBe(endDate)

})


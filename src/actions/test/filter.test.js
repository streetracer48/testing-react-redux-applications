import moment from 'moment'

import { setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate} from '../filter'

    test('should genarate setText filter action object with some text values', () => {
         
        const action = setTextFilter('sometext')
        expect(action).toEqual({
            type:'SET_TEXT_FILTER',
            text:'sometext'
        })
    })

    test('should genarte set start date action object', () => {
         const action = setStartDate(moment(0)) 
         expect(action).toEqual({
             type:'SET_START_DATE',
             startDate: moment(0)
         })
    })
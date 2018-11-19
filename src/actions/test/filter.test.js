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
        });
    });

    test('should genarate setText filter action object with default values', () => {
         const action = setTextFilter();

        expect(action).toEqual({
            type:'SET_TEXT_FILTER',
            text:''
        });
    });


    test('should genarte set start date action object', () => {
         const action = setStartDate(moment(0)) 
         expect(action).toEqual({
             type:'SET_START_DATE',
             startDate: moment(0)
         });
    });


    test('should genarate endDate action obejct', () => {
         const action = setEndDate(moment(0))

         expect(action).toEqual({
             type:'SET_END_DATE',
             endDate:moment(0)
         });
    });

test('should be genarate sort by amount action object', () => {
    
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT'
    });
});

test('should be genarate sort by date action object', () => {
     expect(sortByDate()).toEqual({
         type:'SORT_BY_DATE'
     })
})



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
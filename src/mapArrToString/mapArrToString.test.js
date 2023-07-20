const mapArrToString = require('./mapArrToString')

describe('mapArrToString', ()=>{
    test('correct value', ()=>{
        expect(mapArrToString([1,2,3])).toEqual(["1", "2", "3"])
    });
    test('hodge-podge', ()=>{
        expect(mapArrToString([1,2,3, null, undefined, 'string'])).toEqual(["1", "2", "3"])
    });
    test('empty array', ()=>{
        expect(mapArrToString([])).toEqual([])
    });
    test('negation', ()=>{
        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3,4])
    });
})//js сравнивает объекты по ссылке
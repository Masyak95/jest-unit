const validateValue = require('./validateValue')

describe('validateValue', ()=>{
    test('correct value', ()=>{
        expect(validateValue(50)).toBe(true)
    });
    test('less than the correct value', ()=>{
        expect(validateValue(-1)).toBe(false)
    });
    test('more than the correct value', ()=>{
        expect(validateValue(101)).toBe(false)
    });
    test('lower boundary value', ()=>{
        expect(validateValue(0)).toBe(true)
    });
    test('upper boundary value', ()=>{
        expect(validateValue(100)).toBe(true)
    });

})
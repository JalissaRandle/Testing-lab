const {
    returnTwo,
    greeting, 
    add
} = require ('./functions') 

test('test should run', () => expect (2).toBe(2))

describe ('returnTwo test', () => {
    test('returnTwo should return an int', () => {
    expect(returnTwo()).toEqual(2)
    })
})

describe ('greeting test', () => {
    test('greeting should return a string', () => {
        expect(greeting('James')).toEqual("Hello James.")
    })
    test('greeting should return a string', () => {
        expect(greeting('Jill')).toEqual("Hello Jill.")
    })
})

describe(' add test ', () => {
    test('add should return the sum of num 1 and num 2', () => {
        expect(add(1, 2)).toEqual(3)
    })
    test('add should return the sum of num 1 and num 2', () => {
        expect(add(5, 9)).toEqual(14)
    })
})
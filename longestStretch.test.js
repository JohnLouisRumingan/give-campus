const longestStretch = require ('./longestContinuousStretch')

test('Expects an array argument', () => {
    expect(longestStretch(1)).toBe(-1);
});

test('Expects an array argument', () => {
    expect(longestStretch("1")).toBe(-1);
});

test('When argument is [] return should be 0', () => {
    expect(longestStretch([])).toBe(0);
});

test('When argument is [1,7,7,3] return should be 2', () => {
    expect(longestStretch([1,7,7,3])).toBe(2);
});

test('When argument is [1,7,7,3,9,9,9,4,9] return should be 3', () => {
    expect(longestStretch([1,7,7,3,9,9,9,4,9])).toBe(3);
});

test('Function should accept array of strings', () => {
    expect(longestStretch([1,7,7,3,9,9,9,4,9])).toBe(3);
});

test('When argument is ["1", "7", "7","3"] return should be 2', () => {
    expect(longestStretch([1,7,7,3])).toBe(2);
});

test('Function should differentiate between positive and negative integers', () => {
    expect(longestStretch([1,-7,7,3])).toBe(1);
});

test('When argument is [1,7,7,3,9,-9,9,4,9] return should be 2', () => {
    expect(longestStretch([1,7,7,3,9,9,-9,4,9])).toBe(2);
});

/*
Test explanations:

Argument should be an array.
Argument can be an array with 0 elements.
Function should correctly return the examples given.
Function can return the correct integer if the array contains strings.
Function should recognize difference in positive and negative integers.
Function should also

*/ 
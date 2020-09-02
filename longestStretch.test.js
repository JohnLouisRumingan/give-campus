const longestStretch = require ('./longestStretch')

test('longestStretch expects an array argument', () => {
    expect(longestStretch(1)).toBe(-1);
});

test('longestStretch expects an array argument', () => {
    expect(longestStretch("1")).toBe(-1);
});

test('longestStretch should correctly return 0 if passed an empty array', () => {
    expect(longestStretch([])).toBe(0);
});

test('When longestStretch argument is [1,7,7,3] return should be 2', () => {
    expect(longestStretch([1,7,7,3])).toBe(2);
});

test('When longestStretch argument is [1,7,7,3,9,9,9,4,9] return should be 3', () => {
    expect(longestStretch([1,7,7,3,9,9,9,4,9])).toBe(3);
});

test('longestStretch should correctly parse an array of strings containing numbers and return the correct output', () => {
    expect(longestStretch(["1","7","7","3"])).toBe(2);
});

test('longestStretch should differentiate between positive and negative integers and recognize all unique numbers', () => {
    expect(longestStretch([1,-7,7,3])).toBe(1);
});

test('longestStretch should correctly return maximum even if multiple numbers have the same count', () => {
    expect(longestStretch([1,7,7,3,9,9,-9,4,9])).toBe(2);
});

test('longestStretch should correctly return 1 if all integers are unique', () => {
    expect(longestStretch(["1","7","-7 years","3"])).toBe(1);
});

test('Function should return -2 if any element of the array are NaN', () => {
    expect(longestStretch([1,-7,"They were 7",3])).toBe(-2);
});

/*
Test explanations:

Argument should be an array.
Argument can be an array with 0 elements.
Function should correctly return the examples given.
Function can return the correct integer if the array contains strings.
Function should recognize difference in positive and negative integers.
Function should recognize multiple unique integers, even if unique integers are strings.
Function should return -2 if any elements of the array are NaN. This is a different return from a non-array argument.


*/ 
const longestStretch = require ('./longestContinuousStretch')

test('Expects an array argument', () => {
    expect(longestStretch(1)).toBe(-1);
});

test('Expects an array argument', () => {
    expect(longestStretch("1")).toBe(-1);
});

test('When argument is [1,7,7,3] return should be 2', () => {
    expect(longestStretch([1,7,7,3])).toBe(2);
});

test('When argument is [1,7,7,3,9,9,9,4,9] return should be 3', () => {
    expect(longestStretch([1,7,7,3,9,9,9,4,9])).toBe(3);
});

test('When argument is [] return should be 0', () => {
    expect(longestStretch([])).toBe(0);
});


/*
Test explanations:


*/ 
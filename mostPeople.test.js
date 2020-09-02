const mostPeople = require ('./mostPeople')


test('mostPeople expects an array argument', () => {
    expect(mostPeople(1)).toBe(-1);
});

test('mostPeople expects an array argument', () => {
    expect(mostPeople("a")).toBe(-1);
});


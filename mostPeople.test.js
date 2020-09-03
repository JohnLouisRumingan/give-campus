const {mostPeople, lifetime } = require ('./mostPeople')
const testArray = [[1910, 1950], [1900, 1951], [1945, 2000]];


test('mostPeople expects an array argument', () => {
    expect(mostPeople(1)).toStrictEqual([]);
    expect(mostPeople("a")).toStrictEqual([]);
    expect(mostPeople(2.03)).toStrictEqual([]);
    expect(mostPeople({obj: 2})).toStrictEqual([]);
});

test('mostPeople returns an empty array if argument is an array with zero elements', () => {
    expect(mostPeople([])).toStrictEqual([]);
});

test('when lifetime takes in an argument of two integers it returns an array of those integers', () => {
    expect(lifetime(1900, 1905)).toStrictEqual([1900, 1901, 1902, 1903, 1904, 1905]);
})

test('lifetime can take in negative numbers for BCE and mixed numbers for BCE and CE', () => {
    expect(lifetime(-7, -2)).toStrictEqual([-7, -6, -5, -4, -3, -2]);
    expect(lifetime(-3, 2)).toStrictEqual([-3, -2, -1, 0, 1, 2]);
})

test('when mostPeople takes in argument [[1910, 1950], [1900, 1951], [1945, 2000]] it returns [1945, 1946, 1947, 1948, 1949, 1950]', () => {
    expect(mostPeople(testArray)).toStrictEqual([1945, 1946, 1947, 1948, 1949, 1950]);
})

test('mostPeople can take in negative years for BCE', () => {
    expect(mostPeople([[-7, -3], [-20, -5], [-4, -2]])).toStrictEqual([-7, -6, -5, -4, -3])
})

test('mostPeople can take in mixed numbers for BCE and CE with the assumption that a year 0 exists', () => {
    expect(mostPeople([[-5, 2], [-3, 5], [-20, 10]])).toStrictEqual([-3, -2, -1, 0, 1, 2])
})

test('mostPeople can take arguments of multiple births and deaths in the same year', () => {
    expect(mostPeople([[2000, 2010], [2000, 2010], [2000, 2010], [1999, 2011]])).toStrictEqual([2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010])
}) 

/*
Test explanations:
I can use toBe(integer) to return integer values as in longestStretch. However, since the expectation from this function is to return
an array, returning other data types may cause bugs in other functions. Therefore, the decision was made to change the outputs of 
incorrect datatypes from an integer to a blank array.
Since the expected output is an array, expect().toBe has been changed to expect().toStrictEqual due to checking array 
sparseness and object equality. Object equality is not being checked for, therefore .toBe is not necessarily needed.
I also want a full comparison of arrays and not just if certain values exist, so I am not using .toContain or .toContainEqual

Function should consider other data types and empty arrays.
Delegation to helper function should correctly create an array of integers.
Function should correctly evaluate an array of multiple people born and died on the same year.

An assumption is made that there is a year 0. 
*/
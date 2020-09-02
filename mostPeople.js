
function mostPeople(array){

    const allYears = {};
    const mostAlive = [];

    if(!Array.isArray(array)) return mostAlive;
    if(array.length <= 0 ) return mostAlive;

    for(let person of array){

        const birthYear = person[0];
        const deathYear = person[1];
        const lifespan = lifetime(birthYear, deathYear);

        for(let i=0; i<lifespan.length; i++){
            const year = lifespan[i];
            allYears[year]? allYears[year] ++ : allYears[year] = 1;
        }
    }

    const highestPop = allYears[Object.keys(allYears).reduce((a,b) => allYears[a] > allYears[b]? a : b)];

    return Object.keys(allYears).filter(pop => allYears[pop] === highestPop).map( year => parseInt(year, 10)).sort((a,b) => a-b)
}

function lifetime(birth, death, step = 1) {
    const len = Math.floor((death - birth) / step) + 1;
    return Array(len).fill().map((_, index) => birth + (index * step))
}


module.exports = {
    mostPeople, 
    lifetime 
}

/*
This algorithm runs on O(n) time with O(n) space.
mostPeople takes in an argument of an array of arrays.
Expected input is that each array of array contains elements that are integers. 
Assumptions that these may be strings of numbers are included.
Similar to longestStretch, if the argument passed in is not an array, it immediately returns a -1.

I want to use a hash table here to create a range of keys that correspond to years where someone is alive and values equal to
the number of people alive during that year.
Ideally, it would look like: years = {2000: 1, 2001: 4, 2003: 2, 2005: 5}.
An assumption is made here: The person is alive at the start of the year and dies at the end of the year, so they are alive at any 
point during the year.
So first, I must take each year and create a range of numbers, inclusive, for them. 
This is accomplished by a helper function called lifetime.
This is essentially a spread operator starting from the birth year until death year with an optional step argument of 1.
Lifespan therefore is an array of years containing one person's lifespan.
A for loop then adds these years to the allYears hash and records the number of people alive during those years.

Highest pop uses an Object enumerable through all years (keys/properties) of allYears and returns the key of the value of the highest population.
allYears[key] then assigns the value.
highestYears takes the properties of an enumerable such as allYears and creates an array. We only want an array of the years with the highest 
population, so we filter this array with highestPop.

Note that since this is taking the keys/properties of a hashmap in JavaScript, these will be strings. 
One of my tests actually caught that the return output was an array of strings and not integers.
We will have to turn these strings into integers so we will use a map method.
Careful: parseInt requires two arguments every time it is invoked, and simply using .map(parseInt) returns unexpected results!
To be careful, we are using a one-line arrow notation to keep it succinct and pass the argument of radix 10 to parseInt.
Because Objects in JavaScript are not guaranteed to have an order, we lastly use .sort() to order the years sequentially.
At this point, I remove the declaration of highestYears since this variable is the one to be returned.

I have not done strict checking of strings as I have in the longest stretch algorithm and will instead rely on type coersion in JavaScript

*/
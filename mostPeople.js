
function mostPeople(array){

    years = {};

    if(!Array.isArray(array)) return -1;

    for(let person of array){

        const birthYear = person[0];
        const deathYear = person[1];
        const lifespan = lifetime(birthYear, deathYear);
    }

}

function lifetime(start, end, step = 1) {
    const len = Math.floor((end - start) / step) + 1
    return Array(len).fill().map((_, idx) => start + (idx * step))
}


module.exports = mostPeople;

/*
mostPeople takes in an argument of an array of arrays.
Expected input is that each array of array contains elements that are integers. 
Assumptions that these may be strings of numbers are included.

I want to use a hash table here to create a range of numbers that correspond to years where someone is alive.
Ideally, it would look like: years = {2000: 1, 2001: 4, 2003: 2, 2005: 5}.
So first, I must 

*/
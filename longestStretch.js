function longestStretch(array){

    if(!Array.isArray(array)) return -1;

    let maxCounter = 0;
    let currentCounter = 0;
    let currentNumber;

    if(array.length <= 0 ) return maxCounter;

    for(let i=0; i<array.length; i++){

        const number = parseInt(array[i], 10);

        if( Number.isNaN(number) ) return -2;

        if(number != currentNumber){
            currentCounter = 1;
            currentNumber = number;
        }
        else if(number === currentNumber){
            currentCounter++;
        }

        if(currentCounter > maxCounter){
            maxCounter = currentCounter;
        }
    }

    return maxCounter;
}


/* 
This function assumes that we are given an array, but a linked list is a similar format and 
would just need extra lines to account for a linked list class with nodes.

Function only needs one pass and runs on O(n) time with O(1) constant space. 
I start the function with maxCounter, currentCounter, and currentNumber variables. maxCounter is assigned an integer of 0 
since this variable will be used to count the current highest running total. currentNumber will be current integer in the 
loop while currentCounter will be the number of occurrences of currentNumber.
If currentCounter becomes higher than maxCounter at any time, maxCounter is updated to currentCounter.
I am making an assumption that the array only contains integer numbers and that none of them
would cause an overflow error. If there was the possibility of that, I would assume that the array dataset would have 
been sanitized at an earlier point by a different function and the offending elements removed before being passed 
into this one. If the array consists of strings, we will need to convert each string element first before being considered.

Next line has an if/then statement for the edge case of a 0-length empty array, in which case it will return 0.
Using array.length <= 0 also covers edge cases where an object that is an instance of an Array can have a property called 
length that has a negative integer value. This is why (array instanceOf Array) is not used for comparison, but there may be an 
edge case I cannot think of currently. This edge case should be covered by Array.isArray, but length <= 0 covers 0 as well.

The for loop runs through the array just once. 
The function expects an integers but an array of strings that are numbers may also be entered. If this is the case,
the number parses a string to an integer datatype.
If a NaN is included anywhere in the array of elements, the function returns a -2. 
This is a different return from a non-array argument so it would be easier to find bugs and expected data types.
This function allows strings that would be parsed as integer such as "40 years" in the use case of parsing through data that might
contain alphanumeric characters but are formatted with the integer portion in front. This works with the other test case of "They were 7" to 
flag potentially unsanitized data if this is the case.

However, I think the main case of sanitizing data should be handled by a different function to prevent tight coupling or side effects in this one.
I believe that tests that cover integer, array, and NaN are sufficient here.

*/


module.exports = longestStretch;
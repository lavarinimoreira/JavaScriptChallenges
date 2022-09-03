// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

function avg(arr){
    // First checking if all the elements of the array are numbers.
    const allElementsAreNumbers = arr.every(function(element) {return typeof element === 'number';});
    if(!allElementsAreNumbers)
        return NaN;

    let sum = 0;
    for(let number of arr){
        sum += number;
    }
    return sum / (arr.length);
}
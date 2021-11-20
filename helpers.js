// type-checking the query string

function typeCheck(request) {
    const query = request.query;
    const queryArr = query.query.split(',')

    const numArr = queryArr.map(element => Number(element));

    for (let num of numArr) {
        if (isNaN(num)) {
            return new Error(`One of your values is not a number.`);
        }
    }

    return numArr;
}


function mean(array) {
    if (array.length == 0) {
        return 0;
    }

    const n = array.reduce((total, val) => {
        return total + val;
    });

    const mean = n / array.length;

    return mean; 
}


function median(array) {
    array.sort((a, b) => a - b);

    if (array.length % 2 === 0) {
        const i1 = array.length / 2;
        const i2 = (array.length / 2) - 1;

        return (array[i1] + array[i2]) / 2;

    } else {
        const i = Math.floor(array.length / 2);
        return array[i];
    }
}


function mode(array) {
    const numFreq = {};
    let currNum;
    
    for (let i = 0; i < array.length; i++) {
        currNum = array[i];
        numFreq[currNum] = 0;
        
        array.forEach(num => {
            if (num === currNum) {
                numFreq[currNum] += 1;
            }
        });
    }
    
    let highestValue = 0;
    let mode = -Infinity;
    for (let num in numFreq) {
        if (numFreq[num] > highestValue) {
            highestValue = numFreq[num];
            mode = Number(num);
        }
    }

    return mode;
}


module.exports = {
    typeCheck,
    mean,
    median,
    mode
}
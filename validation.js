// validation check number

function multiply (num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

const mult = multiply('7', 'seven');
// console.log(mult);




//validation check string

function fullName (first , second) {
    if (typeof first !== 'string') {
        return 'first name should be a string'
    }
    else if (typeof second !== 'string') {
        return 'second name should be a string'
    }

    const full = first + ' ' + second;
    return full;
}

const name = fullName ('shamim', 9)
// console.log(name);




// validation check object 

function productPrice (products) {
    if(typeof products !== 'object') {
        return 'You should provide an object'
    }
    const price = products.price;
    return price ;
}

// const price = productPrice({name : 'samsung', price : '22000', color: 'black'})
const price = productPrice(5)
// console.log(price);



// validation check array

function isArray (numbers) {
    if(Array.isArray(numbers) === false) {
        return 'You should provide an array'
    }
    const third = numbers[2];
    return third;
}

// const num = isArray([23, 32, 623, 34, 63]);
const num = isArray(234);
console.log(num)
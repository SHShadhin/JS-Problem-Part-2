function add (num1, num2) {
    const sum = num1 + num2
    return sum;
}

function substract (num1, num2) {
    const sum = num1 - num2
    return sum;
}

function multiply (num1, num2) {
    const sum = num1 * num2
    return sum;
}

function devide (num1, num2) {
    const sum = num1 / num2
    return sum;
}


function calculator (a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'substract') {
        const result = substract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'devide') {
        const result = devide(a, b);
        return result;
    }
    else {
        return " Only 'add', 'substract', 'multiply', 'devide' allowed."
    }
}

const result = calculator(5, 7, 'add')
console.log(result);
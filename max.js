// get max number

let disha = 68;
let mahi = 59;

if(disha > mahi) {
    console.log('Disha will get the icecream')
}
else {
    console.log('Mahi will get the moneybag')
}




// get max number 

function getMax (num1, num2) {
    if(num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax (67, 35);
const max2 = getMax (55, 88);
const max3 = getMax (max1 , max2)
console.log(max3);




// get max 3

let jim = 45;
let kim = 29;
let tim = 71;

if (jim > kim && jim > tim) {
    console.log('Jim is the king')
}
else if (kim > jim && kim > tim) {
    console.log('Kim is the king')
}
else {
    console.log('Tim is is ultimate king')
}




// get max number 


function maxNum (num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2
    }
    else {
        return num3
    }
}

const maximum = maxNum (35, 13, 46) ;
console.log(maximum);



// get max number 

const max = Math.max(345,64, 235, 773, 999, 564);
console.log(max);
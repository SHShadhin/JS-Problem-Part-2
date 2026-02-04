// upto 100 --> 100
// 101 to 200 --> 90 discount
// 201 to 300 ---> 70 

function discount (quantity) {
    if(quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    }
    else {
        const total = quantity * 70;
        return total;
    }
}

const priceWithDiscount = discount (300);
// console.log(priceWithDiscount);




/**
 * first100 --> 100 
 * 101to200 --> 90
 * 201to300 --> 70
 * */ 


function layerDiscount (quantity) {

    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100) {
        const total = 100 * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotalPrice = remainingQuantity * second100Price;
        const total = first100Total + remainingTotalPrice;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotalPrice = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingTotalPrice;
        return total;
    }
}

const discountPrice = layerDiscount (150)
console.log(discountPrice);
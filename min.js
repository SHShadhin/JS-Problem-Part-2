// array theke minimum price ber kora

const prices = [15000, 18000, 12000, 20000, 33000] 

function minPrice (prices) {
    let min = prices[0];
    for (const price of prices) {
        if(price < min) {
            min = price;
        }
    }
    return min;
}

const minimum = minPrice(prices);
console.log('Minimum price is :', minimum);





// object theke cheapest price ber kora 

let mobiles = [
    {phone : 'Samsung' , price : 49900, camera : '64pm', color : 'black'},
    {phone : 'Sony' , price : 34900, camera : '64pm', color : 'black'},
    {phone : 'iPhone' , price : 99900, camera : '64pm', color : 'black'},
    {phone : 'Oppo' , price : 19900, camera : '64pm', color : 'black'},
]

function cheapestMobile (mobiles) {
        let cheap = mobiles[0];
    for (const mobile of mobiles) {
        if (mobile.price < cheap.price) {
            cheap = mobile
        }
    }
    return cheap;
}

const cheapest = cheapestMobile (mobiles);
console.log('The cheapest mobile is :', cheapest);
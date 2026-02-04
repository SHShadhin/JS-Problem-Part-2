let height = [35, 56, 63, 98, 32, 68, 77, 88];

function tallestNum (numbers) {
    let max = numbers[0]
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const maximum = tallestNum (height);
console.log('The max number is :' , maximum);
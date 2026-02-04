function woodQuantity (bedQuantity, tableQuantity, chairQuantity) {

    const perBedWood = 15;
    const perTableWood = 7;
    const perChairWood = 3;

    const totalBedWood = perBedWood * bedQuantity;
    const totalTableWood = perTableWood * tableQuantity;
    const totalChairWood = perChairWood * chairQuantity;

    const totalWood = totalBedWood + totalTableWood + totalChairWood;

    return totalWood;
}

const result = woodQuantity(2, 3, 3);
console.log('Total wood quantity is :', result);
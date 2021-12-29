const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// let totalBatteries = batteryBatches.reduce(function(accumulator, current){
//     return accumulator + current;
// });

// console.log(totalBatteries); 


const totalBatteries = batteryBatches.reduce(function(accumulator, element){
    return accumulator + element
});

console.log(totalBatteries); 
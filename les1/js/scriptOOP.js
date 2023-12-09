"use strict";

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const solder = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log("Hello");
//     }
// };
// const john = Object.create(solder);

// const john = {
//     health: 100,
// };

// john.__proto__ = solder;

// Object.setPrototypeOf(john, solder);
// console.log(john.armor);
// john.sayHello();
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let area_o = 0;
//     for(let i = 0; i < shoppingMallData.shops.length; i++){
//         let temp = shoppingMallData.shops[i];
//         let area = temp.length * temp.width;
//         area_o += area;
//     }
//     let value_o = area_o * shoppingMallData.height;
//     let cost = value_o*shoppingMallData.moneyPer1m3;
//     if(cost <= shoppingMallData.budget){
//         return "Бюджета достаточно";
//     } else {
//         return "Бюджета недостаточно";
//     }
// }

// console.log(isBudgetEnough(shoppingMallData));

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];
//     for(let i = 0;i<arr.length;i++){
//         if(i < 3){
//             a.push(arr[i]);
//         } else if(i < 6){
//             b.push(arr[i]);
//         } else if(i < 9){
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? "-": rest.join(", ")}`];
// }
// console.log(sortStudentsByGroups(students));

let number = 5; debugger

function logNumber(){
    let number = 4; debugger
    console.log(number);
}

number = 6;

logNumber(); debugger
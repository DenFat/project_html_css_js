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
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let area_o = 0;
    for(let i = 0; i < shoppingMallData.shops.length; i++){
        let temp = shoppingMallData.shops[i];
        let area = temp.length * temp.width;
        console.log(`Площадь магазина = ${area}`);
        area_o += area;
    }
    console.log(`Общая площадь магазинов = ${area_o}`);
    console.log(``)
    
}

isBudgetEnough(shoppingMallData);


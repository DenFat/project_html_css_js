// "use strict";

// if  (1)  {
//     console.log("Ok!");
// } else {
//     console.log("Error!");
// }

// const num = 50;
// if  (num < 49) {
//     console.log("Error!");
// } else if (num > 100) {
//     console.log("Много");
// } else {
//     console.log("Ok!");
// }

// (num === 50) ? console.log("Ok!") : console.log("Error!");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//         break;
//     case 50:
//         console.log("В точку!");
//         break;
//     default:
//         console.log("Не в этот раз");
//         break;
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const naggets = 2;

// console.log(hamburger === 3 && cola === 2 || fries === 3 && naggets);

// console.log(hamburger === 3 && cola === 2);

// if (hamburger || cola || fries) {
// 	console.log("Все сыты");
// } else {
// 	console.log("Мы уходим");
// }

// console.log(0 && 1);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(1 && "1a");


// let johnReport, alexReport, samReport, mariaReport = "done";

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(!1 && 2 || !3);
// console.log(25 || null && !3);
// console.log(NaN || null || !3 || undefined || 5);
// console.log (NaN || null && !3 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log("Done!");
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log("Done!");
// }

// "use strict";

// let num = 50;

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num)
// //     num++;
// // }
// // while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 3; i++) {
//     for (let j = 1; j < 10; j++){
//         console.log(`Цикл ${i} иттерация ${j}`);
//     }
// }

// let result = "";
// const height = 7;

// for (let i = 1; i < height; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += "\n";
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for (let i = 2; i < 11; i++){
//     if (i%2 == 0){
//         console.log(i);
//     }
// }
// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// const arrayOfNumbers = [];
// let num = 0;
// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[num] = i;
//     num++;
// }
// console.log(arrayOfNumbers);

for (let i = 20; i > 9; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}
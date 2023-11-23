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

// for (let i = 20; i > 9; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i in arr) {
//     result[i] = arr[i];
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i in data) {
//     if (typeof(data[i]) == "string") {
//         data[i] = data[i] + " - done"
//     } else {
//         data[i] = data[i] * 2
//     }  
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for( let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// const lines = 5;
// let result = '';
// for (let i = 0; i <= lines; i++){
//     for (let j = 0; j <= lines - i; j++){
//         result +=" ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++){
//         result +="*"
//     }
//     result += "\n";
// }
// console.log(result);

// function  showFirstMassage(text) {
//     console.log(text);
//     let num = 20;
 

// }

// showFirstMassage("Hello");
// console.log(num);

// function calc(a ,b) {
//     return a + b;
// }
// console.log(calc(2,8))

// const logger = function() {
//     console.log("Hello")
// };

// logger()


// const calc = (a , b) => a + b;

// const usdCurr = 28;
// const eurCurr = 32;
// const discont = 0.9;

// function convert(amounth, curr) {
//     return curr * amounth;
// }
// function promotion(result) {
//     console.log(result * discont)
// }
// x
// promotion(convert(500, usdCurr));

// function doNothing() {};
// console.log(doNothing() === undefined);

// function sayHello(name) {
// 	return `Привет, ${name}!`;
// }

// sayHello("Denis");

// function returnNeighboringNumbers(number) {
// 	return [number - 1, number, number + 1];
// }

// returnNeighboringNumbers(4);

// function getMathResult(base, repeat) {
// 	let rezult = "";
// 	if(typeof(repeat) == "string" || repeat <= 0){
// 		rezult = base;
// 		return rezult;
// 	}
// 	for (let i = 1; i <= repeat; i++){
// 		if(i === repeat){
// 			rezult += (base * i);
// 		} else {
// 			rezult += ((base * i) + "---");
// 		}
// 	}
// 	return rezult;
// }
// console.log(getMathResult(3,-3));

function calculateVolumeAndArea(num) {
	while (num != parseInt(num) || num <= 0 || typeof(num) === "string") {
		return console.log("При вычислении произошла ошибка");
	}
	let area = 6 * (num * num);
	let volume = num * num * num;
	return console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
}
calculateVolumeAndArea(15.5);

let num = "15";
console.log(typeof(num));

function getCoupeNumber(num) {
	if (num != parseInt(num) || num < 0) {
		return console.log("Ошибка. Проверьте правильность введенного номера места");
	}
	if (num === 0 || num > 36) {
		return console.log("Таких мест в вагоне не существует");
	}
	let coupe = parseInt(num / 4);
	return console.log(coupe+1);
}
getCoupeNumber("Hello");

function getTimeFromMinutes(num) {
	if(num != parseInt(num) || num < 0 || typeof(num) === "string") {
		return console.log("Ошибка, проверьте данные");
	}
	let time = "";
	let timeH = "";
	let timeM = "";
	let hours = parseInt(num / 60);
	let minutes = num - (60 * hours);
	if(hours === 1){
		timeH = `Это ${hours} час`;
	} else if(hours >= 2 && hours <= 4) {
		timeH = `Это ${hours} часa`;
	} else {
		timeH = `Это ${hours} часов`;
	}
	if(minutes === 1) {
		timeM =  ` и ${minutes} минутa`;
	} else if(minutes >=2 && minutes <=4) {
		timeM =  ` и ${minutes} минуты`;
	} else {
		timeM =  ` и ${minutes} минут`;
	}
	return console.log(timeH + timeM);
}
getTimeFromMinutes(-150);

function findMaxNumber(num1, num2, num3, num4) {
	if (typeof(num1) != "number" || typeof(num2) != "number" || typeof(num3) != "number" || typeof(num4) != "number") {
		return 0;
	}
	return console.log(Math.max(num1, num2, num3, num4));
}
findMaxNumber(1, 2, 3, 5.9);
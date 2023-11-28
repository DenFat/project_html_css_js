"use strict";

// function first() {
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }
// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// learnJS("JavaScript", function(){
//     console.log("Я прошел этот урок");
// });

// const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     }
// };

// // console.log(options.name);

// // delete options.name;
// // console.log(options);

// console.log(Object.keys(options).length);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);

//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// const humanMan = {
//     name: "Имя",
//     age: "Возраст",
//     sex: "Пол",
//     body: {
//         color: "Цвет",
//         muscles: "Мышцы",
//         flaws: "Изъяны"
//     },
//     makeTest : function() {
//         console.log("Test");
//     }
// };
// humanMan.makeTest();

// const {color, muscles, flaws} = humanMan.body;
// console.log(color);

// console.log(Object.keys(humanMan).length);
// for (let key in humanMan) {
//     if (typeof(humanMan[key]) === "object") {
//         for (let i in humanMan[key]) {
//             console.log(`Ключ ${i} имеет свойство ${humanMan[key][i]}`);
//         }
//     } else {
//         console.log(`Ключ ${key} имеет свойство ${humanMan[key]}`);
//     }
// }

// const arr = [1, 12, 23, 36, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }
// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));


// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// // console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;
// // console.log(add);
// // console.log(clone);

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// console.log(oldArray);
// newArray[1] = "f";
// console.log(newArray);

// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "livejournal", "blogger"],
//       internet = [...video, ...blogs, "vk", "facebook"];
// console.log(internet);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 6];

// log(...num);

// const array = ["a", "b"];
// const newArray = [...array];
// console.log(array);
// newArray[0] = "f";
// console.log(newArray);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     let str = "";
//     const {programmingLangs} = personalPlanPeter.skills;
//     for(let key in programmingLangs){
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//     }
//     return str;
// }
// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = "Семья состоит из:";
    if(arr.length === 0){
        return "Семья пуста";
    }
    for(let key in arr){
        str += ` ${arr[key]}`;
    }
    return str;
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let key in arr){
        console.log(favoriteCities[key].toLowerCase());
    }
}
standardizeStrings(favoriteCities);
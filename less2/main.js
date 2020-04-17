/******************1************ */
let arrNum = [1, 2, 3, 4, 5];
let arrStr = ["a", "b", "c", "d", "f"];
let arrMix = [1, "hi", 12, true, 11, false];
console.log("num", arrNum);
document.write("1) " + arrNum + "<br>");
document.write("2) " + arrStr + "<br>");
document.write("3) " + arrMix + "<br>");
console.log("str", arrStr);
console.log("mix", arrMix);
/****************************** */
const arr1 = [];
arr1[0] = 1;
arr1[1] = 11;
arr1[2] = 110;
document.write("4) " + arr1 + "<br>");
console.log("arr1", arr1);
/******************2************ */
for (let i = 1; i <= 10; i++) {
  document.write(`<div>5.${i}) Hello World</div>`);
}
/****************************** */
let i = 1;
while (i <= 10) {
  document.write(`<h1>6.${i}) hello</h1>`);
  i++;
}
/****************************** */
let arr2 = [10, 12, 30, 04, 75, 6, 17, 8, 9, 10];
for (let i = 0; i < arr2.length; i++) {
  document.write(`<p>7.${i + 1}) ${arr2[i]}</p>`);
}
/****************************** */
let arr3 = [
  "HTML",
  "CSS",
  "jS",
  "React",
  "Less",
  "SASS",
  "Angular",
  "Java",
  "C++",
  "Vue.js",
];
document.write("<br>", "8)");
for (let value of arr3) {
  document.write(` ${value}`);
  console.log(value);
}
/*******************************/
let arr4 = [
  "Сьогодні",
  16,
  "квітня",
  2020,
  "погода",
  "на",
  "дворі",
  false,
  "сидіти дома",
  true,
];

document.write("<br>", "9)");
/****************************** */
for (value of arr4) {
  document.write(`${value} `);
  console.log(value);
}

document.write("<br>", "10)");
/****************************** */
let arr5 = [
  "Сьогодні",
  16,
  false,
  2020,
  true,
  "на",
  "дворі",
  false,
  "сидіти дома",
  true,
];
for (let value of arr5) {
  if (typeof value == "boolean") {
    document.write(`${value} `);
    console.log("15", value);
  }
}

document.write("<br>", "11)");
/****************************** */
for (let value of arr5) {
  if (typeof value == "number") {
    document.write(`${value} `);
    console.log("15", value);
  }
}
/****************************** */

document.write("<br>", "12)");
for (let value of arr5) {
  if (typeof value == "string") {
    document.write(`${value} `);
    console.log("15", value);
  }
}
/****************************** */

document.write("<br>", "13)");
let arr6 = [];
arr6[0] = true;
arr6[1] = 12;
arr6[2] = "Hello";
arr6[3] = false;
arr6[4] = null;
arr6[5] = "hi";
arr6[6] = undefined;
arr6[7] = "NDA";
arr6[8] = 18;
arr6[9] = 99;
for (let value of arr6) {
  document.write(`${value} `);
  console.log(value);
}
/****************************** */

document.write("<br>", "13)");
for (let i = 1; i <= 10; i++) {
  document.write(`${i} `);
  console.log(i);
}
/****************************** */

document.write("<br>", "14)");
for (let i = 1; i <= 100; i++) {
  document.write(`${i} `);
  console.log(i);
}
/****************************** */

document.write("<br>", "15)");
for (let i = 1; i <= 100; i += 2) {
  document.write(`${i} `);
  console.log(i);
}
/****************************** */

document.write("<br>", "16)");
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 && i != 0) {
    document.write(`${i} `);
    console.log(i);
  }
}
/****************************** */

document.write("<br>", "17)");
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0 && i != 0) {
    document.write(`${i} `);
    console.log(i);
  }
}
/****************************** */
for (let i = 0; i < 2; i++) {
  for (let j = 0; j <= 60; j++) {
    console.log(`${i}:${j}`);
  }
}
/****************************** */
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 20; j++) {
    for (let k = 0; k <= 60; k++) console.log(`${i}:${j}:${k}`);
  }
}
/******************2(Додатково)************ */

document.write("<br>", "18)");

let string = "";
let arr7 = ["a", "b", "c"];
for (let i = 0; i < arr7.length; i++) {
  string += arr7[i];
}
document.write(string);
console.log(string);
/****************************** */

document.write("<br>", "19)");
let j = 0;
let string1 = "";
while (j < arr7.length) {
  string1 += arr7[j];

  j++;
}
console.log(string1);
document.write(string1);
/****************************** */

document.write("<br>", "20)");
let string2 = "";
for (let sting of arr7) {
  string2 += sting;
}
document.write(string2);
console.log(string2);

/******************3************ */

document.write("<br>", "21)");
let arr8 = ["a", "b", "c"];
let arrForPush = [];
for (let i = 1; i <= 3; i++) {
  arr8.push(i);
}
document.write(arr8);
console.log(arr8);
/****************************** */

document.write("<br>", "22)");
let arr9 = [1, 2, 3];
let arrReverse = arr9.reverse();
document.write(arrReverse);
console.log(arrReverse);
/*******************************/

document.write("<br>", "23)");
let arr10 = [1, 2, 3];
let arr11 = [4, 5, 6];
let arr12 = [...arr10, ...arr11];
arr10.push(4, 5, 6);
let arr13 = [...arr11, ...arr10];
console.log(arr10);
document.write(arr10);
console.log(arr12);
console.log(arr13);
/*******************************/
document.write("<br>", "24)");
let arr10Clon = [1, 2, 3];
arr10Clon.unshift(4, 5, 6);
console.log(arr10Clon);
document.write(arr10Clon);
/*******************************/

document.write("<br>", "25)");
let arr14 = ["js", "css", "jq"];
let arr14Shift = arr14.shift();
console.log(arr14Shift);
document.write(arr14Shift);
/*******************************/

document.write("<br>", "26)");
let arr14Pop = arr14.pop();
console.log(arr14Pop);
document.write(arr14Pop);
/*******************************/

document.write("<br>", "27)");
let arr15 = [1, 2, 3, 4, 5];
let arr15Slice = arr15.slice(3);
console.log(arr15Slice);
document.write(arr15Slice);

/*******************************/

document.write("<br>", "28)");
let arr15SliceFront = arr15.slice(0, 2);
console.log(arr15SliceFront);
document.write(arr15SliceFront);

/*******************************/

document.write("<br>", "29)");
let arr16 = [1, 2, 3, 4, 5];
let arr16Remove = arr16.splice(1, 2);
console.log(arr16);
document.write(arr16);
/*******************************/

document.write("<br>", "30)");
let arr17 = [1, 2, 3, 4, 5];
let arr17Remove = arr17.splice(3, 0, "a", "b", "c");
console.log(arr17);
document.write(arr17);
/*******************************/

document.write("<br>", "31)");
let arr18 = [1, 2, 3, 4, 5];
let arr18Remove = arr18.splice(3, 0, "a", "b", "c");
console.log(arr18);
document.write(arr18);
/*******************************/

document.write("<br>", "31)");
let arr19 = [1, 2, 3, 4, 5];
let arr19Remove = arr19.splice(1, 0, "a", "b");
arr19.splice(6, 0, "c");
arr19.splice(arr19.length, 0, "e");
console.log(arr19);
document.write(arr19);
/*******************************/

document.write("<br>", "32)");
let arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pairТumber = [];
for (let numb of arrNumber) {
  if (numb % 2 === 0) {
    pairТumber = [...pairТumber, numb];
  }
}
document.write(pairТumber);
console.log(pairТumber);
/*******************************/

document.write("<br>", "33)");
let arrNumberCopy = [];
for (number of arrNumber) {
  arrNumberCopy.push(number);
}
console.log(arrNumberCopy);
document.write(arrNumberCopy);

/****************4***************/

document.write("<br>", "34)");

let arrNumber2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let arrNumber2Copy1 = [];
let q = 0;
while (q < arrNumber2.length) {
  arrNumber2Copy1 = [...arrNumber2Copy1, arrNumber2[q]];
  q++;
}
console.log(arrNumber2Copy1);
document.write(arrNumber2Copy1);
/*******************************/

document.write("<br>", "35)");

let arrNumber2Copy2 = [];
for (numb of arrNumber2) {
  arrNumber2Copy2 = [...arrNumber2Copy2, numb];
}
console.log(arrNumber2Copy2);
document.write(arrNumber2Copy2);
/*******************************/
document.write("<br>", "36)");
let arrNumber2Copy3 = [];
let w = 0;
while (w < arrNumber2.length) {
  if (w % 2 !== 0)
    arrNumber2Copy3 = [...arrNumber2Copy3, arrNumber2[w]];
  w++;
}
console.log(arrNumber2Copy3);
document.write(arrNumber2Copy3);
/*******************************/
document.write("<br>", "37)");
let arrNumber2Copy4 = [];
for (let i = 0; i < arrNumber2.length; i++) {
  if (i % 2 == 0 && i !== 0) {
    arrNumber2Copy4 = [...arrNumber2Copy4, arrNumber2[i]];
  }
}

console.log(arrNumber2Copy4);
document.write(arrNumber2Copy4);
/*******************************/
document.write("<br>", "38)");
let e = 0;
let arrNumber2Copy5 = [];
while (e < arrNumber2.length) {
  if (arrNumber2[e] % 2 == 0) {
    arrNumber2Copy5 = [...arrNumber2Copy5, arrNumber2[e]];
  }
  e++;
}
console.log(arrNumber2Copy5);
document.write(arrNumber2Copy5);
/*******************************/
document.write("<br>", "39)");
let arrNumber2Copy6 = [];
for (numb of arrNumber2) {
  if (numb % 2 == 0) {
    arrNumber2Copy6 = [...arrNumber2Copy6, numb];
  }
}
console.log(arrNumber2Copy6);
document.write(arrNumber2Copy6);
/*******************************/
document.write("<br>", "39)");
let arrNumber2Copy7 = [];
for (numb of arrNumber2) {
  if (numb % 3 == 0) {
    numb = "okten";
  }
  arrNumber2Copy7 = [...arrNumber2Copy7, numb];
}
console.log(arrNumber2Copy7);
document.write(arrNumber2Copy7);
/*******************************/
document.write("<br>", "40)");
let arrNumber2Reverse = arrNumber2.reverse();
console.log(arrNumber2Reverse);
document.write(arrNumber2Reverse);
/*******************************/
document.write("<br>", "41)");
let arrNumber2Copy8 = [];
let a = arrNumber2.length - 1;
while (a >= 0) {
  arrNumber2Copy8 = [...arrNumber2Copy8, arrNumber2[a]];
  a--;
}
console.log(arrNumber2Copy8);
document.write(arrNumber2Copy8);
/*******************************/
document.write("<br>", "42)");
let arrNumber2Copy9 = [];
for (let i = arrNumber2.length - 1; i >= 0; i--) {
  arrNumber2Copy9 = [...arrNumber2Copy9, arrNumber2[i]];
}
console.log(arrNumber2Copy9);
document.write(arrNumber2Copy9);
/*******************5************/
document.write("<br>", "43)");
let arrNumber3 = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 && i !== 0) {
    arrNumber3 = [...arrNumber3, i];
  }
}
console.log(arrNumber3);
document.write(arrNumber3);
/*******************************/
document.write("<br>", "44)");
let arrNumber4 = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0 && i !== 0) {
    arrNumber4 = [...arrNumber4, i];
  }
}
console.log(arrNumber4);
document.write(arrNumber4);
/*******************************/
document.write("<br>", "44)");
let arrNumber5 = [];

for (let i = 0; i < 20; i++) {
  let min = 8;
  let max = 732;
  let a = Math.round(Math.random() * (max - min) + min);
  arrNumber5 = [...arrNumber5, a];
}

console.log(arrNumber5);
document.write(arrNumber5);

/*******************************/
document.write("<br>", "45)");
let arrNumber6 = [];
for (i = 0; i < arrNumber5.length; i++) {
  if ((i + 1) % 3 == 0) {
    arrNumber6 = [...arrNumber6, arrNumber5[i]];
  }
}
console.log(arrNumber6);
document.write(arrNumber6);
/*******************************/
document.write("<br>", "46)");
let arrNumber7 = [];
for (i = 0; i < arrNumber5.length; i++) {
  if ((i + 1) % 3 == 0 && arrNumber5[i] % 2 == 0) {
    arrNumber7 = [...arrNumber7, arrNumber5[i]];
  }
}
console.log(arrNumber7);
document.write(arrNumber7);
/*******************************/
document.write("<br>", "47)");
let arrNumber8 = [];
for (i = 0; i < arrNumber5.length; i++) {
  if ((i + 1) % 3 == 0 && i % 2 === 0) {
    arrNumber8 = [...arrNumber8, arrNumber5[i]];
  }
}
console.log(arrNumber8);
document.write(arrNumber8);
/*******************************/
document.write("<br>", "47)");
let arrNumber9 = [];
for (i = 0; i < arrNumber5.length; i++) {
  if (arrNumber5[i] % 2 === 0 && i !== 0) {
    arrNumber9 = [...arrNumber9, arrNumber5[i - 1]];
  }
}
console.log(arrNumber9);
document.write(arrNumber9);
/*******************************/
document.write("<br>", "48)");
let arrMoney = [100, 250, 50, 168, 120, 345, 188];

let averageСheck =
  arrMoney.reduce(
    (reducer, carentValue) => reducer + carentValue,
    0
  ) / arrMoney.length;
console.log(averageСheck);
document.write(averageСheck);
/*******************************/
document.write("<br>", "49)");
let array12 = [];
for (let i = 0; i <= 20; i++) {
  let min = 8;
  let max = 732;
  let a = Math.round(Math.random() * (max - min) + min);
  array12 = [...array12, a];
}
console.log(array12);
let array13 = [];
for (i = 0; i < array12.length; i++) {
  array13 = [...array13, array12[i] * 5];
}
document.write(array13);
console.log(array13);
/*******************************/
document.write("<br>", "50)");
let arrMixed = [
  1,
  6,
  "hi",
  true,
  14,
  "hello",
  false,
  66,
  null,
  undefined,
  90,
  NaN,
];

let newArr = [];
for (num of arrMixed) {
  if (typeof num == "number") {
    newArr = [...newArr, num];
  }
}
document.write(newArr);
console.log(newArr);

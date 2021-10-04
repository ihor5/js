/* eslint-disable no-unused-vars */
// const age = prompt('Please inupt your age');

// if (age >= 0 && age <= 12) {
//   document.write('You are a child');
// } else if (age > 12 && age <= 18) {
//   document.write('You are a teenager');
// } else if (age > 18 && age <= 60) {
//   document.write('You are an adult');
// } else if (age > 60) {
//   document.write('You are an old man');
// } else {
//   document.write('You entered wrong value!!!!')
// }

// const number = prompt('Write a number from 0-9');

// if (number == 1) {
//   document.write('your symbol !');
// } else if (number == 2) {
//   document.write('your symbol @');
// } else if (number == 3) {
//   document.write('your symbol #');
// } else if (number == 4) {
//   document.write('your symbol $');
// } else if (number == 5) {
//   document.write('your symbol %');
// } else if (number == 6) {
//   document.write('your symbol ^');
// } else if (number == 7) {
//   document.write('your symbol &');
// } else if (number == 8) {
//   document.write('your symbol *');
// } else if (number == 9) {
//   document.write('your symbol (');
// } else if (number == 0) {
//   document.write('your symbol )');
// } else {
//   document.write('You entered wrong value!!!!')
// }

// const newnumber = +prompt('Введите трехзначное число: ');
// const number1 = parseInt(newnumber / 100);
// const number2 = parseInt(newnumber / 10) % 10;
// const number3 = newnumber % 10;
// if (number1 >= 0 && number2 >= 0 && number3 >= 0) {
//   if (number1 === number2 || number2 === number3 || number1 === number3) {
//     alert('Найдено совпадение цифр');
//   } else {
//     alert('Совпадений не найдено');
//   }
// } else {
//   alert('Не число');
// }

// const writeYear = prompt('напиши год', 'xxxx');

// if (writeYear % 400 == 0 || (writeYear % 4 == 0 && writeYear % 100 != 0)) {
//   console.log(`${writeYear} високосный год`);
// } else {
//   console.log(`${writeYear} не високосный год`);
// }

// const fiveNumber = prompt("напиши пятизначное число");

// const number1 = parseInt(fiveNumber / 10000);
// const number2 = parseInt(fiveNumber / 1000) % 10;
// const number3 = parseInt(fiveNumber / 100) % 10;
// const number4 = parseInt(fiveNumber / 10) % 10;
// const number5 = parseInt(fiveNumber % 10);

// if (number1 === number5 && number2 === number4) {
//   console.log("${fiveNumber} эт палиндромом");
// } else {
//   console.log("${fiveNumber} не палиндромом");
// }

// const exchange = +prompt('калькулятор USD');

// const currency = prompt('1-Евро, 2-Гривна 3-Азербайджанский манат');


// switch (currency) {
//   case '1':
//     console.log(exchange * 0.88 + ' ' + 'EUR');
//     break;
//   case '2':
//     console.log(exchange * 27.2 + ' ' + 'UAH');
//     break;
//   case '3':
//     console.log(exchange * 0.59 + ' ' + 'AZN');
//     break;
//   default:
//     console.log('Пожалуйста, введите 1, 2 или 3, чтобы выбрать валюту!');
// }

// const sum = prompt('Сумма покупки')

// const sell_3 = (sum*0.03).toFixed(1);
// const sell_5 = (sum*0.05).toFixed(1);
// const sell_7 = (sum*0.07).toFixed(1);

// if (sum >= 200 && sum < 300){
//   console.log('скидка 3%');
// } else if (sum >= 300 && sum < 500){
//   console.log('скидка 5%');
// } else if (sum >= 500){
//   console.log('скидка 7%');
// } else{
//   console.log('нет скидки')
// }


// const circlePerimeter = +prompt('Напиши длину окружности');
// const squarePerimeter = +prompt('Напиши параметри квадрата');
// const pi = Math.PI;
// const circleRadius = circlePerimeter / (2 * pi);
// const circleDiameter = circleRadius * 2;
// const squareSide = squarePerimeter / 4;

// if (circleDiameter <= squareSide) {
//   console.log('Отличный круг');
// } else {
//   console.log('Слишком большой');
// }

// const firstQuestion = prompt('red, yellow or green?');
// const secondQuestion = prompt('left, center or right?');
// const thirdQuestion = prompt('yes, maybe or no?');

// let totalScore = 0;

// if (firstQuestion === 'yellow') {
//   totalScore += 2;
// }

// if (secondQuestion === 'center') {
//   totalScore += 2;
// }

// if (thirdQuestion === 'maybe') {
//   totalScore += 2;
// }

// let dateEntered = prompt('Enter a date: xx/xx/xxxx', 'xx/xx/xxxx');
// dateEntered = dateEntered.split('/');
// let dateNew = new Date(dateEntered[2], dateEntered[1] - 1, dateEntered[0]);
// dateNew.setDate(dateNew.getDate() + 1);
// console.log(`Next day is ${dateNew}`);
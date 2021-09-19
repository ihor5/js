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

const writeYear = prompt('напиши год', 'xxxx');

if (writeYear % 400 == 0 || (writeYear % 4 == 0 && writeYear % 100 != 0)) {
  console.log(`${writeYear} високосный год`);
} else {
  console.log(`${writeYear} не високосный год`);
} 
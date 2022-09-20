// Задача 1
// ? Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та номер телефону користувача.
// ? У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами.
// ? Порядковий номер імен та телефонів у рядках вказують на відповідність.
// ? Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//   const arrNames = names.split(",");
//   const arrPhones = phones.split(",");
//   for (let i = 0; i < arrPhones.length; i += 1) {
//     console.log(arrNames[i], arrPhones[i]);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// Задача 2
// ? Напишіть функції для роботи з колекцією навчальних курсів courses:
// ? addCourse(name) - додає курс до кінця колекції
// ? removeCourse(name) - видаляє курс із колекції
// ? updateCourse(oldName, newName) – змінює ім'я на нове

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

// function addCourses(name){
//     if(!courses.includes(name)){
//         courses.push(name)
//         return
//     }
//     console.log('Курс вже є в списку->', name)
//     return courses
// }
// function removeCourse(name){
//     const indexEl = courses.indexOf(name)
//     return courses.splice(indexEl, 1)
// }
// function updateCourse(oldName, newName){
//     const indexEl = courses.indexOf(oldName)
//     return courses.splice(indexEl, 1, newName)
// }

// addCourses('PHP')
// console.log('ADDED NEW COURSE -> PHP', courses)
// removeCourse('React')
// console.log('REMOVED COURSE -> REACT', courses)
// updateCourse('CSS', 'Angular')
// console.log('UPDATE COURSE -> CSS to Angular', courses)

// Модуль №2 task 29/32
// function getEvenNumbers(start, end) {
//   const numbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if ([i] % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// }
// console.log(getEvenNumbers(2, 5));

// Модуль №2 task 30/32
// Доповни код таким чином, щоб у змінну number
// записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// Модуль №2 task 32/32
// Напиши функцію includes(array, value), яка робить те саме,
// що і метод масиву масив.includes(значення) - перевіряє,
// чи присутнє в масиві array значення value, повертаючи true,
// якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes()
// не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//   // вирішення №1
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }
// // вирішення №2
// function includes(array, value) {
//   for (const element of array) {
//     if (element === array) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes([1, 2, 3, 4, 5], 3));

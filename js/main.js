// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.


// let heightC = 10;
// let dC = 4;
// let v = heightC * dC;
// console.log(v);




// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).



// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
// console.log(k);




// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log



// let str = 'Hello world';
// document.write(str);
// console.log(str);
// alert(str);




// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).


// let last = 'Ваше Ф И О \nвозраст \nхобби';
// alert(last);





// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write



// let str1 = 'Кто';
// let str2 = 'ты';
// let str3 = 'такой';
// let concatenation = str1 + str2 + str3;
// document.write(concatenation);




// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
//


// let str = '20';
// let a = 5;
// document.write(str + a + "<br/>");
// виведе 205 так як str це строка якщо до строки додати числове значення то виведе стрінгу 205, числове значення переводиться в даному випадку у стрінгу;

// document.write(str - a + "<br/>");
// виведе 15. Ми від строки віднімаємо числове значення. js не вміє віднімати стрінги і переводить їх у числа

// document.write(str * "2" + "<br/>");
// виведе 40 при множенні стрінги переводяться у числа

// document.write(str / 2 + "<br/>");
// виведе 10 стрінга переводиться у число





// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")
//     parseInt("-7.875")
// parseInt("435")
// parseInt("Вася")


// parseInt("3.14")
// виведе 3 (ф-ція parseInt повертає ціле число відрізаючи те що після крапки)

// parseInt("-7.875")
// виведе -7

// parseInt("435")
// виведе 435

// parseInt("Вася")
// виведе NaN





// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
//


// let str = prompt("Enter something", "ho-ho")
// console.log(str);




//
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert


// let firstNumber = +prompt ('введіть перше число');
// let twoNumber = +prompt('введіть друге число');
// let total = firstNumber + twoNumber;
// alert(total);





// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

//
// let name = prompt('Ваше имя');
// let surName = prompt('Ваша фамилия');
// let age = prompt('Ваш возрост');
// alert('Доброго вечера' + ' ' + name + ' ' + surName + ' ' + 'мои поздравления что вам' + ' ' + age);




// ДОП

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//

// let oneNumber = parseInt(prompt('введіть перше число'));
// let twoNumber = parseInt(prompt('введіть друге число'));
// let threeNumber = parseInt(prompt('введіть третє число'));
//
//
// if (oneNumber < twoNumber && twoNumber < threeNumber) {
//     alert(oneNumber + ', ' + twoNumber + ', ' + threeNumber); //1
// } else if (oneNumber < twoNumber && twoNumber > threeNumber) {
//     alert(oneNumber + ', ' + threeNumber + ', ' + twoNumber); //2
// } else if (oneNumber > twoNumber && twoNumber > threeNumber) {
//     alert(threeNumber + ', ' + twoNumber + ', ' + oneNumber); //3
// } else if (oneNumber > twoNumber && twoNumber < threeNumber) {
//     alert(twoNumber + ', ' + oneNumber + ', ' + threeNumber); //4
// } else if (oneNumber < twoNumber && twoNumber > threeNumber) {
//     alert(threeNumber + ', ' + oneNumber + ', ' + twoNumber); //5
// } else if (oneNumber > twoNumber && twoNumber < threeNumber) {
//     alert(twoNumber + ', ' + threeNumber + ', ' + oneNumber); //6
// }



// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!



// const color = prompt('Какого цвета светофор?');
// switch (color) {
//     case 'зеленый':
//         alert('иди');
//         break;
//     case 'желтый':
//         alert('подожди');
//         break;
//     case 'красный':
//         alert('стой');
//         break;
//     default:
//         alert('делай что хочешь');
// }




// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!




// const isRoadClear = confirm('Есть на дороге машины');
// const color = prompt('Какого цвета светофор?');
// if (color === 'зеленый' && isRoadClear === false) {
//     alert('иди');
// } else if (color === 'зеленый' && isRoadClear === true) {
//     alert('подожди пока нарушители проедут');
// } else if (color === 'желтый' && isRoadClear === true) {
//     alert('жди');
// } else  if (color === 'желтый' && isRoadClear === false) {
//     alert('все равно жди');
// } else if (color === 'красный' && isRoadClear === false) {
//     alert('стой все рано');
// } else if (color === 'красный' && isRoadClear === false) {
//     alert('стой все рано');
// } else if (color === 'красный' && isRoadClear === true) {
//     alert('стой и жди');
// } else {
//     alert('делай что хочешь')
// }









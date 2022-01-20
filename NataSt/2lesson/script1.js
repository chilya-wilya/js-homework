"use strict"

/*
1. Написать программу, которая будет решать квадратное уравнение вида ax^2 + bx + c = 0
переменные a, b, c задаются в коде, нужно найти x и дать ответ в зависимости от результата:
— “корни уравнения: х1 = %ваш ответ 1%, х2 = %ваш ответ 2%
— “корень уравнения повторяется и равен %ваш ответ%
— “у уравнения нет корней” 
*/

let a = 1,
    b = -2,
    c = -3,
    x1 = 0,
    x2 = 0;

let D = b**2 - 4*a*c;

if (D < 0) {
    console.log(`D = ${D}. У уравнения нет корней`);
} else if (D === 0) {
    x1 = x2 = (-b + Math.sqrt(D))/(2*a);
    console.log(`D = ${D}. Корень уравнения повторяется и равен ${x1}`);
} else if (D > 0) {
    x1 = (-b + Math.sqrt(D))/(2*a);
    x2 = (-b - Math.sqrt(D))/(2*a);
    console.log(`D = ${D}. Корни уравнения: х1 = ${x1}, х2 = ${x2}`);
}


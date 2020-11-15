'use strict';

/*
Hozz létre két függvény kifejezést arrow functionnel!
A függvények neve summation és subtraction.
Mindegyik függvény két paramétert kap, ezek neve a és b.
Amennyiben bármelyik paraméter hiányozna a függvény meghívásakor, úgy az alapértelemezett érték a 0 legyen.
A summation visszatér a két szám összegével, a subtraction visszatér a két szám különbségével.
*/

let summation = (a=0, b=0) => a + b;
let subtraction = (a=0, b=0) => a - b;

console.log(summation(9, 20));
console.log(subtraction(423,2));
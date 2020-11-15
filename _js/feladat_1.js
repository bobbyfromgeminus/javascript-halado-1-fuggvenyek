'use strict';

/*
Készíts egy JavaScript fájlt, és linkeld be a html oldaladba! Írj egy függvény kifejezést arrow function segítségével.
A függvény neve handleClick legyen
A függvény a meghívása után mindegyik gombhoz hozzáad egy eseményfigyelőt, amely kattintásra kiírja a gomb szövegét a konzolra.
A függvényen belül ciklust használj, tehát ne manuálisan egyesével add a gombokhoz az eseményfigyelőt!
*/

const handleClick = function() {
    const buttons = document.querySelectorAll(".button");
    for (let i=0; i<buttons.length; i +=1) {
        buttons[i].addEventListener('click', function() {
            console.log(buttons[i].innerHTML);
          });
    }
}

handleClick();
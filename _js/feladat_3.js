'use strict';

/*
Hozz létre egy függvény kifejezést arrow functionnel!
A függvény neve personDataLog legyen.
A függvény paraméterként egy objektumot vár, ami egy firstname, lastname, és age tulajdonságokkal rendelkezik.
Amennyiben bármelyik tulajdonság hiányozna úgy rendre a következő alapértelemezett értékeket vegyék fel: - firstname: John - lastname: Doe - age: 33

A függvény kiírja az adott illető adatai a konzolra az adott formátumban:
My name is firstname, lastname. I'm age years old.
A firstname, lastname és age helyére a paraméterként kapott objektum tulajdonságok értékét kell behelyettesíteni.
*/

let personDataLog = ({firstname='John', lastname='Doe', age=33} = {}) => 'My name is ' +firstname+' '+ lastname+'.' + ' I\'m '+age+' years old.';

console.log(personDataLog());
console.log(personDataLog({firstname: 'Jane', lastname: 'Doherty', age: 20}));
console.log(personDataLog());
console.log(personDataLog({firstname: 'Phil', age: 42}));
/* Scope
   Scope merupakan area akses dari sebuah data, yang berarti
   hak akses suatu data tergantung di mana varible dari data tersebut
   di deklarasikan, pada JavaScript terdapat 2 jenis scope yaitu global
   scope dan local scope, sebagai contoh saat kita membuat function, maka 
   kita akan membuat local scope untuk function tersebut, data di global
   scope bisa diakses dari local scope, namun tidak sebaliknya.
*/

let counter = 0; // global scope

function addCounter(){
    // local scope function addCounter
    counter++;
}

addCounter();
addCounter();

console.info(counter);

function first(){
    let firstValue = "first";
}

function second(){
    let secondValue = "second";
}

first();
second();
// error cannot access local scope
//console.info(firstValue);
//console.info(secondValue);

// Nested Function Scope

function first(){
    let firstValue = "first";
    function second(){
        let secondValue = "second"
        console.info(firstValue) 
        // inner function bisa mengakses 
        //local scope milik outer function
        // tetapi outer function tidak bisa
        // mengakses local scope milik inner function
    }
    second();
    // console.info(secondValue); error can access inner local scope
}
/* Anonymous Function
   Kita bisa membuat function tanpa nama function, atau istilahnya adalah
   anonymous function, kita bisa membuatnya di dalam sebuah variable atau
   ketika mengisi parameter
*/

const greet = function (name){ // anonymous function tidak memiliki nama
    console.info(`Hello ${name}`);
}

greet("Felix");

//anonymous function as parameter ex.1.
function sayName(callback){
    callback("felix");
}
sayName(greet);
//anonymous function as parameter ex.2.
sayName(function(name){
    console.info(`Hai ${name}`);
});

/* Function dalam function
   Tidak ada batasan di mana kita bisa membuat function, termasuk jika kita
   ingin membuat function di dalam function, function yang ada di dalam function
   kita sebut inner function. Inner function hanya bisa diakses di tempat kita membuat
   nya, tidak bisa diakses di luar outer function-nya.
*/

function outer(){

    function inner(){
        console.info("inner function");
    }

    inner();
    inner();
}

outer();
//inner(); // error can't access inner function
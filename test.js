function factorial(value){
    if (value === 1){
        return 1;
    } else {
        return value * factorial(value -1);
    }
}

// const result = factorial(5);
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1
// console.log(result)

function test(){
    console.info("ini function test");
};

const myArray = [];

if(!myArray[0]) test();

var myvar = 'my value';

function test() {
    console.log(myvar) //undefined
    var myvar = 'local value'
}
test();

let myVar = 'my value';

function test() {
    console.log(myvar) //undefined
    myvar = 'local value'
}
test();

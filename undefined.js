/* Undefined
   Undefined adalah sebuah kata kunci di JavaScript.
   Undefined adalah sebuah tipe data.
   Sebuah variable yang belum di-assign dengan nilai, maka artinya variable
   tersebut merupakan tipe undefined.
   undefined berbeda dengan null pada bahasa pemrograman lain.
*/

let myname;
if (myname === undefined) {
    console.info("UNDEFINED");
} else {
    console.info("DEFINED");
} 

const names = ["Felix","Marco"];
if (names[2] === undefined){
    console.info("array undefined");
}else {
    console.info(`array defined data: ${names[2]}`);
}

const person = {};

if (person.name === undefined){
    console.info("person name undefined");
}else {
    console.info(`person name ${person.name}`);
}
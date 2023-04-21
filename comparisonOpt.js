// Operasi Perbandingan 
/* operasi perbandingan adalah operasi yang membandingkan dua buah data
   operasi perbandingan menghasilkan data dengan nilai boolean
   jika hasil operasi benar, maka akan bernilai true
   jika hasil operasi salah, maka akan bernilai false
*/


let x = 5;
let y = 2;
let greaterThan = x > y;
let lessThan = x < y;
let equalGreaterThan = x >= y;
let equalLessThan = x <= y;
let equal = x == y;
let equalSameType = x === y;
let notEqual = x != y;
let notEqualnotSameType = x !== y;

console.log("5 lebih dari 2 =",greaterThan);
console.log("5 kurang dari 2 =",lessThan);
console.log("5 lebih dari sama dengan 2 =",equalGreaterThan);
console.log("5 kurang dari sama dengan 2 =",equalLessThan);
console.log("5 sama dengan 2 =",equal);
console.log("5 sama dengan dan sama tipe data 2 =",equalSameType);
console.log("5 tidak sama dengan 2 =",notEqual);
console.log("5 tidak sama dengan dan tidak sama tipe data 2 =",notEqualnotSameType);

console.log(5 == "5");// true, karena pada JavaScript variable bersifat dinamis, hanya membandingkan nilai
console.log(5 === "5");// false, ini akan membandingkan data berikut dengan tipe data
console.log(5 != "5");// false
console.log(5 !== "5");// true
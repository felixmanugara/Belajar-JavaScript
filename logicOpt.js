// Operator Logika
/* operator logika adalah operator untuk dua buah data boolean
   perbandingan dari logika ini akan menghasilkan nilai boolean
*/

// and operator &&, bernilai benar jika kedua pembanding bernilai benar
console.log("====== AND ======");
let a = 5 != 2;//True
let b = 2 > 1;// True
let compareAnd = a && b;
console.log(" 5 tidak sama dengan 2 dan 2 lebih besar dari 1 =",compareAnd);

// or operator ||, bernilai benar jika salah satu atau kedua pembanding bernilai benar
console.log("====== OR ======");
let x = 6 == 8;// false
let y = 7 != 8;// true
let compareOr = x || y;
console.log("6 sama dengan 8 atau 7 tidak sama dengan 8 =", compareOr);

// Not operator atau negasi, akan membalik nilai boolean
console.log("====== Not ======");
let negate = !x; //false akan menjadi true
console.log(negate);
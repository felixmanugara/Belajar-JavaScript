// Variable
/* variable adalah tempat untuk menyimpan data.
   dengan variable kita dapat menggunakan data berulang kali
   hanya dengan memanggil nama variable-nya.
   pada JavaScript variable bersifat dynamic, artinya variable tidak
   terpaku pada satu tipe data saja, kita bisa mengubah tipe data pada
   variable yang sama.
   untuk membuat variable digunakan kata kunci var diikuti dengan nama variable*/


var myName = "Felix Marco";
console.log(myName);

// assign data setelah deklarasi variable
var fullName;
fullName = "Marco Felix";
console.log(fullName);

// let dan const
/* JavaScript saat ini tidak direkomendasikan untuk menggunakan kata kunci var 
   untuk membuat variable, namun diganti dengan let dan const, hal ini dikarenakan
   ada masalah pada desain awal var sehingga penggunaannya tidak direkomendasikan lagi

   Masalah pada Variable Var
   Alasan mengapa variable var tidak direkomendasikan lagi adalah, karena var tidak
   memiliki block scope, artinya dia tidak mengikat ke local scope, karena masalah ini
   var bisa tidak terprediksi.
*/

let thisName = "Felix Marco";
console.log(myName);

let iName;
fullName = "Marco Felix";
console.log(fullName);

/* kata kunci const merupakan deklarasi variable yang data-nya tidak
   bisa diubah kata const di sini biasanya juga disebut konstanta */

const application = "Belajar JavaScript Dasar";
//application = "Belajar yang lain"; // error TypeError: Assignment to constant variable
console.log(application);

// contoh perbedaan antara var dan let

let i = 20; // i global scope

for(let i = 0; i < 10; i++){ // i local scope
   // re-deklarasi i menggunakan let di dalam 
   // for loop merupakan variable
   // local untuk loop saja
   console.log(`i Local Scope: ${i}`); // 0-9
}
// karena berbeda scope walaupun nama variable
// sama value dari masing-masing variable tetap berbeda
console.info(`i Global Scope: ${i}`); // 20

var j = 20;

for(var j = 0; j < 10; j++){ 
   
   console.log(`i Local Scope: ${j}`); // 0-9
}
// karena berbeda menggunakan var yang mana tidak
// memiliki scope maka nilai dari var di luar for loop
// akan ikut berubah nilainya.
console.info(`i Global Scope: ${j}`); // 10

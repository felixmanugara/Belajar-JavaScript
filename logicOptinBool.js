/* Operator logika di non boolean
   Sebelumnya kita tahu bahwa operator AND dan OR digunakan untuk
   dua data boolean.
   Namun berbeda di JavaScript, kita bisa menggunakan operator logika AND dan OR
   untuk tipe data non boolean.
   
   Operator OR 
   operator OR membaca dari kiri ke kanan.
   operator ini akan mengambil nilai pertama yang truthy
   Jika tidak ada satu pun yang bernilai truthy, maka yang terakhir
   akan diambil (kanan).

   Operator AND
   Operator AND membaca dari kiri ke kanan.
   Operator ini akan mengambil nilai pertama yang falsy.
   jika tidak ada satupun yang falsy, maka yang terakhir yang diambil

   */

// mengambil value truthy dengan operator OR
console.info("hello" || "");// hello
console.info("" || []);// []
console.info("0" || "NOL");// "0"
console.info(0 || "NOL");// "NOL"
console.info(null || "NULL");// "NULL"
console.info(undefined || "UNDEFINED");// UNDEFINED
console.info(0 || false);// false

//contoh aplikasi

const person = {
    firstName: "",
    lastName: "Marco"
}
// akan mengambil lastname karena firstname falsy
const name1 = person.firstName || person.lastName;

console.info(name1)

console.info("hello" && "");// ""
console.info("" && []);// ""
console.info("0" && "NOL");// "NOL"
console.info(0 && "NOL");// 0
console.info(null && "NULL");// null
console.info(undefined && "UNDEFINED");// undefined
console.info(1 && true);// true

// akan mengambil firstname karena lastname truthy

const name2 = person.firstName && person.lastName;

console.info(name2)
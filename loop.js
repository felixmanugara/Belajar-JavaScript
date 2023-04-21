/* For Loop
   For adalah kata kunci yang dilakukan untuk melakukan
   perulangan. Blok kode yang terdapat di dalam for akan
   selalu diulangi selama kondisi dari for terpenuhi

   syntax perulangan for:

   for (init statement; kondisi; post statement) {
    // block perulangan
   }

   While Loop
   While loop adalah versi perulangan yang lebih sederhana
   dari for loop. Di while loop, hanya terdapat kondisi perulangan
   tanpa ada init statement dan post statement.

   Do While Loop
   Do while loop mirip dengan while loop perbedaannya terdapat dalam pengecekan
   kondisi. Pengecekan kondisi di while loop dilakukan di awal sebelum perulangan
   dilakukan, sedangkan di do while loop, pengecekan dilakukan setelah perulangan 
   berjalan. Oleh karena itu dalam do while loop, minimal pasti sekali perulangan
   dilakukan walaupun kondisi tidak bernilai true.
   
   break & continue
   pada perulangan kita juga bisa menggunakan break untuk menghentikan perulangan
   sedangkan untuk continue digunakan untuk menghentikan perulangan secara sementara
   lalu melanjutkan kembali perulangannya.
*/

// for loop
// console.log("====== For Loop ======");
// for (let i = 1; i <= 5; i++) {
//     console.log(`perulangan for ke: ${i}`);
// }

// // while loop
// console.log("====== While Loop ======");
// let counter = 1;
// while(counter <= 10) {
//     console.log(`perulangan while ke: ${counter}`);
//     counter++;
// }

// // do while loop
// console.log("====== Do While Loop ======");
// let counters = 1;
// do {
//     console.log(`perulangan do while loop ke: ${counters}`);
//     counters++;
// } while (counters <= 10);

// console.log("====== Loop Break & Continue ======");
// for (i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         continue; 
//         /* value akan dilewatkan, block 
//         kode akan kembali ke post statement
//         setelah itu akan kembali mengecek kondisi pada for loop */
//     }
//     console.log(`Angka ganjil: ${i}`); // value yang dieksekusi
// }

/* For In
   For In merupakan perulangan for yang digunakan untuk iterasi
   seluruh data property di object atau index di array.
   Walaupun for in bisa digunakan untuk Array, namun pengunaannya
   tidak direkomendasikan, karena biasanya kita jarang sekali butuh
   data index untuk Array.

   For Of
   Jika for in digunakan untuk melakukan iterasi property atau index,
   berbeda dengan for of, yang digunakan untuk melakukan iterasi terhadap
   value dari iterable object, seperti Array, String, dan lain-lain.
   For of tidak bisa digunakan untuk melakukan iterasi data di object, karena
   object bukanlah iterable.
*/

console.log("====== For In Loop ======");
const person = {
    firstName: "Felix",
    middleName: "Marco",
    lastName: "Manugara"
}

for (const property in person) {
    console.log(`property ${property} : ${person[property]}`);
}

console.log("====== For Of Loop ======");

const names = ["Felix", "Marco", "Manugara"];

for(const name of names) {
    console.log(`${name}`);
}
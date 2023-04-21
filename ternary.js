/* Ternary Operator
   Ternary Operator adalah operator sederhana dari IF statement.
   Ternary Operator terdiri dari kondisi yang dievaluasi, jika
   menghasilkan true, maka nilai pertama yang diambil, jika false
   maka nilai kedua yang diambil. 
*/

const nilai = 75;
let ucapan;

// tanpa ternary operator
if (nilai >= 75){
    ucapan = "Selamat Anda Lulus";
} else {
    ucapan = "Silakan Coba Lagi";
}
console.info(ucapan)

// dengan ternary operator code menjadi lebih pendek
ucapan = nilai >=75 ? "Selamat Anda Lulus" : "Silakan Coba Lagi";

console.info(ucapan);
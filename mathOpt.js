// Operator Matematika
/* JavaScript mendukung banyak operator matematika untuk
   tipe data number, seperti: 
   - operator aritmatika
   - operator augmented assignments
   - operator unary
*/

// operator aritmatika
console.log("====== operator matematika ======");
let a = 10;
let b = 5;

console.log("10 + 5 =",a + b); // penjumlahan
console.log("10 - 5 =",a - b); // pengurangan
console.log("10 x 5 =",a * b); // perkalian
console.log("10 : 5 =",a / b); // pembagian
console.log("10 % 5 =",a % b); // sisa bagi modulo
console.log("10 ^ 5 =",a ** b); // eksponensial

// augmented assignment
/* merupakan operasi aritmatika untuk mempersingkat syntax, jika
   kita ingin melakukan operasi aritmatika pada variable itu sendiri */
console.log("====== Augmented Assignment ======");
let x = 6;
let y = 2; 
let result;
//x = x + y // 
result = x + y; //8 contoh operasi artmatika biasa
result -= y; //6 contoh operasi aritmatika dengan augmented assignment
result *= y; //12 
result /= y; //6
result %= y; //0
result **= y //0
console.log(result); //0

console.log("====== Operator unary ======");
/* unary operator merupakan operator yang hanya membutuhkan 1 data 
   operator + untuk menandakan nilai positif
   operator - untuk menandakan nilai negatif
   operator ++ untuk melakukan increment
   operator -- untuk melakukan decrement
*/

result ++; //1
console.log(result);
result = -result; //-1
console.log(result);
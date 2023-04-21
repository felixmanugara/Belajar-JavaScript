/* Arrow Function
   Arrow function adalah alternatif pembuatan function yang lebih sederhana
   dari function biasanya. Namun terdapat limitasi dan tidak dapat digunakan
   pada semua situasi. Dinamakan arrow function karena menggunakan tanda =>
   (seperti panah).

   Kekurangan Arrow Function:
   - Tidak memiliki fitur arguments object.
   - Tidak bisa menggunakan function generator.
   - Tidak bisa mengakses this.
   - Tidak bisa mengakses super.
*/


const greetings = (name) => {
    /* dalam pembuatannya arrow
       function seperti anonymous
       function yaitu tidak bisa 
       berdiri sendiri, arrow function
       harus dimasukkan kedalam variable
       atau parameter.
    */ 
    const say = `Hello ${name}`;
    console.info(say);
}

greetings("Felix");

/* Arrow Function Tanpa Block
   arrow function dapat ditulis tanpa {},
   jika isi function hanya satu baris.
*/
const sum = (add1,add2) => add1 + add2;
console.log(sum(2,6));

/* arrow function juga bisa disederhanakan lagi
   yaitu jika parameter function hanya satu
   maka kita bisa membuatnya tanpa ().

   arrow function juga bisa mengembalikan value,
   jika menggunakan block {} kita perlu menggunakan
   kata kunci return, jika tidak menggunakan block {}
   kita tidak perlu menggunakan kata kunci return.
*/
const sayHello = userName => `Hai ${userName}`; 

const hello = user => {
    return `Hi ${user}`;
}

console.log(sayHello("Marco"));
console.log(hello("marcoFel"));
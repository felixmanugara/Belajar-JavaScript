/* Object Method
   Pada tipe data object kita sudah membahas tentang
   property di object. Karena sebenarnya function juga
   merupakan salah satu tipe data, jadi function pun 
   sebenarnya bisa ditambahkan sebagai property di object
   cara pembuatannya pun sama dengan function sebagai value
   function di object kadang disebut juga sebagai Object Method
*/

const person = {
    name: "Felix",
    greet: function (name){
        console.info(`Hello ${name}`);
    }
};

person.greet(person.name);
person.greet("Marco");

/* Arrow Function di Object
   Arrow Function juga dapat kita gunakan sebagai object method
   Namun perlu diketahui, arrow function tidak bisa digunakan untuk
   mengakses arguments object, function generator, kata kunci this dan
   kata kunci super. Jadi penting untuk memastikan saat kita menggunakan
   arrow function kita memang tidak butuh fitur-fitur di atas.
*/

const person2 = {
    name: "marco",
    sayHi: name => console.info(`Hi ${name}`)
}

person2.sayHi("Felix");
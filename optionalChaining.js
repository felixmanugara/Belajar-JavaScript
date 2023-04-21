/* Optional Chaining
   Optional Chaining operator (?) merupakan operator yang digunakan
   untuk mengamankan ketika kita ingin mengakses property sebuah object dari
   data nullish.
   Jika kita mencoba mengakses property dari sebuah object dari data nullish
   tanpa menggunakan optional chaining, maka akan terjadi error.
*/

const person = {
    address: {
        country: "Indonesia"
    }
};

// akan menghasilkan error karena kita mencoba mengakses
// data dari sebuah property object yang memiliki tipe undefined
// dalam kasus ini kita mencoba mengakses country dari address yang
// mana address masih undefined.
//console.info(`person address ${person.address.country}`);

// hal di atas dapat dihindari dengan menggunakan if statement 
let country;

if (person.address !== undefined && person.address !== null) {
    country = person.address.country;
}
console.info(country)

// mengatasi error dengan optional chaining
// ? digunakan untuk mengecek apakah property object nullish atau tidak
country = person?.address?.country; 

console.info(country);
/* Associative Array
   Pada Bahasa pemograman lain seperti PHP, kita bisa menggunakan
   index berupa tipe data lain selain number, misal string.
   Fitur ini biasanya disebut associative array atau hash.
   JavaScript tidak mendukung associative array.
   Jika kita memaksa memasukkan data yang bukan number pada index
   array, maka JavaScript akan merubah tipe data array tersebut menjadi
   object dan ini bisa berbahaya, karena beberapa operasi di array mungkin
   bisa berubah hasilnya.
*/

/* Tipe Data Object
   Tipe data object adalah tipe data yang mirip dengan tipe data array.
   Yang membedakan keduanya adalah, index pada tipe data object bisa berupa string.
   Index pada tipe data object biasanya disebut attributes atau properties, bukan index.
*/

const person = {};

const person2 = {
    nama : "Felix",
    "alamat rumah" : "Indonesia", // membuat index dengan string jika index memerlukan spasi
    umur : 23
};

// menambah data atau mengubah data
person["nama"] = "Felix";
person["alamat"] = "Indonesia";
person["umur"] = 23;

console.table(person);
// menghapus data
delete person["umur"];

console.table(person);

// akses data pada object
console.info(`person2 nama: ${person2.nama}`);
console.info(`person2 alamat: ${person2["alamat rumah"]}`); // index dengan spasi akses dengan kurung []
console.info(`person2 umur: ${person2.umur}`);

//Array
/* Array merupakan tipe data yang berisi kumpulan data
   Array di JavaScript memiliki karakter yang dinamis, 
   yang artinya data dapat bertambah dengan sendirinya
   saat kita memasukan data ke dalam array, berbeda dari C 
   dan Java yang sudah kita tentukan kapasitasnya di awal 
   deklarasi variable
*/

let emptyArr = []; // membuat array kosong
let nameArr = ["Felix", "Marco","Manugara"];

// memasukan data ke dalam array
emptyArr.push(true);
emptyArr.push(false);
emptyArr.push(0,1);
emptyArr.push("belajar","JavaScript");

// length digunakan untuk mengetahui panjang array
console.info(`panjang array nama: ${nameArr.length}`);
// akses data di dalam array dengan index value
console.info(`akses array dengan index: ${nameArr[2]}`);

// mengubah data sesuai posisi index
emptyArr[0] = false;
delete nameArr[1]; // manghapus data sesuai posisi index, namun index tidak bergeser
console.table(emptyArr);
console.table(nameArr)
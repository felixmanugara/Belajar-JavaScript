/* konversi string ke tipe number, hal ini perlu dilakukan
   agar tidak terjadi masalah saat ingin melakukan operasi
   matematika pada data
*/

const val1 = "1";
const val2 = 1;
const val3 = "1.2";
const val4 = '2.5';
const sum = val1 + val2;
// output 11, karena data akan digabungkan bukan dijumlahkan, ini terjadi karena
// tipe data dari kedua data tersebut berbeda sehingga akan diperlakukan seperti concatenate
console.log("====== sebelum typecasting ======");
console.info(`1 + 1 = ${sum}`);
console.info(`1.2 + 2.5 = ${val3 + val4}`)
/* macam macam function typecasting 
   parseInt(string)   : konversi string ke bilangan bulat
   parseFloat(string) : konversi string ke bilangan pecahan
   Number(string)     : konversi string ke bilangan bulat atau pecahan
   number.toString()  : konversi tipe number ke string
*/
console.log("====== setelah typecasting ======");
const valInt = parseInt(val1); // konversi "1" ke tipe data number 1
const val3float = parseFloat(val3);
const val4num = Number(val4);
console.info(`1 + 1 = ${valInt + val2}`);
console.info(`1.2 + 2.5 = ${val3float + val4num}`);

console.log("====== number ke string ======");
const a = 1;
const b = 2;
const total = a.toString() + b.toString(); // output 12, karena dikonversi ke string sebelum dijumlahkan
console.info(`1 + 2 = ${total}`);

console.log("====== NaN ======");
/* NaN (Not a Number) terjadi jika kita melakukan konversi terhadap data yang tidak valid */
const str = 'a'
console.log(`konversi char a ke int = ${parseInt(str)}`)
const dec = "1.1text"
console.log(`konversi 1.1text ke float = ${parseFloat(dec)}`);
/* parseInt dan parseFloat masih mentolerir kesalahan asalkan data yang
   tidak vaild tidak berada di awal string dalam contoh kita 1.1text
   kata text tidak berada di awal sehingga casting masih menghasilkan nilai
   yang valid, sementara Number() tidak mentolerir kesalahan sedikitpun.
*/

/* jika kita melakukan operasi pada NaN maka hasilnya akan tetap NaN
   terlepas dari nilai lain yang digunakan dalam operasi tersebut
*/
console.log("====== operasi NaN ======")
const Nan = Number("satu");
const NotaNan = 100;
const result = Nan + NotaNan;
console.info(`NaN + 100 = ${result}`);
// function isNaN() digunakan untuk mengecek apakah suatu variable bernilai NaN
console.info(`apakah variable Nan bernilai nan = ${isNaN(Nan)}
apakah variable NotaNan bernilai Nan = ${isNaN(NotaNan)}`);
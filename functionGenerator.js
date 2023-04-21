/* Function Generator
   Function generator adalah function yang digunakan untuk membuat data
   generator. Generator adalah data yang bisa di-iterasi (Iterator) seperti array.
   untuk membuat function generator kita perlu menggunakan tanda * setelah
   kata function. Dan untuk mengembalikan data di tiap iterasi kita menggunakan 
   kata kunci yield diikuti dengan data-nya.

   NOTE:
   Generator memiliki karakteristik Lazy Evaluation, yang artinya data baru akan
   diambil secara satu per satu ketika kita melakukan iterasi, jadi jika kita belum 
   mengambil data maka yield selanjutnya tidak akan dieksekusi. hal ini berbeda 
   dengan function biasa yang mana data-nya akan di generate semuanya terlebih dahulu
   saat function dipanggil ini biasanya disebut dengan eager evaluation.
   
*/


function* giveNames() {
    yield "Felix";
    yield "Marco";
    yield "Manugara";
}

const names = giveNames();

for(const name of names){
    console.log(name)
}

function* evenNumberGenerator(value) {
    for (let i = 1; i <= value; i++){
        if (i % 2 === 0){
            yield i;
        }
    }
}

const numbers = evenNumberGenerator(100);
for(const number of numbers){
    console.log(`nomor genap -> ${number}`);
}
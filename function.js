/* Function
   Function adalah blok kode program yang akan dijalankan
   saat kita panggil.
   Untuk membuat function kita bisa menggunakan kata kunci
   function diikuti dengan nama function lalu tanda kurung () 
   dan diakhiri dengan blok kurung {}.
   Kita bisa memanggil function dengan menggunakan nama function
   dan tanda kurung ().
*/

console.log("====== Function ======");
function sayHelloWorld(){
    console.info("Hello world!!");
}

sayHelloWorld(); // memanggil function

// function dengan parameter 
console.log("====== Function dengan parameter ======");
function sum(x, y){
    let value = x + y;
    console.info(`${x} + ${y} = ${value}`);
}

sum(9,7); // memanggil fungsi

/* Function dengan return value
   secara default, function tidak menghasilkan value apapun, namun kita bisa 
   membuat function yang mengembalikan value.
   Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return
   di dalam function-nya.
   function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa
   data sekaligus, kita bisa menggunakan Array sebagai return value.

   NOTE:
   Return dapat digunakan untuk menghentikan eksekusi dari sebuah fungsi
   saat kita menggunakan return maka kode di bawahnya tidak akan dieksekusi lagi.

   NOTE:
   Optional Parameter, secara default parameter di function itu bersifat optional
   yang artinya kita tidak wajib mengisi value-nya ketika memanggil function, jika
   tidak ada value yang kita kirim ke parameter ketika memanggil function, maka secara
   otomatis parameter tersebut akan bernilai undefined, ini unik untuk JavaScript, karena
   pada bahasa pemrograman lain seperti python parameter wajib diisi.
   
   NOTE:
   Default Parameter, parameter juga bisa diisi dengan default value yang artinya
   jika kita tidak mengirimkan data ke parameter, maka secara otomatis parameter akan
   diisi oleh default value.
   
   NOTE:
   Rest Parameter, adalah fitur yang membuat kita bisa mengirimkan sebanyak-banyaknya
   data pada satu parameter, dan secara otomatiis data tersebut akan dikonversi menjadi
   array. Dalam membuat rest parameter terdapat ketentuan sebagai berikut:
   - Rest parameter hanya boleh ada satu dalam sebuah function.
   - Rest parameter hanya boleh berada di posisi paling akhir, kecuali memang hanya
     ada satu parameter pada sebuah function.
   - Di bahasa pemograman lain ini biasanya disebut variable argument.

*/
console.log("====== Function dengan Return Value ======");
function sayHello(firstName, lastName){
    const greet = `Hello ${firstName} ${lastName}`;
    return greet;
}

const greetings = sayHello("Felix","Marco");

console.info(greetings);

// function dengan return value lebih dari 1
console.log("====== Function dengan return value lebih dari 1 ======");
function getScore(value){
    if (value >90){
        return "A";
    }else if (value > 80){
        return "B";
    } else if (value > 70){
        return "C";
    } else if (value > 60){
        return "D";
    }else{
        return "E";
    }
}

const finalScore = getScore(50);
console.info(finalScore);

// return untuk menghentikan eksekusi fungsi
// fungsi untuk mencari apakah suatu data ada di dalam array
console.log("====== Function dengan Return untuk menghentikan eksekusi Function======");
function isContains(array, searchValue){
    for (const element of array ){
        if (element === searchValue){
            return true;
        }

    }
    return false;
}

const numberArray = [1,2,3,4,5,5,6,7,7];
const search = 8;
const result = isContains(numberArray,search);
console.info(result);

// function dengan default parameter
console.log("====== Function dengan Default Parameter ======");
function register(name, gender = "UNKNOWN") {
    console.log(`name: ${name} gender: ${gender}`);
}

register("Felix"); // karena gender tidak diisi maka default value akan digunakan

//function dengan rest parameter
console.log("====== Function dengan Rest Parameter ======");
function count(name, ...data){
    let total = 0;
    for (const item of data){
        total += item;
    }
    console.info(`Total ${name} is ${total}`);
}

count("Orange", 2,3,4,5,6,7,8);

/* Lalu bagaimana jika kita terlanjur memiliki array
   apakah bisa dikirim ke rest parameter, hal ini bisa
   dilakukan dengan menggunakan speread syntax, yaitu dengan
   memberikan tiga titik di awal deklarasi value array.

   Sebelum ada fitur rest parameter, di JavaScript sudah ada fitur
   argument object ini adalah fitur di mana kita bisa mengambil semua
   parameter dalam bentuk array dengan menggunakan object bernama arguments
   namun perlu diingat, bahwa untuk JavaScript saat ini, lebih baik disarankan
   menggunakan rest parameter dibandingkan arguments object.
*/
const value = [5,5,5,5,5];
count("Apple", ...value);
count("Banana", ...[1,2,3,4,5,6,7,8]);

// function dengan arguments object
console.log("====== Function dengan Arguments Object ======");
function oldSum(){
    let total = 0;
    for (const item of arguments){ // arguments otomatis ada pada function  
        total += item;
    }
    console.info(`Total: ${total}`);
}

oldSum(1,2,3,4,5,6);

// memanggil function dengan variable atau function sebagai value;
console.log("====== memanggil Function dengan variable ======");
const fruitSum = count; // tidak perlu tanda kurung () karena kita tidak ingin memanggil fungsi
fruitSum("Kiwi",...value);
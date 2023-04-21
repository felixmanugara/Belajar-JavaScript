/* Falsy
   Falsy adalah value yang dalam konteks boolean, dianggap false
   ini adalah salah satu fitur unik dari JavaScript, yang berguna,
   namun kadang juga sering membingungkan.
   Jadi pada JavaScript, kondisi itu tidak hanya boolean, tetapi
   diluar boolean pun bisa, namun kita harus tahu beberapa data 
   falsy, atau dianggap false.

   data yang dianggap falsy:
   false    : boolean value
   0, -0    : nomor 0 dan -0 dianggap false
   "",'',`` : semua string kosong dianggap false
   null     : null dianggap false
   undefined: undefined dianggap false
   NaN      : Not a Number dianggap false

   Truthy
   Truthy adalah kebalikan dari falsy, yang mana data-nya dianggap True
   untuk mengetahui apakah sebuah data adalah truthy, yaitu data yang bukan
   bernilai falsy.
*/


let data = "" // string kosong dianggap false

if (data) {
    console.info("Truthy");
}else {
    console.info("Falsy");
}

let arr = {} // object kosong dianggap true

if (arr) {
    console.info("truthy");
}else {
    console.info("falsy");
}

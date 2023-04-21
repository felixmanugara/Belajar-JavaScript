/* In Operator
   In operator adalah operator yang digunakan untuk mengecek apakah sebuah
   property ada di dalam object atau tidak.
   Output dari In operator adalah boolean.
   Tidak hanya di object, in juga bisa digunakan untuk mengecek index pada Array. 

   peringatan:
   in operator hanya akan mengecek apakah sebuah property atau index ada atau tidak
   jadi walaupun nilai property atau index-nya undefined atau null, maka akan tetap
   dianggap ada.
*/

const person = {firstname: "Felix",
                midname: "Marco"};

if ("firstname" in person){
    console.info(`Hello person ${person.firstname}`);
}else{
    console.info("Hello")
}

// contoh untuk peringatan

const person2 = {"name": undefined}

if ("name" in person2){
    console.info(`Hello person2 ${person2.name}`);
}else {
    console.info("Hello")
}
/* With Statement
   With statement merupakan fitur yang digunakan untuk
   menurunkan sebuah scope data, dengan menggunakan with
   statement, kita bisa mengakses property dalam sebuah data
   tanpa harus menyebutkan data-nya.

   NOTE:
   With statement tidak direkomendasikan
   Walaupun fiturnya sangat menarik, namun kebanyakan orang tidak
   merekomendasikan penggunaannya. Hal ini dikarenakan with statement terkadang 
   membuat kode menjadi ambigu.
*/

//tanpa with statement
const person = {
    firstName: "Felix",
    middleName: "Marco",
    lastName: "Manugara"
}


console.log(`${person.firstName}`);
console.log(`${person.middleName}`);
console.log(`${person.lastName}`);

// dengan with statement
with (person) {
    console.info(firstName);// kita tidak perlu mendeklarasi property datanya
    console.info(middleName);
    console.info(lastName);
}
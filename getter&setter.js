/* Getter dan Setter
   Getter dan Setter merupakan fitur untuk membuat function yang
   berbeda untuk mengambil data (Getter) dan mengubah data (Setter)
   dengan menggunakan getter dan setter, kita bisa melakukan hal apapun
   dalam function sebelum sebuah property diakses atau diubah, misal 
   menambah validasi dan lain-lain.
*/

// getter dan setter
const person = {
    firstName: "Felix",
    lastName: "Marco",
    get fullName(){ // function ini akan diperlakukan seperti property
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(val) { // 
        const array = val.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
}

person.fullName = "Marco manugara"
console.info(person.fullName);

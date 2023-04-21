/* Alert, Prompt dan Confirm
   JavaScript memiliki fitur yang bernama alert, prompt dan confirm.
   Alert digunakan untuk memberi peringatan berupa popup text di browser.
   Prompt digunakan untuk meminta input string dari pengguna browser dalam
   bentuk popup input text.
   Sedangkan confirm digunakan untuk meminta input boolean dari pengguna browser
   dalam bentuk popup input pilihan.
*/


const login = confirm("Anda yakin ingin login?");

if(login) {
    const username = prompt("Siapa Nama Anda?");
    alert(`Hello ${username}`);
} else {
    alert("Sayonara")
}
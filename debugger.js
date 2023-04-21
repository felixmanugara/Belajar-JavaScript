/* Debugger
   Debugger digunakan untuk melakukan proses debugging
   Debugging adalah proses mencari masalah bug, yang terjadi
   di kode program kita. Dengan debugger kita bisa menghentikan
   kode program di posisi yang kita inginkan (breakpoint),
   lalu melihat semua isi variable yang ada pada saat kode program
   sedang terhenti.
*/

function createFullName(firstName, middleName, lastName){
    debugger;
    const fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}

const myname = createFullName("Felix", "Marco", "Manugara");
console.info(myname);
/* Label 
   Label merupakan penanda yang bisa digunakan dengan kata 
   kunci break dan continue, label memungkinkan kita untuk
   memilih di mana kita ingin melakukan break atau continue
   pada loop yang sedang kita jalankan.
   Untuk membuat label, kita bisa gunakan nama label lalu diikuti
   dengan titik dua (:).
*/

loopi: // label
for (let i = 0; i < 10; i++) {
    loopj:
    for (let j = 0; j < 100; j++) {
        if (j > 10) {
            continue loopi; 
            // jika kondisi terpenuhi maka loopj akan terhenti
            // perulangan dilanjukan oleh loopi
        }
        console.info(`${i} - ${j}`);
    }
}

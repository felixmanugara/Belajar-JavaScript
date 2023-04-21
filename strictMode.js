/* Strict Mode
   Saat kita menjalankan kode program JavaScript, secara default
   kode program kita berjalan dalam sloppy mode.
   Pada ECMAScript 5, diperkenalkan mode strict, di mana ketika
   strict mode dijalankan, maka akan merubah beberapa cara kerja di
   JavaScript, seperti:
   - Merubah beberapa JavaScript error yang tadinya silent error
     menjadi throw error (terlihat).
   - Memperbaiki beberapa kesalahan engine JavaScript untuk optimisasi
   - Menolak beberapa kode perintah yang kedepannya akan digunakan
     di ECMAScript.

     tautan:
     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode?retiredLocale=id

    cara mengaktifkan strict mode:
    - Strict Mode bisa diaktifkan dengan menambahkan 'use strict' pada baris
      awal file JavaScript.
    - atau jika kita menggunakan file html 'use strict' bisa ditambahkan di awal
      function.
*/

function useStrictMode() {
    'use strict';
}
useStrictMode();



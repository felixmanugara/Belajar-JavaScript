/* string template adalah fitur yang memungkinkan kita 
   untuk mensubtitusi data dari luar string ke dalam string
   seperti mengambil data dari variable atau melakukan operasi
   matematika, kita tahu bahwa menambahkan string dengan data lain
   dapat dilakukan dengan menggunakan operator +, tetapi pada kasus
   tertentu pengunaan operator + ini akan menyulitkan jika dilakukan 
   dalam jumlah yang banyak. Untuk menggunakan string template, pembuatan
   string harus menggunakan backtick `, bukan petik atau atau petik dua
*/

const FirstName = "Felix";
const Middleame = "Marco";
const LastName = "Manugara";
// kita juga dapat menambahkan expresion
const Value = 85;
const Template = `Name: ${FirstName} ${Middleame} ${LastName}, Lulus: ${Value > 75}`;
// multiline string
const Multiline = `Nama Saya ${FirstName},
saya sedang belajar JavaScript`; 
console.info(Template);
console.info(Multiline);
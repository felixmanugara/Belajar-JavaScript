/* Null
   Merupakan representasi data kosong.
   null berbeda dengan undefined, null berarti variable
   sudah ditambahkan nilai, hanya saja nilainya null.
   sedangkan undefined adalah variable yang belum diberikan
   nilai apapun. */

let firstname = null;

if (firstname === undefined){
    console.info("firstname undefined");
} else if (firstname === null){
    console.info("firstname null");
} else {
    console.info(firstname);
}
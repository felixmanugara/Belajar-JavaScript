/* Closure
   Closure adalah kombinasi function dan bundel referensi
   ke data disekitarnya. Kita tahu bahwa local scope tidak 
   dapat diakses di luar scope tersebut, namun dengan
   fitur closure, kita dapat membuat sebuah function local scope
   berikut dengan referensi data di sekitarnya , dapat diakses
   di luar dari local scope-nya.
*/

function useAdder(value){
    const owner = "Felix";

    function add(param){
        console.info(owner);
        return value + param;
    }
    return add;
}

const adder = useAdder(2);
// kode di atas sama dengan
// function adder(param) {
//     return 2 + param;
// }   

console.info(adder(10));
console.info(adder(20));
/* Nullish Coalescing Operator
   Nullist value adalah null dan undefined.
   Nullist coalescing operator (??) adalah operator yang mirip 
   dengan ternary operator, yang membedakan adalah pada kondisi,
   jika bernilai null atau undefined, baru value default-nya diambil. 
 */

// tanpa Nullish Coalescing Operator
let param;

let data = param;
if (data === undefined || data === null) {
    data = "Nilai Default";
}

console.info(data);

// dengan Nullish Coalescing Operator
data = param ?? "Nilai Default";

console.log(data)
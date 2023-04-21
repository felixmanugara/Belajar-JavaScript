/* this
   kata kunci this adalah referensi ke object milik siapa
   tiap lokasi kata kunci this, bisa berbeda-beda referensi
   pemiliknya. Dalam object method, this merupakan referensi
   ke object pemilik function-nya.
   Di Global scope, this merupakan referensi ke global object (di browser biasanya window)
   Dalam Function, this merupakan referensi ke global object (di browser biasanya window)
   Di function dengan strict mode, this adalah undefined (akan dibahas nanti)
   Dalam event, this merupakan referensi ke element yang menerima
   event (dibahas di materi Document Object Model)
*/

//mencoba this di global scope
console.info(this); // window

//mencoba this di dalam function
function sample(){
    console.info(this); //window, 

    function inner(){
        console.info(this); //window
    }
    inner();
}

sample();

//mencoba this di dalam property object
const person = {
    user: "Felix",
    greetUser: function (name){
        console.info(this); // akan me-reference ke pemilik dari object method yaitu person
        /* dengan this kita bisa mengakses 
           property lain dari dalam object 
           method karena kita tidak bisa 
           mengakses property user langsung
           dengan menggunakan person.user dari
           dalam object method ini
        */
       console.info(`Hello ${name} my name is ${this.user}`); // hello marco my name is Felix  
    }
};


person.greetUser("marco");





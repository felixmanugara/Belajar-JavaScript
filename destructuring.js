/* Destructuring
   Destructuring adalah fitur yang bisa digunakan untuk membongkar
   value-value di array atau object ke dalam variable-variable.
   Fitur ini sangat mempermudah kita ketika ingin mengambil data
   dari array atau object tanpa harus melakukan pengambilan data
   satu per satu
*/
{
    console.log("====== destructing array ======");
    const names = ["Felix", "marco", "Manugara"];
    // destructuring array kata kunci ...others
    // digunakan untuk data lainnya (jika datanya banyak) 
    const [firstName, middleName, lastName, ...others] = names;

    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
}

{
    console.log("====== destructing property ======");
    // destructuring object
    const person = {
        firstName:"Felix",
        lastName:"Manugara",
        address: {
            street: "Jalan merdeka",
            city: "Jakarta",
            country: "Indonesia"
        },
        hobby: "watching Movies",
        channel: null
    };

    // nama property harus sama dengan object property
    const {firstName, lastName, address, ...others} = person
    console.info(firstName);
    console.info(lastName);
    console.info(address);
    console.info(others);

    //destructuring nested property
    // const {address:{street,city,country},...others};

}
    /* Desctructing Function Parameter
       Destructing tidak hanya bisa dilakukan di variable, tapi
       juga bisa dilakukan di function parameter. Hal ini membuat
       kita mudah ketika ingin mengambil nested data dalam array
       atau object dalam function.
    */
    
{
    console.log("====== destructing di function 1 (object) ======")
    // destructing di function 1 (object)
    function givePerson({firstName, middleName, lastName}){
        console.info(firstName);
        console.info(middleName);
        console.info(lastName);
    }

    const person = {
        firstName: "Felix",
        middleName: "Marco",
        lastName: "Manugara"
    }

    givePerson(person);
}

{
    console.log("====== destructing di function 2 (array) ======")
    //destructuring function 2 (array)
    function sum([first,second]){
        return first + second;
    }

    console.info(sum([1,2]));
}

{
    /* Default Value
       kita bisa menambahkan default value di destructuring, jadi misal
       kita melakukan destructuring terhadap array, dan ternyata tidak ada datanya
       maka kita bisa menambahkan default value. begitu juga pada object, jika ternyata propertynya tidak ada, maka kita bisa menambahkan default value.
    */
    console.log("====== destructing array dengan default value ======");
    // default value array
    const names = ["Felix","Marco"];
    // set lastname default value "manuagara"
    // jika pada names terdapat value lastName
    // maka default value tidak akan digunakan
    const [firstName, middleName, lastName = "manugara"] = names;
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
    {
        console.log("====== destructing property dengan default value ======");
        // default value object
        const person = {
            firstName: "Felix",
            middleName: "Marco"
        }
        const {firstName, middleName, lastName = "manugara"} = person;
        console.info(firstName);
        console.info(middleName);
        console.info(lastName);



    }
}

{   
    console.log("====== destructing property dengan nama variable lain ======");
    // destructing property dengan nama variable lain
    const person = {
        firstName: "Felix",
        middleName: "Marco"
    }
    const {firstName: namaDepan, middleName: namaTengah, lastName: namaAkhir = "manugara"} = person;
    console.info(namaDepan);
    console.info(namaTengah);
    console.info(namaAkhir);

}